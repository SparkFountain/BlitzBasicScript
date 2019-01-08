import {Observable} from 'rxjs';

export interface IfThenElse {
  conditions: ConditionalBlock[];
}

type ConditionalBlock = {
  condition: boolean;
  statements: Observable<any>[];
}
