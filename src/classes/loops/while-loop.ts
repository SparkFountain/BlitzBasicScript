import { LogicalExpression } from '../expressions/logical-expression';
import { CodeBlock } from 'bbscript/src/interfaces/code/block';

export class WhileLoop {
  public condition: LogicalExpression;
  public statements: CodeBlock[];

  constructor(condition: LogicalExpression, statements: CodeBlock[]) {
    this.condition = condition;
    this.statements = statements;
  }
}
