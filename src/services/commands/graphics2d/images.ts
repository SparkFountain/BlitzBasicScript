import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {DebugEnvironment} from '../../environment/debug.environment';
import {Graphics2dService} from '../../2d/graphics2d.service';

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

  createImage() {

  }

  drawBlock() {

  }

  drawBlockRect() {

  }

  drawImage(image: HTMLImageElement, x: number, y: number, frame?: number): Observable<void> {
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

  imageHeight() {

  }

  imageRectCollide() {

  }

  imageRectOverlap() {

  }

  imagesCollide() {

  }

  imagesOverlap() {

  }

  imageWidth() {

  }

  imageXHandle() {

  }

  imageYHandle() {

  }

  loadAnimImage() {

  }

  loadImage(filePath: string): Observable<HTMLImageElement> {
    return new Observable<HTMLImageElement>((observer: Subscriber<HTMLImageElement>) => {
      //info: the responseType conversion to JSON is a workaround, see https://github.com/angular/angular/issues/18586
      this.http.get<Blob>(this.environment.getServer() + filePath, {responseType: 'blob' as 'json'})
        .subscribe((imageAsBlob: Blob) => {
          let reader = new FileReader();
          reader.addEventListener('load', () => {
            let htmlImage: HTMLImageElement = document.createElement('img') as HTMLImageElement;
            htmlImage.onload = () => {
              observer.next(htmlImage);
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

  maskImage() {

  }

  midHandle() {

  }

  rectsOverlap() {

  }

  resizeImage() {

  }

  rotateImage() {

  }

  saveImage() {

  }

  scaleImage() {

  }

  tileBlock() {

  }

  tileImage() {

  }
}
