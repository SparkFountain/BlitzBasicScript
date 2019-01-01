import {Injectable} from '@angular/core';
import {observable, Observable, Subscriber} from 'rxjs';
import {GameStateService} from '../game-state/game-state.service';
import {GameImage2D} from '../../interfaces/game/image-2d';

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

  private loadActiveColor(): void {
    let red = this.gameState.get('screen.color.red');
    let green = this.gameState.get('screen.color.green');
    let blue = this.gameState.get('screen.color.blue');

    this._context2d.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  private loadActiveClsColor(): void {
    let red = this.gameState.get('screen.clsColor.red');
    let green = this.gameState.get('screen.clsColor.green');
    let blue = this.gameState.get('screen.clsColor.blue');

    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  cls(): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveClsColor();

      let screen = {
        width: this.gameState.get('screen.width'),
        height: this.gameState.get('screen.height')
      };
      this._context2d.fillRect(0, 0, screen.width, screen.height);

      observer.next();
      observer.complete();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveColor();

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
      this.loadActiveColor();

      this._context2d.rect(20, 20, 150, 100);

      if (filled) {
        this._context2d.fill();
      } else {
        this._context2d.stroke();
      }

      observer.next();
      observer.complete();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveColor();

      this._context2d.beginPath();
      this._context2d.lineWidth = 1;

      let yStart = y + height / 2;

      this._context2d.moveTo(x, yStart);
      this._context2d.bezierCurveTo(x, y, x + width, y, x + width, yStart);
      this._context2d.moveTo(x, yStart);
      this._context2d.bezierCurveTo(x, y + height, x + width, y + height, x + width, yStart);

      if (filled) {
        this._context2d.fill();
      } else {
        this._context2d.stroke();
      }

      observer.next();
      observer.complete();
    });
  }

  plot(x: number, y: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveColor();

      this._context2d.fillRect(x, y, 1, 1);

      observer.next();
      observer.complete();
    });
  }

  drawBlock(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._context2d.drawImage(image.element, x, y);

      observer.next();
      observer.complete();
    });
  }

  drawImage(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    if (image.maskColor) {
      return new Observable<void>((observer: Subscriber<void>) => {
        if (!image.maskedElement) {
          //create masked element
          image.maskedElement = document.createElement('img') as HTMLImageElement;
          image.maskedElement.onload = () => {
            this._context2d.drawImage(image.maskedElement, x, y);

            observer.next();
            observer.complete();
          };

          let maskCanvas = document.createElement('canvas');
          maskCanvas.width = image.width;
          maskCanvas.height = image.height;
          let ctx = maskCanvas.getContext('2d');
          ctx.drawImage(image.element, 0, 0);

          let canvasImage = ctx.getImageData(0, 0, image.width, image.height);
          let length = canvasImage.data.length;
          for (let i = 0; i < length; i += 4) {
            let red = canvasImage.data[i];
            let green = canvasImage.data[i + 1];
            let blue = canvasImage.data[i + 2];

            if (red === image.maskColor.red && green === image.maskColor.green && blue === image.maskColor.blue) {
              canvasImage.data[i + 3] = 0;
            }
          }
          ctx.putImageData(canvasImage, 0, 0);

          image.maskedElement.src = maskCanvas.toDataURL();
        } else {
          this._context2d.drawImage(image.maskedElement, x, y);

          observer.next();
          observer.complete();
        }
      });
    } else {
      return this.drawBlock(image, x, y);
    }
  }
}
