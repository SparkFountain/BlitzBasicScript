import {Injectable} from '@angular/core';
import {forkJoin, Observable, Subscriber} from 'rxjs';
import {ForToNext} from '../interfaces/code/loops/for-to-next';
import {WhileWend} from '../interfaces/code/loops/while-wend';
import {RepeatUntil} from '../interfaces/code/loops/repeat-until';
import {SelectCase} from '../interfaces/code/conditions/select-case';
import {Assignment} from '../classes/assignment';
import {IfThenElse} from '../interfaces/code/conditions/if-then-else';
import {Expression} from '../types/expression';
import { GameStateService } from './game-state.service';

@Injectable()
export class GeneralService {
    constructor(private gameState: GameStateService) {

    }

    public assign(e: Assignment): Observable<void> {
        return new Observable((observer: Subscriber<void>) => {
            //console.info('Expression value:', expressionValue);

            this.evaluateExpression(e.expression).subscribe((expressionValue: any) => {
                switch (e.type) {
                    case 'global':
                        this.gameState.setGlobal(e.variable, expressionValue);
                        console.info(e.variable + ':', this.gameState.getGlobal(e.variable));
                        break;
                    case 'dim':
                        this.gameState.setDim(e.variable, expressionValue);
                }

                observer.next();
                observer.complete();
            });
        });
    }

    public evaluateExpression(e: Expression): Observable<any> {
        return new Observable<any>((observer: Subscriber<any>) => {
            console.info('Expression:', e);

            if (!e.operation) {
                if (e.value) {
                    e.value.subscribe((value: any) => {
                        observer.next(value);
                        observer.complete();
                    });
                } else {
                    observer.next(null);
                    observer.complete();
                }
            } else {
                //TODO _deprecated_parse abstract syntax tree
                forkJoin([this.evaluateExpression(e.left), this.evaluateExpression(e.right)])
                    .subscribe((innerValues: any[]) => {
                        console.info('innerValues:', innerValues);

                        let result: any;
                        switch (e.operation) {
                            case '+':
                                result = innerValues[0] + innerValues[1];
                                break;
                            case '-':
                                result = innerValues[0] - innerValues[1];
                                break;
                            case '*':
                                result = innerValues[0] * innerValues[1];
                                break;
                            case '/':
                                result = innerValues[0] / innerValues[1];
                                break;
                            case 'And':
                                result = innerValues[0] && innerValues[1];
                                break;
                            case 'Not':
                                result = !(innerValues[0]);
                                break;
                            case 'Or':
                                result = innerValues[0] || innerValues[1];
                                break;
                            case 'Xor':
                                result = innerValues[0] ? !(innerValues[1]) : innerValues[1];
                                break;
                            case 'Mod':
                                result = innerValues[0] % innerValues[1];
                                break;
                        }

                        observer.next(result);
                        observer.complete();
                    });
            }
        });
    }

    public forToNext(e: ForToNext): Observable<any> {
        return new Observable((observer) => {
            observer.next('TODO');
            observer.complete();
        });
    }

    public WhileWend(e: WhileWend): Observable<any> {
        return new Observable((observer) => {
            observer.next('TODO');
            observer.complete();
        });
    }

    public RepeatUntil(e: RepeatUntil): Observable<any> {
        return new Observable((observer) => {
            observer.next('TODO');
            observer.complete();
        });
    }

    public ifThenElse(e: IfThenElse): Observable<any> {
        return new Observable((observer) => {
            observer.next('TODO');
            observer.complete();
        });
    }

    public selectCase(e: SelectCase): Observable<any> {
        return new Observable((observer) => {
            observer.next('TODO');
            observer.complete();
        });
    }
}
