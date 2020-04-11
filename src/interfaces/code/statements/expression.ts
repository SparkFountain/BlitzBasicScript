import { Statement } from '../../../types/statement';
import { Term } from '../../term';
import { Operand } from 'bbscript/src/types/operand';

export interface ExpressionStatement {
  terms: Term[],
  operands: Operand[];
}
