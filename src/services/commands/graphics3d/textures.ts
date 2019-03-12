import {Injectable} from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';
import {TextureMode} from '../../../enums/texture/texture-mode';
import {CubeMapFace} from '../../../enums/texture/cube-map-face';
import {CubeMapMode} from '../../../enums/texture/cube-map-mode';
import {TextureBlendMode} from '../../../enums/texture/texture-blend-mode';

@Injectable()
export class CommandsGraphics3dTextures {
    constructor() {

    }

    activeTextures(): Observable<number> {
        //TODO implement
        return of(0);
    }

    clearTextureFilters(): Observable<void> {
        //TODO implement
        return of(null);
    }

    createTexture(width: number, height: number, mode?: TextureMode, frames?: number): Observable<BABYLON.Texture> {
        //TODO implementation
        return of(null);
    }

    freeTexture(texture: BABYLON.Texture): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            texture = null;

            observer.next();
            observer.complete();
        });
    }

    loadAnimTexture(filePath: string, mode: TextureMode, width: number, height: number, startFrame: number, totalFrames: number): Observable<BABYLON.Texture> {
        //TODO implementation
        return of(null);
    }

    loadTexture(filePath: string, mode: TextureMode): Observable<BABYLON.Texture> {
        //TODO implementation
        return of(null);
    }

    positionTexture(texture: BABYLON.Texture, u: number, v: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    rotateTexture(texture: BABYLON.Texture, angle: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    scaleTexture(texture: BABYLON.Texture, u: number, v: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    setCubeFace(texture: BABYLON.Texture, face: CubeMapFace): Observable<void> {
        //TODO implementation
        return of(null);
    }

    setCubeMode(texture: BABYLON.Texture, mode: CubeMapMode): Observable<void> {
        //TODO implementation
        return of(null);
    }

    textureBlend(texture: BABYLON.Texture, mode: TextureBlendMode): Observable<void> {
        //TODO implementation
        return of(null);
    }

    textureCoords(texture: BABYLON.Texture, coordinate: boolean): Observable<void> {
        //TODO implementation
        return of(null);
    }

    textureFilter(searchText: string, mode: TextureMode): Observable<void> {
        //TODO implementation
        return of(null);
    }

    textureHeight(texture: BABYLON.Texture): Observable<number> {
        return of(texture.getBaseSize().height);
    }

    textureName(texture: BABYLON.Texture): Observable<string> {
        //TODO implementation
        return of('');
    }

    textureWidth(texture: BABYLON.Texture): Observable<number> {
        return of(texture.getBaseSize().width);
    }
}
