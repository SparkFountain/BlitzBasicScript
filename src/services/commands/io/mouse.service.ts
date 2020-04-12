import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';

@Injectable()
export class CommandsIOMouseService {
  constructor(private gameState: GameStateService) {}

  async flushMouse(): Promise<void> {
    return this.gameState.flushMouse();
  }

  async getMouse() {}

  async hidePointer(): Promise<void> {
    //TODO set CSS class on canvas
  }

  async mouseDown(code: number): Promise<boolean> {
    return this.gameState.isMouseDown(code);
  }

  async mouseHit(code: number): Promise<number> {
    return this.gameState.getMouseHits(code);
  }

  async mouseWait() {}

  async mouseX() {}

  async mouseXSpeed() {}

  async mouseY() {}

  async mouseYSpeed() {}

  async mouseZ() {}

  async mouseZSpeed() {}

  async moveMouse() {}

  async showPointer() {}

  async waitMouse() {}
}
