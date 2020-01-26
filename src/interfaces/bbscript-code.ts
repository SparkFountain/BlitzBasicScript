import { Observable } from 'rxjs';

export interface BBScriptCode {
  globals: object;
  statements: {
    category: string,
    command: string,
    params: any[],
    global?: string
  }[];
  mainLoop$: Observable<any>[];
  functions$: Observable<any>[];
  types: object;
}
