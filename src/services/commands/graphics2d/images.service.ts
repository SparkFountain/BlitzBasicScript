import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { HttpClient } from '@angular/common/http';
import { DebugEnvironment } from '../../../environment/debug.environment';
import { GameImage2D } from '../../../interfaces/game/image-2d';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dImagesService {
  constructor(
    private gameState: GameStateService,
    private graphics2d: Render2dService,
    private environment: DebugEnvironment,
    private http: HttpClient
  ) {}

  private autoMidHandleActive(): boolean {
    return this.gameState.getImagesProperties().autoMidHandle;
  }

  autoMidHandle(active: boolean): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setImagesAutoMidHandle(active);

      resolve();
    });
  }

  copyImage(image: GameImage2D): Promise<GameImage2D> {
    return new Promise<GameImage2D>((resolve: Function, reject: Function) => {
      this.createImage(image.width, image.height).then(() => {
        resolve();
      });
    });
  }

  createImage(width: number, height: number, frames?: number): Promise<GameImage2D> {
    return new Promise<GameImage2D>((resolve: Function, reject: Function) => {
      let autoMidHandleActive = this.autoMidHandleActive();
      let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
      htmlImage.width = width;
      htmlImage.height = height;

      resolve({
        name: '',
        element: htmlImage,
        width: width,
        height: height,
        handle: {
          x: autoMidHandleActive ? width / 2 : 0,
          y: autoMidHandleActive ? height / 2 : 0,
        },
        rotation: 0
      });
    });
  }

  drawBlock(image: any, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawBlock(image, x, y, frame);
  }

  drawBlockRect(
    image: any,
    x: number,
    y: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number,
    frame?: number
  ): Promise<void> {
    return new Promise<any>((resolve: Function, reject: Function) => {
      resolve('TODO');
    });
  }

  drawImage(image: GameImage2D, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawImage(image, x, y, frame);
  }

  drawImageRect() {}

  freeImage(image: GameImage2D): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      image = null;

      resolve();
    });
  }

  grabImage() {}

  handleImage(image: GameImage2D, x: number, y: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      image.handle.x = x;
      image.handle.y = y;

      resolve();
    });
  }

  imageHeight(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.height);
  }

  imageRectCollide(
    image: GameImage2D,
    x: number,
    y: number,
    frame: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number
  ) {}

  imageRectOverlap() {}

  imagesCollide(
    image1: GameImage2D,
    x1: number,
    y1: number,
    frame1: number,
    image2: GameImage2D,
    x2: number,
    y2: number,
    frame2: number
  ): Promise<boolean> {
    return Promise.resolve(false);
  }

  imagesOverlap(
    image1: GameImage2D,
    x1: number,
    y1: number,
    image2: GameImage2D,
    x2: number,
    y2: number
  ): Promise<boolean> {
    return this.rectsOverlap(x1, y1, image1.width, image1.height, x2, y2, image2.width, image2.height);
  }

  imageWidth(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.width);
  }

  imageXHandle(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.handle.x);
  }

  imageYHandle(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.handle.y);
  }

  loadAnimImage(filePath: string, width, height, startFrameIndex: number, totalFrames: number) {}

  loadImage(filePath: string): Promise<GameImage2D> {
    console.info('LOAD IMAGE', `${this.environment.getServer()}`, filePath);
    return new Promise<GameImage2D>((resolve: Function, reject: Function) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http
        .get<Blob>(`${this.environment.getServer()}${filePath}`, { responseType: 'blob' as 'json' })
        .subscribe((imageAsBlob: Blob) => {
          let reader = new FileReader();
          reader.addEventListener(
            'load',
            () => {
              let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
              htmlImage.onload = () => {
                let autoMidHandleActive = this.autoMidHandleActive();

                resolve({
                  name: '',
                  element: htmlImage,
                  width: htmlImage.width,
                  height: htmlImage.height,
                  handle: {
                    x: autoMidHandleActive ? htmlImage.width / 2 : 0,
                    y: autoMidHandleActive ? htmlImage.height / 2 : 0,
                  },
                  rotation: 0,
                });
              };
              htmlImage.src = reader.result as string;
            },
            false
          );

          if (imageAsBlob) {
            reader.readAsDataURL(imageAsBlob);
          }
        });
    });
  }

  maskImage(image: GameImage2D, red: number, green: number, blue: number): Promise<void> {
    return this.graphics2d.maskImage(image, red, green, blue);
  }

  midHandle(image: GameImage2D): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      image.handle.x = image.width / 2;
      image.handle.y = image.height / 2;

      resolve();
    });
  }

  rectsOverlap(
    x1: number,
    y1: number,
    width1: number,
    height1: number,
    x2: number,
    y2: number,
    width2: number,
    height2: number
  ): Promise<boolean> {
    return Promise.resolve(x1 < x2 + width2 && x1 + width1 > x2 && y1 < y2 + height2 && y1 + height1 > y2);
  }

  resizeImage(image: GameImage2D, width: number, height: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      image.width = width;
      image.height = height;

      if (this.autoMidHandleActive()) {
        image.handle.x = width / 2;
        image.handle.y = height / 2;
      } else {
        image.handle.x = 0;
        image.handle.y = 0;
      }

      resolve();
    });
  }

  rotateImage(image: GameImage2D, angle: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      image.rotation = angle;

      resolve();
    });
  }

  saveImage(): Promise<void> {
    return new Promise<any>((resolve: Function, reject: Function) => {
      resolve('TODO');
    });
  }

  scaleImage(image: GameImage2D, zoomX: number, zoomY: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      let newWidth = Math.trunc(image.width * zoomX);
      let newHeight = Math.trunc(image.height * zoomY);

      image.width = newWidth;
      image.height = newHeight;

      resolve();
    });
  }

  tileBlock(image: GameImage2D, offsetX: number, offsetY: number, frame?: number): Promise<void> {
    return this.graphics2d.tileBlock(image, offsetX, offsetY, frame);
  }

  tileImage(): Promise<void> {
    return new Promise<any>((resolve: Function, reject: Function) => {
      resolve('TODO');
    });
  }
}
