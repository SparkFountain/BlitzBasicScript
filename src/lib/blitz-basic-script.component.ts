import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LexerToken} from '../interfaces/lexer-token';
import {Lexer} from '../services/lexer/lexer.service';
import {Parser} from '../services/parser/parser.service';
import {CodeGenerator} from '../services/code-generator/code-generator.service';
import {AbstractSyntaxTree} from '../interfaces/abstract-syntax-tree';
import {BbscriptCode} from '../interfaces/bbscript-code';
import {concat} from 'rxjs';

@Component({
  selector: 'blitz-basic-script-canvas',
  templateUrl: 'blitz-basic-script.html',
  styles: []
})
export class BlitzBasicScriptComponent implements OnInit, AfterViewInit {
  @Input('code') code: string[][];
  @Input('debug') debug?: boolean;

  @ViewChild('canvas') canvas: HTMLCanvasElement;

  constructor(private lexer: Lexer,
              private parser: Parser,
              private codeGenerator: CodeGenerator
  ) {
  }

  ngOnInit(): void {
    console.info('Source code:', this.code);

    let lexerTokens: LexerToken[][] = this.lexer.lexCode(this.code);
    console.info('Lexer Tokens:', lexerTokens);

    let abstractSyntaxTree: AbstractSyntaxTree = this.parser.getAbstractSyntaxTree(lexerTokens);
    console.info('Abstract Syntax Tree:', abstractSyntaxTree);

    let bbscriptCode = this.codeGenerator.getFakeTargetCode();  //createTargetCode(abstractSyntaxTree);
    console.info('Target Code:', bbscriptCode);

    this.executeCode(bbscriptCode);
  }

  ngAfterViewInit(): void {
    //TODO initialize Babylon.js and canvas
  }

  executeCode(code: BbscriptCode): void {
    if (this.debug) {
      //TODO different code execution with break points
    }

    //TODO handle main loop

    concat(...code.statements).subscribe(
      () => {
        console.info('Next code has been executed.');
      },
      () => {
      },
      () => {
        console.info('### ALL CODE STATEMENTS EXECUTED ###');
      }
    );
  }
}
