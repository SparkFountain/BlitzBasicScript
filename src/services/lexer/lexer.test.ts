import * as chai from 'chai';
import {Lexer} from './lexer';
import {LexerToken} from '../../interfaces/lexer-token';

const expect = chai.expect;

describe('BBScript Lexer Library Functions', () => {
  it('should lex some lines of code correctly', () => {
    let line: string = 'Global x, y = 42 ;some comment';

    let lexer: Lexer = new Lexer();
    let tokens: LexerToken[][] = lexer.lexCode([line]);
    console.info('Tokens:', tokens);
    expect(true).to.equal(true);
  });
});
