import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { BabylonJSService } from '../../babylon-js.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dGraphicsService {
  constructor(
    private babylonjs: BabylonJSService,
    private render2dService: Render2dService,
    private gameState: GameStateService
  ) {}

  cls(): Promise<void> {
    return this.render2dService.cls();
  }

  clsColor(red: number, green: number, blue: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setScreenClsColor({
        red: red,
        green: green,
        blue: blue,
      });

      resolve();
    });
  }

  color(red: number, green: number, blue: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setScreenColor({
        red: red,
        green: green,
        blue: blue,
      });

      resolve();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.render2dService.line(beginX, beginY, endX, endY);
  }

  origin(x: number, y: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setScreenOrigin({
        x: x,
        y: y,
      });

      resolve();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    return this.render2dService.oval(x, y, width, height, filled);
  }

  rect(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    return this.render2dService.rect(x, y, width, height, filled);
  }

  viewport(beginX: number, beginY: number, width: number, height: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setScreenViewport({
        beginX: beginX,
        beginY: beginY,
        width: width,
        height: height,
      });

      resolve();
    });
  }
}
