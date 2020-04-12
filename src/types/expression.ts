import { BooleanExpression } from '../classes/boolean-expression';
import { StringExpression } from '../classes/string-expression';
import { NumericExpression } from '../classes/numerical-expression';
import { CommandStatement } from '../classes/command';
import { VariableExpression } from '../classes/variable-expression';

export type Expression =
  | NumericExpression
  | BooleanExpression
  | StringExpression
  | CommandStatement
  | VariableExpression;
