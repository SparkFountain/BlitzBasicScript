import { Injectable } from '@angular/core';
import { GameStateService } from './game-state.service';
import { GameFont } from '../interfaces/game/font';
import { BbScriptImage } from '../classes/in-game/2d/image';

@Injectable({
  providedIn: 'root'
})
export class Render2dService {
  private _canvas: HTMLCanvasElement;
  private _context2d: CanvasRenderingContext2D;

  constructor(private gameState: GameStateService) {
    console.info('[RENDER 2D SERVICE] Initialized');
  }

  initCanvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._canvas.width = 800;
    this._canvas.height = 600;
    this._context2d = this._canvas.getContext('2d');
    console.info('[CONTEXT 2D]', this._context2d);
  }

  initGraphics(width: number, height: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this._canvas.width = width;
      this._canvas.height = height;

      this._canvas.style.width = width + 'px';
      this._canvas.style.height = height + 'px';

      //this._canvas.style.width = '100%';
      //this._canvas.style.height = '100%';

      resolve();
    });
  }

  private loadActiveColor(): void {
    let red = this.gameState.getScreenProperties().color.red;
    let green = this.gameState.getScreenProperties().color.green;
    let blue = this.gameState.getScreenProperties().color.blue;

    console.info('Active color:', red, green, blue);
    console.info('[CONTEXT 2D]', this._context2d);

    this._context2d.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  private loadActiveClsColor(): void {
    let red = this.gameState.getScreenProperties().clsColor.red;
    let green = this.gameState.getScreenProperties().clsColor.green;
    let blue = this.gameState.getScreenProperties().clsColor.blue;

    this._context2d.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  }

  private getOrigin(): { x: number; y: number } {
    return {
      x: this.gameState.getScreenProperties().origin.x,
      y: this.gameState.getScreenProperties().origin.y
    };
  }

  private getActiveViewport(): { beginX: number; beginY: number; width: number; height: number } {
    return this.gameState.getScreenProperties().viewport;
  }

  async cls(): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.loadActiveClsColor();

      let screen = {
        width: this.gameState.getScreenProperties().width,
        height: this.gameState.getScreenProperties().height
      };
      this._context2d.fillRect(0, 0, screen.width, screen.height);
    });
  }

  async line(beginX: number, beginY: number, endX: number, endY: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.loadActiveColor();
      let origin = this.getOrigin();

      this._context2d.beginPath();
      this._context2d.moveTo(beginX + origin.x, beginY + origin.y);
      this._context2d.lineTo(endX + origin.x, endY + origin.y);
      this._context2d.stroke();

      resolve();
    });
  }

  async rect(x: number, y: number, width: number, height: number, filled: boolean): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
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

      resolve();
    });
  }

  async oval(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    //TODO refactor with respect to origin
    return new Promise<void>((resolve: Function, reject: Function) => {
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

      resolve();
    });
  }

  async plot(x: number, y: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.loadActiveColor();
      let origin = this.getOrigin();

      this._context2d.fillRect(x + origin.x, y + origin.y, 1, 1);

      resolve();
    });
  }

  async maskImage(image: BbScriptImage, red: number, green: number, blue: number): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      // TODO: fix
      //create masked element
      // image.maskedElement = document.createElement('img') as HTMLImageElement;
      // image.maskedElement.onload = () => {
      //   resolve();
      // };
      // let maskCanvas = document.createElement('canvas');
      // maskCanvas.width = image.width;
      // maskCanvas.height = image.height;
      // let ctx = maskCanvas.getContext('2d');
      // ctx.drawImage(image.element, 0, 0);
      // let canvasImage = ctx.getImageData(0, 0, image.width, image.height);
      // let length = canvasImage.data.length;
      // for (let i = 0; i < length; i += 4) {
      //   let red = canvasImage.data[i];
      //   let green = canvasImage.data[i + 1];
      //   let blue = canvasImage.data[i + 2];
      //   if (red === image.maskColor.red && green === image.maskColor.green && blue === image.maskColor.blue) {
      //     canvasImage.data[i + 3] = 0;
      //   }
      // }
      // ctx.putImageData(canvasImage, 0, 0);
      // image.maskedElement.src = maskCanvas.toDataURL();
    });
  }

  async tileBlock(image: BbScriptImage, x: number, y: number, frame?: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      // TODO: fix
      // let origin = this.getOrigin();
      // let activeViewport = this.getActiveViewport();

      // for (
      //   let currentX: number = x, currentY: number = y;
      //   currentX < activeViewport.width && currentY < activeViewport.height;
      //   currentX += image.width, currentY += image.height
      // ) {
      //   this._context2d.drawImage(image.element, x + origin.x, y + origin.y);
      // }

      resolve();
    });
  }

  async drawImage(image: BbScriptImage, x: number, y: number, frame?: number): Promise<void> {
    if (!frame) {
      frame = 0;
    }

    const origin = this.getOrigin();
    const element = image.getElement(frame);
    const width = image.getWidth();
    const height = image.getHeight();
    const handle = image.getHandle();
    const rotation = image.getRotation();

    let rotationRadians = rotation / (180 / Math.PI);
    let handleVector = {
      length: Math.sqrt(Math.pow(handle.x, 2) + Math.pow(handle.y, 2)),
      dx: 0,
      dy: 0
    };
    handleVector.dx = -Math.sin(handleVector.length);
    handleVector.dy = Math.cos(handleVector.length);

    let scaleX = width / element.width;
    let scaleY = height / element.height;
    let toX = -handle.x;
    let toY = -handle.y;
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
    if (width === -1 && height === -1) {
      this._context2d.drawImage(element, 0, 0);
    } else {
      this._context2d.drawImage(element, 0, 0, width, height);
    }
    this._context2d.setTransform(1, 0, 0, 1, 0, 0);
  }

  text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this._context2d.fillText(text, x, y);

      resolve();
    });
  }

  setFont(font: GameFont): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
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

      resolve();
    });
  }

  fontAscent(font: GameFont): Promise<number> {
    return Promise.resolve(0);
  }

  fontDescent(font: GameFont): Promise<number> {
    return Promise.resolve(0);
  }

  fontWidth(font: GameFont): Promise<number> {
    return Promise.resolve(this._context2d.measureText('M').width);
  }

  stringWidth(text: string): Promise<number> {
    console.info('_context2d:', this._context2d);
    return Promise.resolve(this._context2d.measureText(text).width);
  }

  stringHeight(): Promise<number> {
    return new Promise<number>((resolve: Function, reject: Function) => {
      resolve(Number(this._context2d.font.match(/([0-9]+)px/)[1]));
    });
  }
}
