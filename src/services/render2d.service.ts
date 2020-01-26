import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { GameStateService } from './game-state.service';
import { GameImage2D } from '../interfaces/game/image-2d';
import { GameFont } from '../interfaces/game/font';

@Injectable()
export class Render2dService {
  private _canvas: HTMLCanvasElement;
  private _context2d: CanvasRenderingContext2D;

  constructor(private gameState: GameStateService) {

  }

  initCanvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._canvas.width = 800;
    this._canvas.height = 600;
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
    let red = this.gameState.getScreenProperties().color.red;
    let green = this.gameState.getScreenProperties().color.green;
    let blue = this.gameState.getScreenProperties().color.blue;

    console.info('Active color:', red, green, blue);

    this._context2d.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  private loadActiveClsColor(): void {
    let red = this.gameState.getScreenProperties().clsColor.red;
    let green = this.gameState.getScreenProperties().clsColor.green;
    let blue = this.gameState.getScreenProperties().clsColor.blue;

    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  private getOrigin(): { x: number, y: number } {
    return {
      x: this.gameState.getScreenProperties().origin.x,
      y: this.gameState.getScreenProperties().origin.y
    };
  }

  private getActiveViewport(): { beginX: number, beginY: number, width: number, height: number } {
    return this.gameState.getScreenProperties().viewport;
  }

  cls(): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveClsColor();

      let screen = {
        width: this.gameState.getScreenProperties().width,
        height: this.gameState.getScreenProperties().height
      };
      this._context2d.fillRect(0, 0, screen.width, screen.height);

      observer.next();
      observer.complete();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.loadActiveColor();
      let origin = this.getOrigin();

      this._context2d.beginPath();
      this._context2d.moveTo(beginX + origin.x, beginY + origin.y);
      this._context2d.lineTo(endX + origin.x, endY + origin.y);
      this._context2d.stroke();

      observer.next();
      observer.complete();
    });
  }

  rect(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      if (filled === undefined) {
        filled = true;
      }

      this.loadActiveColor();
      let origin = this.getOrigin();

      this._context2d.rect(x + origin.x, y + origin.y, width + origin.x, height + origin.y);

      if (filled) {
        this._context2d.fill();
      } else {
        this._context2d.stroke();
      }

      observer.next();
      observer.complete();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled?: boolean): Observable<void> {
    //TODO refactor with respect to origin
    return new Observable<void>((observer: Subscriber<void>) => {
      if (filled === undefined) {
        filled = true;
      }

      this.loadActiveColor();
      let origin = this.getOrigin();

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
      let origin = this.getOrigin();

      this._context2d.fillRect(x + origin.x, y + origin.y, 1, 1);

      observer.next();
      observer.complete();
    });
  }

  maskImage(image: GameImage2D, red: number, green: number, blue: number): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      image.maskColor = {
        red: red,
        green: green,
        blue: blue
      };

      //create masked element
      image.maskedElement = document.createElement('img') as HTMLImageElement;
      image.maskedElement.onload = () => {
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
    });
  }

  drawBlock(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      let origin = this.getOrigin();

      let rotationRadians = image.rotation / (180 / Math.PI);
      let handleVector = {
        length: Math.sqrt(Math.pow(image.handle.x, 2) + Math.pow(image.handle.y, 2)),
        dx: 0,
        dy: 0
      };
      handleVector.dx = -Math.sin(handleVector.length);
      handleVector.dy = Math.cos(handleVector.length);

      let scaleX = image.width / image.element.width;
      let scaleY = image.height / image.element.height;
      let toX = -image.handle.x;
      let toY = -image.handle.y;
      let sin = Math.sin(rotationRadians);
      let cos = Math.cos(rotationRadians);

      this._context2d.setTransform(
        cos * scaleX,
        sin * scaleX,
        -sin * scaleY,
        cos * scaleY,
        x + toX + origin.x,
        y + toY + origin.y
      );
      this._context2d.drawImage(image.element, 0, 0);
      this._context2d.setTransform(1, 0, 0, 1, 0, 0);

      observer.next();
      observer.complete();
    });
  }

  tileBlock(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      let origin = this.getOrigin();
      let activeViewport = this.getActiveViewport();

      for (let currentX: number = x, currentY: number = y; (currentX < activeViewport.width && currentY < activeViewport.height); currentX += image.width, currentY += image.height) {
        this._context2d.drawImage(image.element, x + origin.x, y + origin.y);
      }

      observer.next();
      observer.complete();
    });
  }

  drawImage(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    if (image.maskColor) {
      return new Observable<void>((observer: Subscriber<void>) => {
        if (!image.maskedElement) {
          console.error('Image has no mask color');
        } else {
          let origin = this.getOrigin();
          this._context2d.drawImage(image.maskedElement, x + origin.x, y + origin.y);

          observer.next();
          observer.complete();
        }
      });
    } else {
      return this.drawBlock(image, x, y);
    }
  }

  text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this._context2d.fillText(text, x, y);

      observer.next();
      observer.complete();
    });
  }

  setFont(font: GameFont): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      let fontString: string = '';
      if (font.italic) {
        fontString += 'italic ';
      }
      if (font.bold) {
        fontString += 'bold ';
      }
      fontString += font.size + 'px ';
      fontString += font.name + ', monospace';

      this._context2d.font = fontString;

      observer.next();
      observer.complete();
    });
  }

  fontAscent(font: GameFont): Observable<number> {
    return of(0);
  }

  fontDescent(font: GameFont): Observable<number> {
    return of(0);
  }

  fontWidth(): Observable<number> {
    return of(this._context2d.measureText('M').width);
  }

  stringWidth(text: string): Observable<number> {
    console.info('_context2d:', this._context2d);
    return of(this._context2d.measureText(text).width);
  }

  stringHeight(): Observable<number> {
    return new Observable<number>((observer: Subscriber<number>) => {
      observer.next(Number(this._context2d.font.match(/([0-9]+)px/)[1]));
      observer.complete();
    });
  }
}
