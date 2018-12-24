import {Injectable} from '@angular/core';
import {CommandsBasicsDiverse} from './basics/diverse';

@Injectable()
export class CommandService {
  basics: any;

  constructor() {
    this.basics = {
      diverse: new CommandsBasicsDiverse()
    };
  }
}
