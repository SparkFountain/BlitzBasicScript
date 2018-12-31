import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {DebugEnvironment} from '../../environment/debug.environment';

@Injectable()
export class CommandsGraphics2dImages {
  constructor(private gameState: GameStateService,
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

  drawImage() {

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

  loadImage(filePath: string, mode: number): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      this.http.get(this.environment.getServer() + filePath).subscribe((response: HttpResponse<any>) => {
        observer.next('TODO');
        observer.complete();
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
