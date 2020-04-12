import { AssignmentScope } from '../types/assignment-scope';

export class VariableExpression {
  public id: string;
  public scope: AssignmentScope;

  constructor(id: string, scope: AssignmentScope) {
    this.id = id;
    this.scope = scope;
  }
}
