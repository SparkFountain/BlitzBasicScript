import { BabylonJSService } from '../../babylon-js.service';
import { Observable, Subscriber, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { GameEntity } from '../../../interfaces/game/entity';
import { CameraType } from '../../../enums/camera/camera-type';
import { Camera } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dCameraService {
  constructor(private babylonjs: BabylonJSService) { }

  /** PRIVATE **/
  private normalize(value: number): number {
    return value / Math.trunc(255);
  }


  /** PUBLIC **/
  cameraClsColor(camera: any, red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setClearColor(this.normalize(red), this.normalize(green), this.normalize(blue));
  }

  cameraClsMode(camera: any, deleteColorBuffer?: boolean, deleteZBuffer?: boolean) {
    // TODO
  }

  fogColor(red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setFogColor(this.normalize(red), this.normalize(green), this.normalize(blue));
  }

  fogMode(mode): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });

    // TODO

    /*switch (mode) {
      case BBScript.FOG.NONE:
        BBScript.game.scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
        break;
      case BBScript.FOG.LINEAR:
        BBScript.game.scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        break;
      case BBScript.FOG.EXPONENTIAL:
        BBScript.game.scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        break;
      case BBScript.FOG.EXPONENTIAL_ENHANCED:
        BBScript.game.scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
        break;
    }*/
  }

  fogRange(near: number, far: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });

    /*if (BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_LINEAR) {
      BBScript.game.scene.fogStart = near;
      BBScript.game.scene.fogEnd = far;
    } else {
      console.warn('[FogRange]: Invalid fog mode (must be linear)');
    }*/
  }

  fogDensity(value: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });

    /*if (BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_EXP || BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_EXP2) {
      BBScript.game.scene.fogDensity = value;
    } else {
      console.warn('[FogDensity]: Invalid fog mode (must be exponential)');
    }*/
  }

  cameraProject(camera: any, x: number, y: number, z: number): void {

  }

  cameraProjMode(camera: any, mode: number): void {
    /*switch (mode) {
      case BBScript.CAMERA_PROJECTION.NONE:
        camera.setEnabled(false);
        break;
      case BBScript.CAMERA_PROJECTION.PERSPECTIVE:
        camera.mode = BABYLON.Camera.PERSPECTIVE_CAMERA;
        break;
      case BBScript.CAMERA_PROJECTION.ORTHOGRAPHIC:
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        break;
    }*/
  }

  cameraRange(camera: any, near: number, far: number): void {
    camera.minZ = near;
    camera.maxZ = far;
  }

  cameraViewport(camera: any, x: number, y: number, width: number, height: number): void {

  }

  cameraZoom(camera: any, value: number): void {
    // TODO fix (code below does not seem to work)
    // camera.zoomOnFactor = value;
  }

  createCamera(type: CameraType, parent?: GameEntity): Observable<GameEntity> {
    return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
      this.babylonjs.createCamera(type).subscribe((camera: Camera) => {
        const cameraEntity: GameEntity = {
          name: 'TODO',
          class: 'Camera',
          parent: parent ? parent : null,
          camera: camera
        };

        observer.next(cameraEntity);
        observer.complete();
      });
    });
  }

  projectedX(): Observable<number> {
    return of(0);
  }

  projectedY(): Observable<number> {
    return of(0);
  }

  projectedZ(): Observable<boolean> {
    return of(false);
  }
}
