import {Injectable} from '@angular/core';
import {GameEntity} from '../../../interfaces/game/entity';
import {Observable, of} from 'rxjs';
import {PickGeometry} from '../../../enums/pick/geometry';

@Injectable()
export class CommandsGraphics3dPickingService {
    constructor() {

    }

    cameraPick(camera: GameEntity, x: number, y: number): Observable<GameEntity> {
        return of(null);
    }

    entityPick(entity: GameEntity, distance: number): Observable<GameEntity> {
        return of(null);
    }

    entityPickMode(entity: GameEntity, geometry: PickGeometry, coverOtherObjects?: boolean): Observable<void> {
        return of(null);
    }

    linePick(x: number, y: number, z: number, dx: number, dy: number, dz: number, radius?: number): Observable<GameEntity> {
        return of(null);
    }

    pickedEntity(): Observable<GameEntity> {
        return of(null);
    }

    pickedNX(): Observable<number> {
        return of(0);
    }

    pickedNY(): Observable<number> {
        return of(0);
    }

    pickedNZ(): Observable<number> {
        return of(0);
    }

    pickedSurface() {
    }

    pickedTime() {
    }

    pickedTriangle() {
    }

    pickedX(): Observable<number> {
        return of(0);
    }

    pickedY(): Observable<number> {
        return of(0);
    }

    pickedZ(): Observable<number> {
        return of(0);
    }
}
