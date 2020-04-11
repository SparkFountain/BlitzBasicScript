import { Expression } from '../../../types/expression';

export interface StringExpression extends Expression {
  operations: StringExpOp[];
}

export type StringExpOp = '+'; //TODO more?
