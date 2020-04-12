import { Injectable } from '@angular/core';
import { BabylonJSService } from '../../babylon-js.service';
import { GameStateService } from '../../game-state.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dDisplayService {
  constructor(
    private babylonjs: BabylonJSService,
    private graphics2d: Render2dService,
    private gameState: GameStateService
  ) {}

  async endGraphics(): Promise<void> {
    return null;
  }

  async gfxModeDepth(): Promise<number> {
    return 32;
  }

  async gfxModeExists(): Promise<boolean> {
    return true;
  }

  async graphics(width: number, height: number): Promise<void> {
    this.gameState.setScreenWidth(width);
    this.gameState.setScreenHeight(height);
    this.gameState.setScreenViewport({
      beginX: 0,
      beginY: 0,
      width: width,
      height: height
    });

    // TODO: refactor
    return null;
    // return concat(
    //     this.babylonjs.initGraphics(width, height),
    //     this.graphics2d.initGraphics(width, height)
    // );
  }

  async graphicsDepth(): Promise<number> {
    return 32;
  }

  async graphicsHeight(): Promise<number> {
    return this.gameState.getScreenProperties().height;
  }

  async graphicsWidth(): Promise<number> {
    return this.gameState.getScreenProperties().width;
  }
}
