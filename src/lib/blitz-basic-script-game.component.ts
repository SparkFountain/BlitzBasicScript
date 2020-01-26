import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { LexerService } from '../services/lexer.service';
import { ParserService } from '../services/parser.service';
import { BBScriptCode } from '../interfaces/bbscript-code';
import { concat, Observable, Subscriber } from 'rxjs';
import { GameStateService } from '../services/game-state.service';
import { BabylonJSService } from '../services/babylon-js.service';
import { GuiService } from '../services/gui.service';
import { LanguageService } from '../services/language.service';
import { Render2dService } from '../services/render2d.service';
import { LexerToken } from '../interfaces/lexer-token';
import { CommandsBasicsService } from '../services/commands/basics.service';
import { CommandsDataService } from '../services/commands/data.service';
import { CommandsGraphics2DService } from '../services/commands/graphics2d.service';
import { CommandsGraphics3DService } from '../services/commands/graphics3d.service';
import { CommandsGUIService } from '../services/commands/gui.service';
import { CommandsIOService } from '../services/commands/io.service';
import { CommandsSoundService } from '../services/commands/sound.service';

@Component({
  selector: 'blitz-basic-script-game',
  templateUrl: 'blitz-basic-script-game.html',
  styleUrls: ['blitz-basic-script-game.scss']
})
export class BlitzBasicScriptComponent implements OnInit, AfterViewInit {
  @Input() code: string[];
  @Input() debugMode?: boolean;
  @Input() title?: string;

  @ViewChild('canvas2d', { static: false }) canvas2d: ElementRef;
  @ViewChild('canvas3d', { static: false }) canvas3d: ElementRef;
  public canvasFocused: boolean;

  public playing: boolean;

  /** Key code conversion schema **/
  private readonly keyCodes = {
    Escape: 1,
    Digit1: 2,
    Digit2: 3,
    Digit3: 4,
    Digit4: 5,
    Digit5: 6,
    Digit6: 7,
    Digit7: 8,
    Digit8: 9,
    Digit9: 10,
    Digit0: 11,
    Minus: 12,
    Equal: 13,
    Backspace: 14,
    Tab: 15,
    KeyQ: 16,
    KeyW: 17,
    KeyE: 18,
    KeyR: 19,
    KeyT: 20,
    KeyY: 21,
    KeyU: 22,
    KeyI: 23,
    KeyO: 24,
    KeyP: 25,
    BracketLeft: 26,
    BracketRight: 27,
    Enter: 28,
    ControlLeft: 29,
    KeyA: 30,
    KeyS: 31,
    KeyD: 32,
    KeyF: 33,
    KeyG: 34,
    KeyH: 35,
    KeyJ: 36,
    KeyK: 37,
    KeyL: 38,
    Semicolon: 39,
    Quote: 40,
    Backquote: 41,
    ShiftLeft: 42,
    Backslash: 43,
    KeyZ: 44,
    KeyX: 45,
    KeyC: 46,
    KeyV: 47,
    KeyB: 48,
    KeyN: 49,
    KeyM: 50,
    Comma: 51,
    Period: 52,
    Slash: 53,
    ShiftRight: 54,
    Multiply: 55,
    AltLeft: 56,
    Space: 57,
    CapsLock: 58,
    F1: 59,
    F2: 60,
    F3: 61,
    F4: 62,
    F5: 63,
    F6: 64,
    F7: 65,
    F8: 66,
    F9: 67,
    F10: 68,
    NumLock: 69,
    ScrollLock: 70,
    NumPad7: 71,
    NumPad8: 72,
    NumPad9: 73,
    // Minus: 74,
    NumPad4: 75,
    NumPad5: 76,
    NumPad6: 77,
    Plus: 78,
    NumPad1: 79,
    NumPad2: 80,
    NumPad3: 81,
    NumPad0: 82,
    // Comma: 83,
    IntlBackslash: 86,
    F11: 87,
    F12: 88,
    TODO: 153,
    ControlRight: 157,
    AltRight: 184,
    ArrowUp: 200,
    ArrowLeft: 203,
    ArrowRight: 205,
    ArrowDown: 208
  };

  private readonly mouseCodes = {
    0: 1,
    1: 3,
    2: 2
  };

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    // console.log(event);
    this.gameState.setKeyDown(this.keyCodes[event.code], true);
    this.gameState.setKeyAsciiCode(event.key.charCodeAt(0));
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    this.gameState.incrementKeyHit(this.keyCodes[event.code]);
  }

  @HostListener('window:mousedown', ['$event'])
  mouseDownEvent(event: MouseEvent) {
    this.gameState.setMouseDown(this.mouseCodes[event.button], true);
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUpEvent(event: MouseEvent) {
    this.gameState.incrementMouseHit(this.mouseCodes[event.button]);
  }

  constructor(private language: LanguageService,
    private lexer: LexerService,
    private parser: ParserService,
    private gameState: GameStateService,
    private babylonjs: BabylonJSService,
    private render2d: Render2dService,
    // private gui: GuiService,

    private basics: CommandsBasicsService,
    private data: CommandsDataService,
    private graphics2d: CommandsGraphics2DService,
    private graphics3d: CommandsGraphics3DService,
    private gui: CommandsGUIService,
    private io: CommandsIOService,
    private sound: CommandsSoundService
  ) {
    this.canvasFocused = false;
    this.playing = false;
  }

  ngOnInit(): void {
    if (this.title === undefined) {
      this.title = 'BlitzBasicScript Game';
    }
  }

  ngAfterViewInit(): void {

  }

  play(): void {
    this.playing = true;

    const tokens: LexerToken[][] = this.lexer.lexCode(this.code);
    const gameCode: BBScriptCode = this.parser.createGameCode(tokens);
    console.info('GAME CODE', gameCode);
    this.executeCode(gameCode);
  }

  debug(): void {
    console.warn('Debug mode has not been implemented yet.');
  }

  stop(): void {
    this.playing = false;
  }

  executeCode(code: BBScriptCode): void {
    // Initialize BabylonJS Engine
    this.babylonjs.initEngine(this.canvas3d.nativeElement);

    // Create the scene.
    this.babylonjs.createScene();

    // Initialize 2D Service
    this.render2d.initCanvas(this.canvas2d.nativeElement);
    console.info('initCanvas executed');

    // Initialize GUI Service
    // TODO only if this would be necessary
    // this.gui.initCanvas(this.canvas3d.nativeElement);

    // console.info('Source code:', this.code);

    // initialize language service
    this.language.initialize().subscribe(() => {
      /*console.info(this.code[0].join(''));
      let lexerTokens: LexerToken[][] = this.lexer.lexCodeReactive(this.code);
      console.info('Lexer Tokens:', lexerTokens);

      //this.parser.parseCondition(lexerTokens[0]);

      let bbscriptCode: BBScriptCode = this.parser.createGameCode(lexerTokens);
      console.info('Target Code:', bbscriptCode);

      // Start render loop.
      this.babylonjs.mainLoop(bbscriptCode.mainLoop);

      //execute code lines
      this.executeCode(bbscriptCode);*/
    });

    if (this.debugMode) {
      // TODO different code execution with break points
    }

    console.info('Executing Code');

    // TODO handle main loop
    let stm = code.statements[0];
    this[stm.category][stm.command](...stm.params).subscribe((res) => {
      this.gameState.setGlobal(stm.global, res);

      let stm2 = code.statements[1];
      console.info('Statement 2:', stm2);
      this[stm2.category][stm2.command](...stm2.params).subscribe();
    });

    // concat(...code.statements.fn()).subscribe(
    //   () => {
    //     console.info('Next statement has been executed.');
    //   },
    //   () => {
    //   },
    //   () => {
    //     console.info('### ALL CODE STATEMENTS EXECUTED ###');
    //   }
    // );
  }
}
