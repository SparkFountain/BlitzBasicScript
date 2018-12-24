import {LexerTokenCategory} from '../enums/lexerTokenCategory';

export interface LexerToken {
  which: LexerTokenCategory;
  value: string;
  offset: { x: number, y: number };
}
