import {NumExpOp} from './numerical-expression';
import {BoolExpOp} from './boolean-expression';
import {StringExpOp} from './string-expression';

export interface Expression{
  terms: any[]
  operations: NumExpOp[] | BoolExpOp[] | StringExpOp[]; //TODO can also be mixed (how to define that in TypeScript?)
}
