import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {LexerToken} from '../interfaces/lexer-token';
import {Lexer} from '../services/lexer/lexer.service';
import {Parser} from '../services/parser/parser.service';
import {CodeGenerator} from '../services/code-generator/code-generator.service';
import {AbstractSyntaxTree} from '../interfaces/parser/abstract-syntax-tree';
import {BbscriptCode} from '../interfaces/bbscript-code';
import {concat} from 'rxjs';
import {GameStateService} from '../services/game-state/game-state.service';
import {BabylonJSService} from '../services/babylon-js/babylon-js.service';
import {Graphics2dService} from '../services/2d/graphics2d.service';
import {GuiService} from '../services/gui/gui.service';

@Component({
  selector: 'blitz-basic-script-canvas',
  templateUrl: 'blitz-basic-script.html',
  styleUrls: ['blitz-basic-script.scss']
})
export class BlitzBasicScriptComponent implements OnInit, AfterViewInit {
  @Input('code') code: string[][];
  @Input('debug') debug?: boolean;

  @ViewChild('canvas2d') canvas2d: ElementRef;
  @ViewChild('canvas3d') canvas3d: ElementRef;
  private canvasFocused: boolean;

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    if (this.canvasFocused) {
      console.log(event);
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    if (this.canvasFocused) {
      console.log(event);
    }
  }

  @HostListener('window:mousedown', ['$event'])
  mouseDownEvent(event: MouseEvent) {
    if (this.canvasFocused) {
      console.log(event);
    }
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUpEvent(event: MouseEvent) {
    if (this.canvasFocused) {
      console.log(event);
    }
  }

  constructor(private lexer: Lexer,
              private parser: Parser,
              private codeGenerator: CodeGenerator,
              private gameState: GameStateService,
              private babylonjs: BabylonJSService,
              private graphics2d: Graphics2dService,
              private gui: GuiService
  ) {
    this.canvasFocused = false;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Initialize BabylonJS Engine
    this.babylonjs.initEngine(this.canvas3d.nativeElement);

    // Create the scene.
    this.babylonjs.createScene();

    // Initialize 2D Service
    this.graphics2d.initCanvas(this.canvas2d.nativeElement);

    // Initialize GUI Service
    //TODO only if this would be necessary
    //this.gui.initCanvas(this.canvas3d.nativeElement);

    //console.info('Source code:', this.code);

    let lexerTokens: LexerToken[][] = this.lexer.lexCode(this.code);
    //console.info('Lexer Tokens:', lexerTokens);

    let abstractSyntaxTree: AbstractSyntaxTree = this.parser.getAbstractSyntaxTree(lexerTokens);
    //console.info('Abstract Syntax Tree:', abstractSyntaxTree);

    let bbscriptCode = this.codeGenerator.getFakeTargetCode();  //createTargetCode(abstractSyntaxTree);
    //console.info('Target Code:', bbscriptCode);

    // Start render loop.
    this.babylonjs.mainLoop(bbscriptCode.mainLoop);

    //execute code lines
    this.executeCode(bbscriptCode);
  }

  executeCode(code: BbscriptCode): void {
    if (this.debug) {
      //TODO different code execution with break points
    }

    //TODO handle main loop

    concat(...code.statements).subscribe(
      () => {
        console.info('Next statement has been executed.');
      },
      () => {
      },
      () => {
        console.info('### ALL CODE STATEMENTS EXECUTED ###');
      }
    );
  }
}
