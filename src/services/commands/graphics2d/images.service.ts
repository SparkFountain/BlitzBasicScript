import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { HttpClient } from '@angular/common/http';
import { DebugEnvironment } from '../../../environment/debug.environment';
import { Render2dService } from '../../render2d.service';
import { BbScriptImage } from 'bbscript/src/classes/in-game/2d/image';

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

  async copyImage(image: BbScriptImage): Promise<BbScriptImage> {
    return this.createImage(image.getWidth(), image.getHeight());
  }

  async createImage(width: number, height: number, frames?: number): Promise<BbScriptImage> {
    let autoMidHandleActive = this.autoMidHandleActive();
    let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
    htmlImage.width = width;
    htmlImage.height = height;

    return new BbScriptImage(width, height, '', htmlImage);

    // return {
    //   name: '',
    //   element: htmlImage,
    //   width: width,
    //   height: height,
    //   handle: {
    //     x: autoMidHandleActive ? width / 2 : 0,
    //     y: autoMidHandleActive ? height / 2 : 0
    //   },
    //   rotation: 0
    // };
  }

  async drawBlock(image: any, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawBlock(image, x, y, -1, -1, frame);
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
  ): Promise<void> {
    return this.graphics2d.drawBlock(image, x, y, -1, -1, frame);
  }

  async drawImage(image: BbScriptImage, x: number, y: number, frame?: number): Promise<void> {
    return this.graphics2d.drawImage(image, x, y, frame);
  }

  async drawImageRect(): Promise<void> {
    return null;
  }

  async freeImage(image: BbScriptImage): Promise<void> {
    image = null;
  }

  async grabImage(): Promise<void> {
    return null;
  }

  async handleImage(image: BbScriptImage, x: number, y: number): Promise<void> {
    image.getHandle().x = x;
    image.getHandle().y = y;
  }

  async imageHeight(image: BbScriptImage): Promise<number> {
    return image.getHeight();
  }

  async imageRectCollide(
    image: BbScriptImage,
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

  async imageRectOverlap(
    image: BbScriptImage,
    imageX: number,
    imageY: number,
    rectX: number,
    rectY: number,
    rectWidth: number,
    rectHeight: number
  ): Promise<boolean> {
    return this.rectsOverlap(imageX, imageY, image.getWidth(), image.getHeight(), rectX, rectY, rectWidth, rectHeight);
  }

  async imagesCollide(
    image1: BbScriptImage,
    x1: number,
    y1: number,
    frame1: number,
    image2: BbScriptImage,
    x2: number,
    y2: number,
    frame2: number
  ): Promise<boolean> {
    return Promise.resolve(false);
  }

  async imagesOverlap(
    image1: BbScriptImage,
    x1: number,
    y1: number,
    image2: BbScriptImage,
    x2: number,
    y2: number
  ): Promise<boolean> {
    return this.rectsOverlap(
      x1,
      y1,
      image1.getWidth(),
      image1.getHeight(),
      x2,
      y2,
      image2.getWidth(),
      image2.getHeight()
    );
  }

  async imageWidth(image: BbScriptImage): Promise<number> {
    return Promise.resolve(image.getWidth());
  }

  async imageXHandle(image: BbScriptImage): Promise<number> {
    return Promise.resolve(image.getHandle().x);
  }

  async imageYHandle(image: BbScriptImage): Promise<number> {
    return Promise.resolve(image.getHandle().y);
  }

  async loadAnimImage(
    filePath: string,
    width: number,
    height: number,
    startFrameIndex: number,
    totalFrames: number
  ): Promise<any> {
    return null;
  }

  async loadImage(filePath: string): Promise<BbScriptImage> {
    console.info('LOAD IMAGE', `${this.environment.getServer()}`, filePath);
    return new Promise<BbScriptImage>((resolve: Function, reject: Function) => {
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

  async maskImage(image: BbScriptImage, red: number, green: number, blue: number): Promise<void> {
    return this.graphics2d.maskImage(image, red, green, blue);
  }

  async midHandle(image: BbScriptImage): Promise<void> {
    image.getHandle().x = image.getWidth() / 2;
    image.getHandle().y = image.getHeight() / 2;
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

  async resizeImage(image: BbScriptImage, width: number, height: number): Promise<void> {
    image.setWidth(width);
    image.setHeight(height);

    if (this.autoMidHandleActive()) {
      image.getHandle().x = width / 2;
      image.getHandle().y = height / 2;
    } else {
      image.getHandle().x = 0;
      image.getHandle().y = 0;
    }
  }

  async rotateImage(image: BbScriptImage, angle: number): Promise<void> {
    image.setRotation(angle);
  }

  async saveImage(image: BbScriptImage, filePath: string, frame?: number): Promise<void> {
    // TODO: implement backend method
  }

  async scaleImage(image: BbScriptImage, zoomX: number, zoomY: number): Promise<void> {
    let newWidth = Math.trunc(image.getWidth() * zoomX);
    let newHeight = Math.trunc(image.getHeight() * zoomY);

    image.setWidth(newWidth);
    image.setHeight(newHeight);
  }

  async tileBlock(image: BbScriptImage, offsetX: number, offsetY: number, frame?: number): Promise<void> {
    return this.graphics2d.tileBlock(image, offsetX, offsetY, frame);
  }

  async tileImage(): Promise<void> {}
}
