import {Injectable} from '@angular/core';

import * as BABYLON from 'babylonjs';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BabylonJSService {
  public width: number;
  public height: number;

  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _camera: BABYLON.FreeCamera;
  private _light: BABYLON.Light;

  constructor() {
  }

  initEngine(canvas) {
    // Create canvas and engine.
    this._canvas = canvas as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);
  }

  createScene(): void {
    // Create a basic BJS Scene object.
    this._scene = new BABYLON.Scene(this._engine);

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);

    // Target the camera to scene origin.
    this._camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    this._camera.attachControl(this._canvas, false);

    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);

    // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
    let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1',
      {segments: 16, diameter: 2}, this._scene);

    // Move the sphere upward 1/2 of its height.
    sphere.position.y = 1;

    // Create a built-in "ground" shape.
    let ground = BABYLON.MeshBuilder.CreateGround('ground1',
      {width: 6, height: 6, subdivisions: 2}, this._scene);
  }

  doRender(): void {
    // Run the render loop.
    //TODO here comes the MainLoop code
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  initGraphics(width: number, height: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.width = width;
      this.height = height;

      console.info('this._canvas:', this._canvas);

      this._canvas.style.width = width + 'px';
      this._canvas.style.height = height + 'px';

      this._engine = new BABYLON.Engine(this._canvas, true);

      this._canvas.style.width = '100%';
      this._canvas.style.height = '100%';

      observer.next();
      observer.complete();
    });
  }

  setClearColor(red: number, green: number, blue: number): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      this._scene.clearColor = new BABYLON.Color4(red, green, blue, 1);

      observer.next();
      observer.complete();
    });
  }

  setFogColor(red: number, green: number, blue: number): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      this._scene.fogColor = new BABYLON.Color3(red, green, blue);

      observer.next();
      observer.complete();
    });
  }
}
