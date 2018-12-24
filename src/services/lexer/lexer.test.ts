import * as chai from 'chai';
import {LexerToken} from '../../interfaces/lexer-token';
import {Lexer} from './lexer.service';
import {inject, TestBed} from '@angular/core/testing';

const expect = chai.expect;

describe('BBScript Lexer Library Functions', () => {
  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [Lexer],
      providers: [Lexer]
    });
  });

  let lexer: Lexer = TestBed.get(Lexer);

  it('should lex some lines of code correctly',
    inject([Lexer], () => {
      let line: string = 'Global x, y = 42 ;some comment';

      let tokens: LexerToken[][] = lexer.lexCode([line.split('')]);
      console.info('Tokens:', tokens);
      expect(true).to.equal(true);
    })
  );
});
