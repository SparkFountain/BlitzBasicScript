import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dPixelService {
  constructor(private graphics2d: Render2dService, private gameState: GameStateService) {}

  async colorBlue(): Promise<number> {
    return this.gameState.getScreenProperties().color.blue;
  }

  async colorGreen(): Promise<number> {
    return this.gameState.getScreenProperties().color.green;
  }

  async colorRed(): Promise<number> {
    return this.gameState.getScreenProperties().color.red;
  }

  async plot(x: number, y: number): Promise<void> {
    return this.graphics2d.plot(x, y);
  }
}
