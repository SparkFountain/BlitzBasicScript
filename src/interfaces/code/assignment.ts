import {Expression} from './expressions/expression';

export interface Assignment {
  variable: string;
  type: string;
  expression: Expression;
}
