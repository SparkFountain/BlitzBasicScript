import { Render2dService } from 'bbscript/src/services/render2d.service';
import { Injectable } from '@angular/core';
import { GameStateService } from '../../game-state.service';
import { HttpClient } from '@angular/common/http';
import { DebugEnvironment } from '../../../environment/debug.environment';
import { Render2dService } from '../../render2d.service';
import { BbScriptImage } from 'bbscript/src/classes/in-game/2d/image';
import { BbScriptBuffer } from 'bbscript/src/classes/in-game/2d/buffer';
import { BbScriptImageMode } from 'bbscript/src/enums/in-game/2d/image';

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

  async bufferDirty(buffer: BbScriptBuffer): Promise<void> {
    // TODO: implement logic if necessary
    buffer.setDirty(true);
  }

  async copyImage(image: BbScriptImage): Promise<BbScriptImage> {
    let originalElements: HTMLImageElement[] = image.getElements();
    let newElements: HTMLImageElement[] = [];
    for (let i = 0; i < originalElements.length; i++) {
      let originalImage: HTMLImageElement = originalElements[i];
      let htmlImage: HTMLImageElement = document.createElement(
        'img'
      ) as HTMLImageElement;
      htmlImage.width = originalImage.width;
      htmlImage.height = originalImage.height;
      htmlImage.src = originalImage.src;
      newElements.push(htmlImage);
    }

    return new BbScriptImage(
      image.getWidth(),
      image.getHeight(),
      `${image.getName()}-copy`,
      newElements,
      JSON.parse(JSON.stringify(image.getHandle()))
    );
  }

  async createImage(
    width: number,
    height: number,
    frames?: number,
    mode?: BbScriptImageMode
  ): Promise<BbScriptImage> {
    let handle: { x: number; y: number };
    if (this.autoMidHandleActive()) {
      handle = { x: width / 2, y: height / 2 };
    } else {
      handle = { x: 0, y: 0 };
    }

    let elements: HTMLImageElement[] = [];
    if (!frames) {
      frames = 1;
    }
    for (let i = 0; i < frames; i++) {
      let htmlImage: HTMLImageElement = document.createElement(
        'img'
      ) as HTMLImageElement;
      htmlImage.width = width;
      htmlImage.height = height;
      elements.push(htmlImage);
    }

    return new BbScriptImage(width, height, 'image', elements, handle);
  }

  async drawBlock(
    image: BbScriptImage,
    x: number,
    y: number,
    frame?: number
  ): Promise<void> {
    const width = image.getWidth();
    const height = image.getHeight();
    return this.graphics2d.drawImage(image, x, y, 0, 0, width, height, frame);
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
    return this.graphics2d.drawImage(
      image,
      x,
      y,
      beginX,
      beginY,
      width,
      height,
      frame
    );
  }

  async drawImage(
    image: BbScriptImage,
    x: number,
    y: number,
    frame?: number
  ): Promise<void> {
    const width = image.getWidth();
    const height = image.getHeight();
    return this.graphics2d.drawImage(image, x, y, 0, 0, width, height, frame);
  }

  async drawImageRect(
    image: any,
    x: number,
    y: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number,
    frame?: number
  ): Promise<void> {
    return this.graphics2d.drawImage(
      image,
      x,
      y,
      beginX,
      beginY,
      width,
      height,
      frame
    );
  }

  async freeImage(image: BbScriptImage): Promise<void> {
    image = null;
  }

  async grabImage(
    image: BbScriptImage,
    x: number,
    y: number,
    frame?: number
  ): Promise<void> {
    // TODO: implement
    return null;
  }

  async handleImage(image: BbScriptImage, x: number, y: number): Promise<void> {
    image.setHandle(x, y);
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
    return this.rectsOverlap(
      imageX,
      imageY,
      image.getWidth(),
      image.getHeight(),
      rectX,
      rectY,
      rectWidth,
      rectHeight
    );
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

  async loadImage(
    filePath: string,
    width: number,
    height: number,
    startFrameIndex: number,
    totalFrames: number,
    mode: BbScriptImageMode
  ): Promise<any> {
    // console.info('LOAD IMAGE', `${this.environment.getServer()}`, filePath);
    return new Promise<BbScriptImage>((resolve: Function, reject: Function) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http
        .get<Blob>(`${this.environment.getServer()}${filePath}`, {
          responseType: 'blob' as 'json'
        })
        .toPromise()
        .then((imageAsBlob: Blob) => {
          let reader = new FileReader();
          reader.addEventListener(
            'load',
            () => {
              let originalImage: HTMLImageElement = document.createElement(
                'img'
              ) as HTMLImageElement;
              originalImage.onload = () => {
                let autoMidHandleActive = this.autoMidHandleActive();

                if (width === -1 && height === -1) {
                  // single image
                  resolve(
                    new BbScriptImage(
                      originalImage.width,
                      originalImage.height,
                      'image',
                      [originalImage],
                      {
                        x: autoMidHandleActive ? originalImage.width / 2 : 0,
                        y: autoMidHandleActive ? originalImage.height / 2 : 0
                      }
                    )
                  );
                } else {
                  // animated image
                  let processedImages: number = 0;
                  const helperCanvas: HTMLCanvasElement = document.createElement(
                    'canvas'
                  );
                  helperCanvas.width = width;
                  helperCanvas.height = height;
                  const ctx: CanvasRenderingContext2D = helperCanvas.getContext(
                    '2d'
                  );

                  let images: HTMLImageElement[] = [];
                  let offset = { x: 0, y: 0 };
                  for (let i = 0; i < totalFrames; i++) {
                    if (i > 0) {
                      offset.x += width;
                      if (offset.x >= originalImage.width) {
                        offset.x = 0;
                        offset.y += height;
                      }
                    }

                    ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(
                      originalImage,
                      offset.x,
                      offset.y,
                      width,
                      height,
                      0,
                      0,
                      width,
                      height
                    );
                    const currentImage: HTMLImageElement = document.createElement(
                      'img'
                    );
                    currentImage.onload = () => {
                      images.push(currentImage);
                      processedImages++;
                      if (processedImages === totalFrames) {
                        resolve(
                          new BbScriptImage(width, height, 'image', images, {
                            x: autoMidHandleActive ? width / 2 : 0,
                            y: autoMidHandleActive ? height / 2 : 0
                          })
                        );
                      }
                    };
                    currentImage.src = helperCanvas.toDataURL();
                  }
                }
              };
              originalImage.src = reader.result as string;
            },
            false
          );

          if (imageAsBlob) {
            reader.readAsDataURL(imageAsBlob);
          }
        });
    });
  }

  async maskImage(
    image: BbScriptImage,
    red: number,
    green: number,
    blue: number
  ): Promise<void> {
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
    return Promise.resolve(
      x1 < x2 + width2 &&
        x1 + width1 > x2 &&
        y1 < y2 + height2 &&
        y1 + height1 > y2
    );
  }

  async resizeImage(
    image: BbScriptImage,
    width: number,
    height: number
  ): Promise<void> {
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

  async saveImage(
    image: BbScriptImage,
    filePath: string,
    frame?: number
  ): Promise<boolean> {
    let helperCanvas: HTMLCanvasElement = document.createElement('canvas');
    helperCanvas.width = image.getWidth();
    helperCanvas.height = image.getHeight();
    let helperCtx: CanvasRenderingContext2D = helperCanvas.getContext('2d');
    await this.graphics2d.drawImage(image, 0, 0, -1, -1, -1, -1, frame);

    // TODO: replace temporary download code by backend implementation
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'),
      e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filePath;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = helperCanvas.toDataURL('image/png;base64');

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
      e = document.createEvent('MouseEvents');
      e.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );

      lnk.dispatchEvent(e);
    } else if ((lnk as any).fireEvent) {
      (lnk as any).fireEvent('onclick');
    }

    return false;
  }

  async scaleImage(
    image: BbScriptImage,
    zoomX: number,
    zoomY: number
  ): Promise<void> {
    let newWidth = Math.trunc(image.getWidth() * zoomX);
    let newHeight = Math.trunc(image.getHeight() * zoomY);

    image.setWidth(newWidth);
    image.setHeight(newHeight);
  }

  async tileBlock(
    image: BbScriptImage,
    offsetX: number,
    offsetY: number,
    frame?: number
  ): Promise<void> {
    return this.graphics2d.tileBlock(image, offsetX, offsetY, frame);
  }

  async tileImage(): Promise<void> {}
}
