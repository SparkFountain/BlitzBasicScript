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

  createCone(segments?: number, hasFloor?: boolean, parent?: Mesh): Observable<Mesh> {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createCone(segments, hasFloor).subscribe((cone: Mesh) => {
        if (parent) {
          cone.parent = parent;
        }

        observer.next(cone);
        observer.complete();
      });
    });
  }

  createSphere(segments?: number, parent?: Mesh): Observable<Mesh> {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createSphere(segments).subscribe((sphere: Mesh) => {
        if (parent) {
          sphere.parent = parent;
        }

        observer.next(sphere);
        observer.complete();
      });
    });
  }

  createCube(parent?: Mesh): Observable<Mesh> {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createCube().subscribe((cube: Mesh) => {
        if (parent) {
          cube.parent = parent;
        }

        observer.next(cube);
        observer.complete();
      });
    });
  }

  createCylinder(segments?: number, hasFloor?: boolean, parent?: any): any {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createCylinder(segments, hasFloor).subscribe((cylinder: Mesh) => {
        if (parent) {
          cylinder.parent = parent;
        }

        observer.next(cylinder);
        observer.complete();
      });
    });
  }

  createPyramid(baseVertexNumber?: number, parent?: any): any {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createPyramid(baseVertexNumber).subscribe((pyramid: Mesh) => {
        if (parent) {
          pyramid.parent = parent;
        }

        observer.next(pyramid);
        observer.complete();
      });
    });
  }

  createTorus(parent?: Mesh): Observable<Mesh> {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createTorus().subscribe((torus: Mesh) => {
        if (parent) {
          torus.parent = parent;
        }

        observer.next(torus);
        observer.complete();
      });
    });
  }

  createTorusKnot(parent?: Mesh): Observable<Mesh> {
    return new Observable<Mesh>((observer: Subscriber<Mesh>) => {
      this.babylonjs.createTorusKnot().subscribe((torusKnot: Mesh) => {
        if (parent) {
          torusKnot.parent = parent;
        }

        observer.next(torusKnot);
        observer.complete();
      });
    });
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
