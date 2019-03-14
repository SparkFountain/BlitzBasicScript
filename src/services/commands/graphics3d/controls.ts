import {Injectable} from '@angular/core';
import {GameEntity} from '../../../interfaces/game/entity';
import {Observable, of, Subscriber} from 'rxjs';
import {BlendMode} from '../../../enums/entity/blend-mode';
import {EntityClass} from '../../../enums/entity/entity-class';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';

@Injectable()
export class CommandsGraphics3dControls {
    constructor(private babylonjs: BabylonJSService) {

    }

    copyEntity(entity: GameEntity, parent?: GameEntity): Observable<GameEntity> {
        return of(null);
    }

    entityAlpha(entity: GameEntity, alpha: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            entity.mesh.material.alpha = alpha;

            observer.next();
            observer.complete();
        });
    }

    entityAutoFade(entity: GameEntity, near: number, far: number): Observable<void> {
        return of(null);
    }

    entityBlend(entity: GameEntity, mode: BlendMode): Observable<void> {
        return of(null);
    }

    entityColor(entity: GameEntity, red: number, green: number, blue: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            if(entity.class === 'Mesh') {
                this.babylonjs.colorMesh(entity.mesh, red, green, blue);
            } else {
                console.error(`Cannot assign "EntityColor()" to entity of type ${entity.class}`);
            }

            observer.next();
            observer.complete();
        });
    }

    entityFx() {
    }

    entityOrder() {
    }

    entityParent() {
    }

    entityShininess() {
    }

    entityTexture() {
    }

    freeEntity() {
    }

    hideEntity() {
    }

    showEntity() {
    }
}
