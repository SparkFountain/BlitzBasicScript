import { BooleanExpression } from '../classes/boolean-expression';
import { StringExpression } from '../classes/string-expression';
import { NumericExpression } from '../classes/numerical-expression';
import { CommandStatement } from '../classes/command';
import { VariableExpression } from '../classes/variable-expression';
import { ArithmeticExpression } from '../classes/arithmetic-expression';
import { LogicalExpression } from '../classes/logical-expression';

export type Expression =
  | NumericExpression
  | BooleanExpression
  | StringExpression
  | CommandStatement
  | ArithmeticExpression
  | LogicalExpression
  | VariableExpression;
