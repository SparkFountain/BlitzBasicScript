import {Injectable} from '@angular/core';
import {CommandsBasicsDiverse} from './basics/diverse';
import {GameStateService} from '../game-state/game-state.service';
import {CommandsGraphics2dDisplay} from './graphics2d/display';

//TODO remove this service
@Injectable()
export class CommandService {
  basics: any;

  constructor(private gameState: GameStateService) {
    this.basics = {
      diverse: new CommandsBasicsDiverse()
    };
  }
}
