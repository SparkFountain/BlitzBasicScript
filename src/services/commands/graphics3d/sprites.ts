import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TextureMode} from '../../../enums/texture/texture-mode';
import {SpriteViewMode} from '../../../enums/sprite/sprite-view-mode';
import {GameEntity} from '../../../interfaces/game/entity';

@Injectable()
export class CommandsGraphics3dSprites {
    constructor() {

    }

    createSprite(parent?: GameEntity): Observable<GameEntity> {
        //TODO implementation
        return of(null);
    }

    handleSprite(sprite: GameEntity, x: number, y: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    loadSprite(filePath: string, mode: TextureMode, parent?: any): Observable<GameEntity> {
        //TODO implementation
        return of(null);
    }

    rotateSprite(sprite: GameEntity, angle: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    scaleSprite(sprite: GameEntity, x: number, y: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    spriteViewMode(sprite: GameEntity, mode: SpriteViewMode): Observable<void> {
        //TODO implementation
        return of(null);
    }
}
