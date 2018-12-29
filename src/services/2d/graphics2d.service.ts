import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import * as BABYLON from '../babylon-js/babylon-js.service';
import {GameStateService} from '../game-state/game-state.service';

@Injectable()
export class Graphics2dService {
  private _canvas: HTMLCanvasElement;
  private _context2d: CanvasRenderingContext2D;

  constructor(private gameState: GameStateService) {

  }

  initCanvas(canvas) {
    this._canvas = canvas as HTMLCanvasElement;
    this._context2d = this._canvas.getContext('2d');
  }

  initGraphics(width: number, height: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._canvas.width = width;
      this._canvas.height = height;

      this._canvas.style.width = width + 'px';
      this._canvas.style.height = height + 'px';

      //this._canvas.style.width = '100%';
      //this._canvas.style.height = '100%';

      observer.next();
      observer.complete();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._context2d.beginPath();
      this._context2d.moveTo(beginX, beginY);
      this._context2d.lineTo(endX, endY);
      this._context2d.stroke();

      observer.next();
      observer.complete();
    });
  }

  rect(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._context2d.rect(20, 20, 150, 100);

      if (filled) {
        this._context2d.fill();
      }
      else {
        this._context2d.stroke();
      }

      observer.next();
      observer.complete();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._context2d.beginPath();
      this._context2d.lineWidth = 1;
      this._context2d.strokeStyle = 'black';

      let yStart = y + height / 2;

      this._context2d.moveTo(x, yStart);
      this._context2d.bezierCurveTo(x, y, x + width, y, x + width, yStart);
      this._context2d.moveTo(x, yStart);
      this._context2d.bezierCurveTo(x, y + height, x + width, y + height, x + width, yStart);

      if (filled) {
        this._context2d.fill();
      }
      else {
        this._context2d.stroke();
      }

      observer.next();
      observer.complete();
    });
  }
}
