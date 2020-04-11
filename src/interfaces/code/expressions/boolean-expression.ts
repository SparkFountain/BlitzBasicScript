import { Expression } from '../../../types/expression';

export interface BooleanExpression extends Expression {
  operations: BoolExpOp[];
}

export type BoolExpOp = 'And' | 'Or' | 'Not' | 'Xor';
