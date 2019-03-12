import {Observable} from 'rxjs';

export interface BbscriptCode {
    globals: any[];
    statements: Observable<any>[];
    mainLoop: Observable<any>[];
    functions: Observable<any>[];
    types: any[];
}
