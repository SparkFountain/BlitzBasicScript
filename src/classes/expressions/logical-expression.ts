import { Term } from 'bbscript/src/types/arithmetic-term';
import { LogicalOperator } from 'bbscript/src/types/logical-operator';

export class LogicalExpression {
  public terms: Term[];
  public operators: LogicalOperator[];

  constructor(terms: Term[], operators: LogicalOperator[]) {
    this.terms = terms;
    this.operators = operators;
  }
}
