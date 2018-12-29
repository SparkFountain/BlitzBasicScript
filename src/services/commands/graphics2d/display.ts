import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {concat, forkJoin, Observable} from 'rxjs';
import {Graphics2dService} from '../../2d/graphics2d.service';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsGraphics2dDisplay {
  constructor(private babylonjs: BabylonJSService,
              private graphics2d: Graphics2dService,
              private gameState: GameStateService
  ) {

  }

  endGraphics() {

  }

  gfxDriverName() {

  }

  gfxModeDepth() {

  }

  gfxModeExists() {

  }

  graphics(width: number, height: number): Observable<void> {
    this.gameState.set('screen.width', width);
    this.gameState.set('screen.height', height);

    return concat(
      this.babylonjs.initGraphics(width, height),
      this.graphics2d.initGraphics(width, height)
    );
  }

  graphicsDepth() {

  }

  graphicsHeight() {

  }

  graphicsWidth() {

  }
}
