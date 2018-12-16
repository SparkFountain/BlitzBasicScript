import {Injectable} from '@angular/core';
import {CommandsBasicsDiverse} from './basics/diverse';
import {CommandsBasicsMaths} from './basics/maths';
import {CommandsBasicsStrings} from './basics/strings';
import {CommandsBasicsTimeRandom} from './basics/time-random';

@Injectable()
export class CommandService {
  constructor(
    private basicsDiverse: CommandsBasicsDiverse,
    private basicsMaths: CommandsBasicsMaths,
    private basicsStrings: CommandsBasicsStrings,
    private basicsTimeRandom: CommandsBasicsTimeRandom
  ) {

  }
}
