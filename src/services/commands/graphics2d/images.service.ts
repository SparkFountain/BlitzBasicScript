import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { GameStateService } from '../../game-state.service';
import { HttpClient } from '@angular/common/http';
import { DebugEnvironment } from '../../../environment/debug.environment';
import { GameImage2D } from '../../../interfaces/game/image-2d';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dImagesService {
  constructor(private gameState: GameStateService,
    private graphics2d: Render2dService,
    private environment: DebugEnvironment,
    private http: HttpClient) {

  }

  private autoMidHandleActive(): boolean {
    return this.gameState.getImagesProperties().autoMidHandle;
  }

  autoMidHandle(active: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.setImagesAutoMidHandle(active);

      observer.next();
      observer.complete();
    });
  }

  copyImage(image: GameImage2D): Observable<GameImage2D> {
    return new Observable<GameImage2D>((observer: Subscriber<GameImage2D>) => {
      this.createImage(image.width, image.height).subscribe(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  createImage(width: number, height: number, frames?: number): Observable<GameImage2D> {
    return new Observable<GameImage2D>((observer: Subscriber<GameImage2D>) => {
      let autoMidHandleActive = this.autoMidHandleActive();
      let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
      htmlImage.width = width;
      htmlImage.height = height;


      observer.next({
        name: '',
        element: htmlImage,
        width: width,
        height: height,
        handle: {
          x: autoMidHandleActive ? width / 2 : 0,
          y: autoMidHandleActive ? height / 2 : 0
        },
        rotation: 0
      });
      observer.complete();
    });
  }

  drawBlock(image: any, x: number, y: number, frame?: number): Observable<void> {
    return this.graphics2d.drawBlock(image, x, y, frame);
  }

  drawBlockRect(image: any, x: number, y: number, beginX: number, beginY: number, width: number, height: number, frame?: number): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  drawImage(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    return this.graphics2d.drawImage(image, x, y, frame);
  }

  drawImageRect() {

  }

  freeImage(image: GameImage2D): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      image = null;

      observer.next();
      observer.complete();
    });
  }

  grabImage() {

  }

  handleImage(image: GameImage2D, x: number, y: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      image.handle.x = x;
      image.handle.y = y;

      observer.next();
      observer.complete();
    });
  }

  imageHeight(image: GameImage2D): Observable<number> {
    return of(image.height);
  }

  imageRectCollide(image: GameImage2D, x: number, y: number, frame: number, beginX: number, beginY: number, width: number, height: number) {

  }

  imageRectOverlap() {

  }

  imagesCollide(image1: GameImage2D, x1: number, y1: number, frame1: number, image2: GameImage2D, x2: number, y2: number, frame2: number): Observable<boolean> {
    return of(false);
  }

  imagesOverlap(image1: GameImage2D, x1: number, y1: number, image2: GameImage2D, x2: number, y2: number): Observable<boolean> {
    return this.rectsOverlap(x1, y1, image1.width, image1.height, x2, y2, image2.width, image2.height);
  }

  imageWidth(image: GameImage2D): Observable<number> {
    return of(image.width);
  }

  imageXHandle(image: GameImage2D): Observable<number> {
    return of(image.handle.x);
  }

  imageYHandle(image: GameImage2D): Observable<number> {
    return of(image.handle.y);
  }

  loadAnimImage(filePath: string, width, height, startFrameIndex: number, totalFrames: number) {

  }

  loadImage(filePath: string): Observable<GameImage2D> {
    console.info('LOAD IMAGE', `${this.environment.getServer()}`, filePath);
    return new Observable<GameImage2D>((observer: Subscriber<GameImage2D>) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http.get<Blob>(`${this.environment.getServer()}${filePath}`, { responseType: 'blob' as 'json' })
        .subscribe((imageAsBlob: Blob) => {
          let reader = new FileReader();
          reader.addEventListener('load', () => {
            let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
            htmlImage.onload = () => {
              let autoMidHandleActive = this.autoMidHandleActive();

              observer.next({
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
              observer.complete();
            };
            htmlImage.src = reader.result as string;
          }, false);

          if (imageAsBlob) {
            reader.readAsDataURL(imageAsBlob);
          }
        });
    });
  }

  maskImage(image: GameImage2D, red: number, green: number, blue: number): Observable<void> {
    return this.graphics2d.maskImage(image, red, green, blue);
  }

  midHandle(image: GameImage2D): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      image.handle.x = image.width / 2;
      image.handle.y = image.height / 2;

      observer.next();
      observer.complete();
    });
  }

  rectsOverlap(x1: number, y1: number, width1: number, height1: number, x2: number, y2: number, width2: number, height2: number): Observable<boolean> {
    return of(x1 < x2 + width2 &&
      x1 + width1 > x2 &&
      y1 < y2 + height2 &&
      y1 + height1 > y2);
  }

  resizeImage(image: GameImage2D, width: number, height: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      image.width = width;
      image.height = height;

      if (this.autoMidHandleActive()) {
        image.handle.x = width / 2;
        image.handle.y = height / 2;
      } else {
        image.handle.x = 0;
        image.handle.y = 0;
      }

      observer.next();
      observer.complete();
    });
  }

  rotateImage(image: GameImage2D, angle: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      image.rotation = angle;

      observer.next();
      observer.complete();
    });
  }

  saveImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  scaleImage(image: GameImage2D, zoomX: number, zoomY: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      let newWidth = Math.trunc(image.width * zoomX);
      let newHeight = Math.trunc(image.height * zoomY);

      image.width = newWidth;
      image.height = newHeight;

      observer.next();
      observer.complete();
    });
  }

  tileBlock(image: GameImage2D, offsetX: number, offsetY: number, frame?: number): Observable<void> {
    return this.graphics2d.tileBlock(image, offsetX, offsetY, frame);
  }

  tileImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }
}
