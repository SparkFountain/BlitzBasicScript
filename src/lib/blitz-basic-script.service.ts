import { Injectable } from '@angular/core';
import { LexerService } from '../services/lexer.service';
import { ParserService } from '../services/parser.service';
import { LexerToken } from '../interfaces/lexer-token';

@Injectable({
  providedIn: 'root'
})
export class BlitzBasicScriptService {

  constructor(private lexer: LexerService, private parser: ParserService) {
  }

  lexLine(codeLine: string): LexerToken[] {
    return this.lexer.lexLine(codeLine);
  }

  lexCode(code: string[]): LexerToken[][] {
    return this.lexer.lexCode(code);
  }

  parse(lexerCode: LexerToken[][]): any {
    return this.parser.createGameCode(lexerCode);
  }
}
