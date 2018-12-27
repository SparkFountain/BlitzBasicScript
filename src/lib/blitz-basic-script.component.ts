import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LexerToken} from '../interfaces/lexer-token';
import {Lexer} from '../services/lexer/lexer.service';
import {Parser} from '../services/parser/parser.service';
import {CodeGenerator} from '../services/code-generator/code-generator.service';
import {AbstractSyntaxTree} from '../interfaces/parser/abstract-syntax-tree';
import {BbscriptCode} from '../interfaces/bbscript-code';
import {concat} from 'rxjs';
import {GameStateService} from '../services/game-state/game-state.service';
import {BabylonJSService} from '../services/babylon-js/babylon-js.service';

@Component({
  selector: 'blitz-basic-script-canvas',
  templateUrl: 'blitz-basic-script.html',
  styles: []
})
export class BlitzBasicScriptComponent implements OnInit, AfterViewInit {
  @Input('code') code: string[][];
  @Input('debug') debug?: boolean;

  @ViewChild('canvas') canvas: ElementRef;

  constructor(private lexer: Lexer,
              private parser: Parser,
              private codeGenerator: CodeGenerator,
              private gameState: GameStateService,
              private babylonjs: BabylonJSService
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.babylonjs.initEngine(this.canvas.nativeElement);

    // Create the scene.
    this.babylonjs.createScene();

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
