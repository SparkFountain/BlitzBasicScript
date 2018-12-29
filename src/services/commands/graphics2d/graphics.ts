import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {Graphics2dService} from '../../2d/graphics2d.service';

@Injectable()
export class CommandsGraphics2dGraphics {
  constructor(private babylonjs: BabylonJSService,
              private graphics2dService: Graphics2dService) {

  }

  cls() {

  }

  clsColor(red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setClearColor(red / 255, green / 255, blue / 255);
  }

  color() {

  }

  line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.graphics2dService.line(beginX, beginY, endX, endY);
  }

  origin() {

  }

  oval(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return this.graphics2dService.oval(x, y, width, height, filled);
  }

  rect(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return this.graphics2dService.rect(x, y, width, height, filled);
  }

  viewport() {

  }
}
