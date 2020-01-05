import {Observable, Subscriber} from 'rxjs';
import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {GameEntity} from '../../../interfaces/game/entity';
import { Mesh } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dMeshesService {
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

    createCone(segments?: number, hasFloor?: boolean, parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createCone(segments, hasFloor).subscribe((coneMesh: Mesh) => {
                const coneEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: coneMesh
                };

                observer.next(coneEntity);
                observer.complete();
            });
        });
    }

    createSphere(segments?: number, parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createSphere(segments).subscribe((sphereMesh: Mesh) => {
                const sphereEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: sphereMesh
                };

                observer.next(sphereEntity);
                observer.complete();
            });
        });
    }

    createCube(parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createCube().subscribe((cubeMesh: Mesh) => {
                const cubeEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: cubeMesh
                };

                observer.next(cubeEntity);
                observer.complete();
            });
        });
    }

    createCylinder(segments?: number, hasFloor?: boolean, parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createCylinder(segments, hasFloor).subscribe((cylinderMesh: Mesh) => {
                const cylinderEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: cylinderMesh
                };

                observer.next(cylinderEntity);
                observer.complete();
            });
        });
    }

    createPyramid(baseVertexNumber?: number, parent?: any): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createPyramid(baseVertexNumber).subscribe((pyramidMesh: Mesh) => {
                const pyramidEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: pyramidMesh
                };

                observer.next(pyramidEntity);
                observer.complete();
            });
        });
    }

    createTorus(parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createTorus().subscribe((torusMesh: Mesh) => {
                const torusEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: torusMesh
                };

                observer.next(torusEntity);
                observer.complete();
            });
        });
    }

    createTorusKnot(parent?: GameEntity): Observable<GameEntity> {
        return new Observable<GameEntity>((observer: Subscriber<GameEntity>) => {
            this.babylonjs.createTorusKnot().subscribe((torusKnotMesh: Mesh) => {
                const torusKnotEntity: GameEntity = {
                    name: 'TODO',
                    class: 'Mesh',
                    parent: parent ? parent : null,
                    mesh: torusKnotMesh
                };

                observer.next(torusKnotEntity);
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

    positionMesh(mesh: Mesh, x: number, y: number, z: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            observer.next();
            observer.complete();
        });
    }

    rotateMesh(mesh: Mesh, pitch: number, yaw: number, roll: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            observer.next();
            observer.complete();
        });
    }

    scaleMesh(mesh: Mesh, scaleX: number, scaleY: number, scaleZ: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            observer.next();
            observer.complete();
        });
    }
}
