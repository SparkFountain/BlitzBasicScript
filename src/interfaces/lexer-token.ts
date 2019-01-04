import {LexerTokenCategory} from '../enums/lexer/lexerTokenCategory';

export interface LexerToken {
    which: LexerTokenCategory;
    value: string;
    offset: { x: number, y: number };
}
