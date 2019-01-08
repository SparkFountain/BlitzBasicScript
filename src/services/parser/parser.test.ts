import * as chai from 'chai';
import {Parser} from './parser';
import {Lexer} from '../lexer/lexer';

const expect = chai.expect;

describe('BBScript Parser Library', () => {
  it('should create an abstract syntax tree from a set of lexer tokens', () => {
    let codeLine = 'Type Chair';
    let tokens = new Lexer().lexLine(codeLine);

    let parser = new Parser();
    let ast = parser.getAbstractSyntaxTree([tokens]);
    console.info(ast);
  });
});
