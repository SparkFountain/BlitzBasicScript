import {NumExpOp} from './numerical-expression';
import {BoolExpOp} from './boolean-expression';
import {StringExpOp} from './string-expression';

export interface Expression {
  operation?: any;
  value?: any;
  left?: Expression;
  right?: Expression;
}
