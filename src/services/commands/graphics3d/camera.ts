import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {Observable} from 'rxjs';

export class CommandsGraphics3dCamera {
  constructor(private babylonjs: BabylonJSService) {

  }

  normalize(value: number): number {
    return value / Math.trunc(255);
  }

  cameraClsColor(camera: any, red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setClearColor(this.normalize(red), this.normalize(green), this.normalize(blue));
  }

  cameraClsMode() {
    //TODO
  };

  fogColor(red: number, green: number, blue: number): Observable<void> {
    return this.babylonjs.setFogColor(this.normalize(red), this.normalize(green), this.normalize(blue));
  }

  fogMode(mode) {
    //TODO

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

  fogRange(near, far) {
    if (BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_LINEAR) {
      BBScript.game.scene.fogStart = near;
      BBScript.game.scene.fogEnd = far;
    } else {
      console.warn('[FogRange]: Invalid fog mode (must be linear)');
    }
  }

  fogDensity(value) {
    if (BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_EXP || BBScript.game.scene.fogMode === BABYLON.Scene.FOGMODE_EXP2) {
      BBScript.game.scene.fogDensity = value;
    } else {
      console.warn('[FogDensity]: Invalid fog mode (must be exponential)');
    }
  }

  cameraProject(camera, x, y, z) {

  }

  cameraProjMode(camera, mode) {
    switch (mode) {
      case BBScript.CAMERA_PROJECTION.NONE:
        camera.setEnabled(false);
        break;
      case BBScript.CAMERA_PROJECTION.PERSPECTIVE:
        camera.mode = BABYLON.Camera.PERSPECTIVE_CAMERA;
        break;
      case BBScript.CAMERA_PROJECTION.ORTHOGRAPHIC:
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        break;
    }
  }

  cameraRange(camera, near: number, far: number) {
    camera.minZ = near;
    camera.maxZ = far;
  }

  cameraViewport(camera, x: number, y: number, width: number, height: number) {

  }

  cameraZoom(camera, value) {
    //TODO fix (code below does not seem to work)
    //camera.zoomOnFactor = value;
  }

  createCamera(type, parent) {
    //TODO implement
    /*let camera;

    switch (type) {
      //TODO anaglyph needs another type in combination
      case BBScript.CAMERA.ANAGLYPH:
        break;
      case BBScript.CAMERA.ARC_ROTATE:
        //TODO add many more parameters
        //return new BABYLON.ArcRotateCamera(id('cam'), );
        break;
      case BBScript.CAMERA.FOLLOW:
        break;
      case BBScript.CAMERA.FREE:
        camera = new BABYLON.FreeCamera(id('cam'), new BABYLON.Vector3(0, 0, 0), BBScript.game.scene, true);
        break;
      case BBScript.CAMERA.UNIVERSAL:
        break;
      case BBScript.CAMERA.WEB_VR:
        break;
      default:
        console.error('Error at CreateCamera: invalid camera type!');
        break;
    }

    if (parent) {
      camera.parent = parent;
    }
    return camera;*/
  }

  projectedX() {

  }

  projectedY() {

  }

  projectedZ() {

  }
}
