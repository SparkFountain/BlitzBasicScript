import { NumericExpression } from './numerical-expression';
import { BooleanExpression } from './boolean-expression';
import { StringExpression } from './string-expression';
import { CommandStatement } from './command';
import { ArithmeticOperator } from '../types/arithmetic-operator';
import { ArithmeticTerm } from '../types/arithmetic-term';

export class ArithmeticExpression {
  public terms: ArithmeticTerm[];
  public operators: ArithmeticOperator[];

  constructor(terms: ArithmeticTerm[], operators: ArithmeticOperator[]) {
    this.terms = terms;
    this.operators = operators;
  }
}
