import { BooleanExpression } from '../classes/boolean-expression';
import { StringExpression } from '../classes/string-expression';
import { NumericalExpression } from '../classes/numerical-expression';
import { CommandStatement } from '../classes/command';

export type Expression = NumericalExpression | BooleanExpression | StringExpression | CommandStatement
