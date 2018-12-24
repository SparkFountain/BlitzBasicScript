import {Observable} from 'rxjs';

export interface BbscriptCode {
  globals: any[];
  statements: Observable<any>[];
  functions: any[];
  types: [];
}
