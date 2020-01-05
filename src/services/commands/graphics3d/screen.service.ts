import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class CommandsGraphics3dScreen {
    constructor() {

    }

    countGfxModes3d(): Observable<number> {
        return of(1);
    }

    gfxDriver3D(): Observable<boolean> {
        return of(BABYLON.Engine.isSupported());
    }

    gfxDriverCaps3D(): Observable<number> {
        return of(110);
    }

    gfxMode3D(mode: number): Observable<boolean> {
        return of(true);
    }

    gfxMode3DExists(width: number, height: number, depth: number): Observable<boolean> {
        return of(true);
    }

    windowed3D(): Observable<boolean> {
        return of(true);
    }
}
