import { Expression } from '../../../types/expression';

export interface NumericalExpression extends Expression {
  operations: NumExpOp[];
}

export type NumExpOp = '+' | '-' | '*' | '/' | '~' | 'Mod' | 'Xor';
