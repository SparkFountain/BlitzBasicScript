import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { LexerService } from '../services/lexer.service';
import { ParserService } from '../services/parser.service';
import { AbstractSyntax } from '../interfaces/abstract-syntax';
import { GameStateService, ScreenProperties } from '../services/game-state.service';
import { BabylonJSService } from '../services/babylon-js.service';
import { GuiService } from '../services/gui.service';
import { LanguageService } from '../services/language.service';
import { Render2dService } from '../services/render2d.service';
import { LexerToken } from '../interfaces/lexer-token';
import { CommandStatement } from '../classes/command';
import { CodeBlock } from '../interfaces/code/block';
import { InterpreterService } from '../services/interpreter.service';
import { StringExpression } from '../classes/expressions/string-expression';
import { Assignment } from '../classes/assignment';
import { NumericExpression } from '../classes/expressions/numerical-expression';
import { VariableExpression } from '../classes/expressions/variable-expression';
import { ArithmeticExpression } from '../classes/expressions/arithmetic-expression';
import { KeyCode } from '../enums/events/key-codes';
import { MouseCode } from '../enums/events/mouse-codes';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'blitz-basic-script-game',
  templateUrl: 'blitz-basic-script-game.html',
  styleUrls: ['blitz-basic-script-game.scss']
})
export class BlitzBasicScriptComponent implements OnInit, AfterViewInit {
  @Input('icon') iconPath?: string;
  @Input() code: string[];
  @Input() debugMode?: boolean;
  @Input() title?: string;

  @ViewChild('canvas2d') canvas2d: ElementRef;
  @ViewChild('canvas3d') canvas3d: ElementRef;
  public canvasFocused: boolean;
  public screen: ScreenProperties;

  public playing: boolean;

  private codeBlocks: any[];
  private codeBlockIndex: number;

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    // console.info('[KEY DOWN]', event);
    this.gameState.setKeyDown(KeyCode[this.general.formatUpper(event.code)], true);
    this.gameState.setKeyAsciiCode(event.key.charCodeAt(0));
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    this.gameState.incrementKeyHit(KeyCode[event.code]);
  }

  @HostListener('window:mousedown', ['$event'])
  mouseDownEvent(event: MouseEvent) {
    // console.info('[MOUSE DOWN]', event);
    switch (event.which) {
      case 1:
        this.gameState.setMouseDown(MouseCode.LEFT, true);
        break;
      case 2:
        this.gameState.setMouseDown(MouseCode.MIDDLE, true);
        break;
      case 3:
        this.gameState.setMouseDown(MouseCode.RIGHT, true);
        break;
    }
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUpEvent(event: MouseEvent) {
    // this.gameState.incrementMouseHit(MouseCode[event.button]);
  }

  constructor(
    private language: LanguageService,
    private lexer: LexerService,
    private parser: ParserService,
    private gameState: GameStateService,
    private babylonjs: BabylonJSService,
    private render2d: Render2dService,
    private gui: GuiService,
    private interpreter: InterpreterService,
    private general: GeneralService
  ) {
    this.canvasFocused = false;
    this.playing = false;

    this.screen = this.gameState.getScreenProperties(); // TODO: event mechanism to reflect changes

    this.codeBlockIndex = 0;
  }

  ngOnInit(): void {
    if (this.title === undefined) {
      this.title = 'BlitzBasicScript Game';
    }

    // this.parser.parse('12 * 5 - (5 * (32 + 4)) + 3'); // 12 * 5 - (5 * (32 + 4)) + 3
  }

  ngAfterViewInit(): void {}

  testInterpreter(): void {
    this.codeBlocks = [
      new Assignment('global', 'cone', new CommandStatement('CreateCone', [])),
      new Assignment(
        'global',
        'result',
        new ArithmeticExpression(
          [
            new NumericExpression(13),
            new NumericExpression(15),
            new NumericExpression(Math.PI),
            new NumericExpression(8)
          ],
          ['+', '-', '/']
        )
      ),
      new Assignment('global', 'answerOnEverything', new NumericExpression(42)),
      new CommandStatement('DebugLog', [new VariableExpression('global', 'answerOnEverything')]),
      new Assignment(
        'global',
        'image',
        new CommandStatement('LoadImage', [new StringExpression('/assets/gfx/blitz.png')])
      ),
      new CommandStatement('DrawImage', [
        new VariableExpression('global', 'image'),
        new NumericExpression(50),
        new NumericExpression(50)
      ]),
      new CommandStatement('Color', [
        new NumericExpression(255),
        new NumericExpression(255),
        new NumericExpression(255)
      ]),
      new CommandStatement('Rect', [
        new NumericExpression(75),
        new NumericExpression(75),
        new NumericExpression(150),
        new NumericExpression(150)
      ])
    ];
    this.interpreteNextCodeBlock(); // interprete initial code block
  }

  public async interpreteNextCodeBlock() {
    const codeBlock: CodeBlock = this.codeBlocks[this.codeBlockIndex];
    console.info('Interpreting Code Block', codeBlock);

    switch (codeBlock.constructor.name) {
      case 'Assignment':
        await this.interpreter.assign(codeBlock as Assignment);
        break;
      case 'CommandStatement':
        await this.interpreter.executeCommand(codeBlock as CommandStatement);
        break;
    }

    this.incrementCodeBlock();
  }

  incrementCodeBlock() {
    this.codeBlockIndex++;
    if (this.codeBlockIndex < this.codeBlocks.length) {
      this.interpreteNextCodeBlock();
    }
  }

  play(): void {
    this.playing = true;

    const tokens: LexerToken[][] = this.lexer.lexCode(this.code);
    const abstractSyntax: AbstractSyntax = this.parser.createAbstractSyntax(tokens);
    console.info('Abstract Syntax:', abstractSyntax);
    this.executeCode(abstractSyntax);
  }

  debug(): void {
    console.warn('Debug mode has not been implemented yet.');
  }

  stop(): void {
    this.playing = false;
  }

  executeCode(abstractSyntax: AbstractSyntax): void {
    // Initialize BabylonJS Engine
    this.babylonjs.initEngine(this.canvas3d.nativeElement);

    // Create the scene.
    this.babylonjs.createScene();

    // Initialize 2D Service
    this.render2d.initCanvas(this.canvas2d.nativeElement);
    // console.info('initCanvas executed');

    this.codeBlocks = abstractSyntax.codeBlocks;
    this.interpreteNextCodeBlock();

    // TODO: only for testing
    // this.testInterpreter();

    // Initialize GUI Service
    // TODO only if this would be necessary
    // this.gui.initCanvas(this.canvas3d.nativeElement);

    // console.info('Source code:', this.code);

    // initialize language service
    // this.language.initialize().subscribe(() => {
    //   /*console.info(this.code[0].join(''));
    //   let lexerTokens: LexerToken[][] = this.lexer.lexCodeReactive(this.code);
    //   console.info('Lexer Tokens:', lexerTokens);

    //   //this.parser.parseCondition(lexerTokens[0]);

    //   let bbscriptCode: BBScriptCode = this.parser.createGameCode(lexerTokens);
    //   console.info('Target Code:', bbscriptCode);

    //   // Start render loop.
    //   this.babylonjs.mainLoop(bbscriptCode.mainLoop);

    //   //execute code lines
    //   this.executeCode(bbscriptCode);*/
    // });

    // if (this.debugMode) {
    //   // TODO different code execution with break points
    // }

    // console.info('Executing Code');

    // // TODO handle main loop
    // let stm = code.statements[0];
    // this[stm.category][stm.command](...stm.params).subscribe((res) => {
    //   this.gameState.setGlobal(stm.global, res);

    //   let stm2 = code.statements[1];
    //   console.info('Statement 2:', stm2);
    //   this[stm2.category][stm2.command](...stm2.params).subscribe();
    // });
  }
}
