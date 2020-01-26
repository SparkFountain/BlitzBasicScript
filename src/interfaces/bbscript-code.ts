import {Observable} from 'rxjs';

export interface BBScriptCode {
    globals: object;
    statements$: Observable<any>[];
    mainLoop$: Observable<any>[];
    functions$: Observable<any>[];
    types: object;
}
