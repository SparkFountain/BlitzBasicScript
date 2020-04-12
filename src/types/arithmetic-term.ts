import { NumericExpression } from '../classes/numerical-expression';
import { BooleanExpression } from '../classes/boolean-expression';
import { StringExpression } from '../classes/string-expression';
import { CommandStatement } from '../classes/command';
import { ArithmeticExpression } from '../classes/arithmetic-expression';

export type ArithmeticTerm =
  | NumericExpression
  | BooleanExpression
  | StringExpression
  | CommandStatement
  | ArithmeticExpression
  | BooleanExpression;
