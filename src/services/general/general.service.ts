import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {ForToNext} from '../../interfaces/code/loops/for-to-next';
import {WhileWend} from '../../interfaces/code/loops/while-wend';
import {RepeatUntil} from '../../interfaces/code/loops/repeat-until';
import {SelectCase} from '../../interfaces/code/conditions/select-case';
import {GameStateService} from '../game-state/game-state.service';
import {Assignment} from '../../interfaces/code/assignment';
import {IfThenElse} from '../../interfaces/code/conditions/if-then-else';
import {Expression} from '../../interfaces/code/expressions/expression';
import {NumExpOp} from '../../interfaces/code/expressions/numerical-expression';
import {BoolExpOp} from '../../interfaces/code/expressions/boolean-expression';
import {StringExpOp} from '../../interfaces/code/expressions/string-expression';

@Injectable()
export class GeneralService {
  constructor(private gameState: GameStateService) {

  }

  public assign(e: Assignment): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      let expressionValue: any = this.evaluateExpression(e.expression);
      //console.info('Expression value:', expressionValue);

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
  }

  public evaluateExpression(e: Expression): number | boolean | string {
    console.info('Expression:', e);

    if (e.operations.length === 0) {
      return e.terms[0];
    } else {
      e.operations.forEach((o: NumExpOp | BoolExpOp | StringExpOp) => {

      });
    }

    return null;
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
