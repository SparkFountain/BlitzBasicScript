import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { BabylonJSService } from '../../babylon-js.service';
import { Render2dService } from '../../render2d.service';
import { BbScriptBuffer } from 'bbscript/src/classes/in-game/2d/buffer';

@Injectable()
export class CommandsGraphics2dGraphicsService {
  constructor(
    private babylonjs: BabylonJSService,
    private render2dService: Render2dService,
    private gameState: GameStateService
  ) {}

  async availVidMem(): Promise<number> {
    // TODO: this must be implemented inside of a "Render3D" service with access to webgl context
    // see https://stackoverflow.com/questions/15464896/get-cpu-gpu-memory-information
    // see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    return 0;
    // return this.render2dService.getAvailableVideoMemory();
  }

  async backBuffer(): Promise<BbScriptBuffer> {
    // TODO: implement fallback such that an empty buffer will be returned
    return null;
  }

  async cls(): Promise<void> {
    return this.render2dService.cls();
  }

  async clsColor(red: number, green: number, blue: number): Promise<void> {
    this.gameState.setScreenClsColor({
      red: red,
      green: green,
      blue: blue
    });
  }

  async color(red: number, green: number, blue: number): Promise<void> {
    this.gameState.setScreenColor({
      red: red,
      green: green,
      blue: blue
    });
  }

  async line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.render2dService.line(beginX, beginY, endX, endY);
  }

  async origin(x: number, y: number): Promise<void> {
    this.gameState.setScreenOrigin({
      x: x,
      y: y
    });
  }

  async oval(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    return this.render2dService.oval(x, y, width, height, filled);
  }

  async rect(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    return this.render2dService.rect(x, y, width, height, filled);
  }

  async viewport(beginX: number, beginY: number, width: number, height: number): Promise<void> {
    this.gameState.setScreenViewport({
      beginX: beginX,
      beginY: beginY,
      width: width,
      height: height
    });
  }
}
