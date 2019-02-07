import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TextureMode} from '../../../enums/texture/texture-mode';
import {SpriteViewMode} from '../../../enums/sprite/sprite-view-mode';

@Injectable()
export class CommandsGraphics3dSprites {
  constructor() {

  }

  createSprite(parent?: any): Observable<BABYLON.Sprite> {
    //TODO implementation
    return of(null);
  }

  handleSprite(sprite: BABYLON.Sprite, x: number, y: number): Observable<void> {
    //TODO implementation
    return of(null);
  }

  loadSprite(filePath: string, mode: TextureMode, parent?: any): Observable<BABYLON.Sprite> {
    //TODO implementation
    return of(null);
  }

  rotateSprite(sprite: BABYLON.Sprite, angle: number): Observable<void> {
    //TODO implementation
    return of(null);
  }

  scaleSprite(sprite: BABYLON.Sprite, x: number, y: number): Observable<void> {
    //TODO implementation
    return of(null);
  }

  spriteViewMode(sprite: BABYLON.Sprite, mode: SpriteViewMode): Observable<void> {
    //TODO implementation
    return of(null);
  }
}
