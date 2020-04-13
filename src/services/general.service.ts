import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subscriber } from 'rxjs';
import { ForToNext } from '../interfaces/code/loops/for-to-next';
import { WhileWend } from '../interfaces/code/loops/while-wend';
import { RepeatUntil } from '../interfaces/code/loops/repeat-until';
import { SelectCase } from '../interfaces/code/conditions/select-case';
import { Assignment } from '../classes/assignment';
import { IfThenElse } from '../interfaces/code/conditions/if-then-else';
import { Expression } from '../types/expression';
import { GameStateService } from './game-state.service';

@Injectable()
export class GeneralService {
  constructor(private gameState: GameStateService) {}

  // implementation from: https://stackoverflow.com/a/2117523/2764486
  public createUuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  public formatUpper(value: string) {
    if (value.length === 0) {
      return '';
    }

    let result: string = value[0].toUpperCase();

    for (let i = 1; i < value.length; i++) {
      const char = value[i];
      if (char.toUpperCase() === char) {
        result += `_${char}`;
      } else {
        if (char >= '0' && char <= '9') {
          result += '_';
        }
        result += char.toUpperCase();
      }
    }

    return result;
  }
}
