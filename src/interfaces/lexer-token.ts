import {LexerTokenCategory} from '../enums/lexer/lexer-token-category';

export interface LexerToken {
    which: LexerTokenCategory;
    value: string;
    offset: { x: number, y: number };
}
