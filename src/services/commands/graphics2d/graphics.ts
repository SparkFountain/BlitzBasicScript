import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';

@Injectable()
export class CommandsGraphics2dGraphics {
  constructor(private babylonjs: BabylonJSService) {

  }

  cls() {

  }

  clsColor(red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setRenderBackgroundColor(red / 255, green / 255, blue / 255);
  }

  color() {

  }

  line() {

  }

  origin() {

  }

  oval() {

  }

  rect() {

  }

  viewport() {

  }
}
