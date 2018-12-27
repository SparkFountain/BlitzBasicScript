import {Injectable} from '@angular/core';
import {isObservable, Observable, Subscriber} from 'rxjs';
import {ForToNext} from '../../interfaces/code/loops/for-to-next';
import {WhileWend} from '../../interfaces/code/loops/while-wend';
import {RepeatUntil} from '../../interfaces/code/loops/repeat-until';
import {SelectCase} from '../../interfaces/code/conditions/select-case';
import {GameStateService} from '../game-state/game-state.service';
import {Assignment} from '../../interfaces/code/assignment';
import {IfThenElse} from '../../interfaces/code/conditions/if-then-else';
import {Expression} from '../../interfaces/code/expressions/expression';

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

      let result: any;

      if (e.value) {
        if (isObservable(e.value)) {
          e.value.subscribe((response: any) => {
            observer.next(response);
            observer.complete();
          });
        } else {
          observer.next(e.value);
          observer.complete();
        }
      } else {
        //TODO parse abstract syntax tree

        observer.next(null);
        observer.complete();
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
