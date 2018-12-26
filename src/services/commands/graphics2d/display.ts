import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {Observable, Subscriber} from 'rxjs';

@Injectable()
export class CommandsGraphics2dDisplay {
  constructor(private babylonjs: BabylonJSService) {

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
    return this.babylonjs.initGraphics(width, height);
  }

  graphicsDepth() {

  }

  graphicsHeight() {

  }

  graphicsWidth() {

  }
}
