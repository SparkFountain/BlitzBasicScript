import {Injectable} from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {DebugEnvironment} from '../../environment/debug.environment';
import {Graphics2dService} from '../../2d/graphics2d.service';
import {GameImage2D} from '../../../interfaces/game/image-2d';

@Injectable()
export class CommandsGraphics2dImages {
  constructor(private gameState: GameStateService,
              private graphics2d: Graphics2dService,
              private environment: DebugEnvironment,
              private http: HttpClient) {

  }

  autoMidHandle(on: boolean): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.set('images.autoMidHandle', true);

      observer.next();
      observer.complete();
    });
  }

  copyImage(): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  createImage(width: number, height: number, frames: number): Observable<GameImage2D> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  drawBlock(image: any, x: number, y: number, frame?: number): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
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

  freeImage() {

  }

  grabImage() {

  }

  handleImage() {

  }

  imageHeight(image: GameImage2D): Observable<number> {
    return of(image.height);
  }

  imageRectCollide() {

  }

  imageRectOverlap() {

  }

  imagesCollide() {

  }

  imagesOverlap() {

  }

  imageWidth(image: GameImage2D): Observable<number> {
    return of(image.width);
  }

  imageXHandle() {

  }

  imageYHandle() {

  }

  loadAnimImage() {

  }

  loadImage(filePath: string): Observable<GameImage2D> {
    return new Observable<GameImage2D>((observer: Subscriber<GameImage2D>) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http.get<Blob>(this.environment.getServer() + filePath, {responseType: 'blob' as 'json'})
        .subscribe((imageAsBlob: Blob) => {
          let reader = new FileReader();
          reader.addEventListener('load', () => {
            let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
            htmlImage.onload = () => {
              observer.next({
                name: 'TODO',
                element: htmlImage,
                width: htmlImage.width,
                height: htmlImage.height
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

  midHandle() {

  }

  rectsOverlap(x1: number, y1: number, width1: number, height1: number, x2: number, y2: number, width2: number, height2: number): Observable<boolean> {
    return of(x1 < x2 + width2 &&
      x1 + width1 > x2 &&
      y1 < y2 + height2 &&
      y1 + height1 > y2);
  }

  resizeImage(image: GameImage2D, width: number, height: number): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  rotateImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  saveImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  scaleImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  tileBlock(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }

  tileImage(): Observable<void> {
    return new Observable<any>((observer: Subscriber<any>) => {
      observer.next('TODO');
      observer.complete();
    });
  }
}
