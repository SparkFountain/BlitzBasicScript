import {Observable, Subscriber} from 'rxjs';
import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import Mesh = BABYLON.Mesh;

@Injectable()
export class CommandsGraphics3dMeshes {
  constructor(private babylonjs: BabylonJSService) {

  }

  addMesh(source: any, target: any): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      observer.next();
      observer.complete();
    });
  }

  copyMesh(mesh: any, parent?: any): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      observer.next();
      observer.complete();
    });
  }

  createCone(segments?: number, hasFloor?: boolean, parent?: any): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      this.babylonjs.createCone().subscribe((cone: Mesh) => {
        if (parent) {
          cone.parent = parent;
        }

        observer.next(cone);
        observer.complete();
      });
    });
  }

  createSphere(segments?: number, parent?: any): any {

  }

  createCube(parent?: any): any {

  }

  createCylinder(segments?: number, hasFloor?: boolean, parent?: any): any {

  }

  createPyramid(baseVertexNumber?: number, parent?: any): any {

  }

  createTorus(): any {

  }

  createTorusKnot(): any {

  }

  fitMesh(mesh: any, x: number, y: number, z: number, width: number, height: number, depth: number, uniform: boolean): void {
  }

  flipMesh(mesh): void {

  }

  loadAnimMesh(filePath: string, parent?: any): any {
  }

  loadMesh(filePath: string, parent?: any): any {

  }

  meshCullBox(mesh: any, x: number, y: number, z: number, width: number, height: number, depth: number): void {
  }

  meshDepth(mesh: any): Observable<number> {
    return new Observable<number>((observer: Subscriber<number>) => {
      observer.next(0);
      observer.complete();
    });
  }

  meshHeight(mesh: any): Observable<number> {
    return new Observable<number>((observer: Subscriber<number>) => {
      observer.next(0);
      observer.complete();
    });
  }

  meshWidth(mesh: any): Observable<number> {
    return new Observable<number>((observer: Subscriber<number>) => {
      observer.next(0);
      observer.complete();
    });
  }

  positionMesh(mesh: any, x: number, y: number, z: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });
  }

  rotateMesh(mesh: any, pitch: number, yaw: number, roll: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });
  }

  scaleMesh(mesh: any, scaleX: number, scaleY: number, scaleZ: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });
  }
}
