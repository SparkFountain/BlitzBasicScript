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

  async autoMidHandle(active: boolean): Promise<void> {
    this.gameState.setImagesAutoMidHandle(active);
  }

  async copyImage(image: GameImage2D): Promise<GameImage2D> {
    return this.createImage(image.width, image.height);
  }

  async createImage(width: number, height: number, frames?: number): Promise<GameImage2D> {
    let autoMidHandleActive = this.autoMidHandleActive();
    let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
    htmlImage.width = width;
    htmlImage.height = height;

    return {
      name: '',
      element: htmlImage,
      width: width,
      height: height,
      handle: {
        x: autoMidHandleActive ? width / 2 : 0,
        y: autoMidHandleActive ? height / 2 : 0
      },
      rotation: 0
    };
  }

  async drawBlock(image: any, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawBlock(image, x, y, frame);
  }

  async drawBlockRect(
    image: any,
    x: number,
    y: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number,
    frame?: number
  ): Promise<void> {}

  async drawImage(image: GameImage2D, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawImage(image, x, y, frame);
  }

  async drawImageRect(): Promise<void> {
    return null;
  }

  async freeImage(image: GameImage2D): Promise<void> {
    image = null;
  }

  async grabImage(): Promise<any> {
    return null;
  }

  async handleImage(image: GameImage2D, x: number, y: number): Promise<void> {
    image.handle.x = x;
    image.handle.y = y;
  }

  async imageHeight(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.height);
  }

  async imageRectCollide(
    image: GameImage2D,
    x: number,
    y: number,
    frame: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number
  ): Promise<boolean> {
    return null;
  }

  async imageRectOverlap(): Promise<boolean> {
    return null;
  }

  async imagesCollide(
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

  async imagesOverlap(
    image1: GameImage2D,
    x1: number,
    y1: number,
    image2: GameImage2D,
    x2: number,
    y2: number
  ): Promise<boolean> {
    return this.rectsOverlap(x1, y1, image1.width, image1.height, x2, y2, image2.width, image2.height);
  }

  async imageWidth(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.width);
  }

  async imageXHandle(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.handle.x);
  }

  async imageYHandle(image: GameImage2D): Promise<number> {
    return Promise.resolve(image.handle.y);
  }

  async loadAnimImage(filePath: string, width, height, startFrameIndex: number, totalFrames: number): Promise<any> {
    return null;
  }

  async loadImage(filePath: string): Promise<GameImage2D> {
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
                    y: autoMidHandleActive ? htmlImage.height / 2 : 0
                  },
                  rotation: 0
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

  async maskImage(image: GameImage2D, red: number, green: number, blue: number): Promise<void> {
    return this.graphics2d.maskImage(image, red, green, blue);
  }

  async midHandle(image: GameImage2D): Promise<void> {
    image.handle.x = image.width / 2;
    image.handle.y = image.height / 2;
  }

  async rectsOverlap(
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

  async resizeImage(image: GameImage2D, width: number, height: number): Promise<void> {
    image.width = width;
    image.height = height;

    if (this.autoMidHandleActive()) {
      image.handle.x = width / 2;
      image.handle.y = height / 2;
    } else {
      image.handle.x = 0;
      image.handle.y = 0;
    }
  }

  async rotateImage(image: GameImage2D, angle: number): Promise<void> {
    image.rotation = angle;
  }

  async saveImage(): Promise<void> {}

  async scaleImage(image: GameImage2D, zoomX: number, zoomY: number): Promise<void> {
    let newWidth = Math.trunc(image.width * zoomX);
    let newHeight = Math.trunc(image.height * zoomY);

    image.width = newWidth;
    image.height = newHeight;
  }

  async tileBlock(image: GameImage2D, offsetX: number, offsetY: number, frame?: number): Promise<void> {
    return this.graphics2d.tileBlock(image, offsetX, offsetY, frame);
  }

  async tileImage(): Promise<void> {}
}
