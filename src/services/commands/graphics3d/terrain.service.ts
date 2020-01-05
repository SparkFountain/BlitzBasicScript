import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class CommandsGraphics3dTerrain {
    constructor() {

    }

    createTerrain(segments: number, parent?: any): Observable<BABYLON.Mesh> {
        //TODO implementation
        return of(null);
    }

    loadTerrain(filePath: string, parent?: any): Observable<BABYLON.Mesh> {
        //TODO implementation, see https://www.babylonjs-playground.com/#E6OZX#7
        return of(null);
    }

    modifyTerrain(terrain: BABYLON.Mesh, x: number, z: number, height: number, realTimeUpdate?: boolean): Observable<void> {
        //TODO implementation
        return of(null);
    }

    terrainDetail(terrrain: BABYLON.Mesh, detailLevel: number, enableMorphing: boolean): Observable<void> {
        //TODO implementation
        return of(null);
    }

    terrainHeight(terrrain: BABYLON.Mesh, x: number, z: number): Observable<number> {
        //TODO implementation
        return of(0);
    }

    terrainShading(enableShading: boolean): Observable<void> {
        //TODO implementation
        return of(null);
    }

    terrainSize(terrain: BABYLON.Mesh): Observable<number> {
        //TODO implementation
        return of(0);
    }

    terrainX(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
        //TODO implementation
        return of(0);
    }

    terrainY(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
        //TODO implementation
        return of(0);
    }

    terrainZ(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
        //TODO implementation
        return of(0);
    }
}
