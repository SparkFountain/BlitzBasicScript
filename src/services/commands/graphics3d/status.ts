import {Injectable} from '@angular/core';
import {GameEntity} from '../../../interfaces/game/entity';
import {Observable, of, Subscriber} from 'rxjs';

@Injectable()
export class CommandsGraphics3dStatus {
    constructor() {

    }

    countChildren(entity: GameEntity): Observable<number> {
        return of(-1);
    }

    deltaPitch(sourceEntity: GameEntity, targetEntity: GameEntity): Observable<number> {
        return of(-1);
    }

    deltaYaw(sourceEntity: GameEntity, targetEntity: GameEntity): Observable<number> {
        return of(-1);
    }

    entityClass(entity: GameEntity): string {
        return entity.class;
    }

    entityDistance(entity1: GameEntity, entity2: GameEntity): Observable<number> {
        return of(-1);
    }

    entityInView(entity: GameEntity, camera: GameEntity): Observable<boolean> {
        return of(false);
    }

    entityName(entity: GameEntity): Observable<string> {
        return of(entity.name);
    }

    entityPitch(entity: GameEntity, global?: boolean): Observable<number> {
        return of(0);
    }

    entityRoll(entity: GameEntity, global?: boolean): Observable<number> {
        return of(0);
    }

    entityVisible(entity1: GameEntity, entity2: GameEntity): Observable<boolean> {
        return of(false);
    }

    entityX(entity: GameEntity, global?: boolean): Observable<number> {
        return of(null);
    }

    entityY(entity: GameEntity, global?: boolean): Observable<number> {
        return of(null);
    }

    entityYaw(entity: GameEntity, global?: boolean): Observable<number> {
        return of(null);
    }

    entityZ(entity: GameEntity, global?: boolean): Observable<number> {
        return of(null);
    }

    findChild(entity: GameEntity, childName: string): Observable<GameEntity | null> {
        return of(null);
    }

    getChild(entity: GameEntity, index: number): Observable<GameEntity | null> {
        return of(null);
    }

    getParent(entity: GameEntity): Observable<GameEntity> {
        return of(entity.parent);
    }

    nameEntity(entity: GameEntity, name: string): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            entity.name = name;

            observer.next();
            observer.complete();
        });
    }
}
