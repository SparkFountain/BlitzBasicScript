import { Injectable } from '@angular/core';
import { BabylonJSService } from '../../babylon-js/babylon-js.service';
import { Axis } from '../../../enums/axis';
import { Observable, of } from 'rxjs';
import { GameEntity } from '../../../interfaces/game/entity';
import { Mesh, Camera } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dCoordinatesService {
  constructor(private babylonjs: BabylonJSService) {

  }

  alignToVector(entity: any, x: number, y: number, z: number, axis: Axis, tween: number): Observable<void> {
    return this.babylonjs.alignToVector(entity, x, y, z, axis, tween);
  }

  moveEntity(entity: any, x: number, y: number, z: number): Observable<void> {
    return this.babylonjs.moveEntity(entity, x, y, z);
  }

  pointEntity(sourceEntity: any, targetEntity: any, roll: number): Observable<void> {
    return this.babylonjs.pointEntity(sourceEntity, targetEntity, roll);
  }

  positionEntity(entity: GameEntity, x: number, y: number, z: number, parentCoordinates?: boolean): Observable<void> {
    // TODO distinguish between positionMesh and positionEntity!
    let mesh: Mesh | Camera;
    if (entity.camera) {
      mesh = entity.camera;
    } else if (entity.mesh) {
      mesh = entity.mesh;
    }
    return this.babylonjs.positionMesh(mesh, x, y, z, parentCoordinates);
  }

  rotateEntity(entity: Mesh | Camera, pitch: number, yaw: number, roll: number, parentCoordinates?: boolean) {
    return this.babylonjs.rotateEntity(entity, pitch, yaw, roll, parentCoordinates);
  }

  scaleEntity(entity: any, x: number, y: number, z: number, parentScale?: boolean): Observable<void> {
    return this.babylonjs.scaleMesh(entity, x, y, z, parentScale);
  }

  translateEntity(entity: any, x: number, y: number, z: number, parentAngle?: boolean): Observable<void> {
    return this.babylonjs.translateEntity(entity, x, y, z, parentAngle);
  }

  turnEntity(entity: any, pitch: number, yaw: number, roll: number, parentAngle?: boolean): Observable<void> {
    return this.babylonjs.turnEntity(entity, pitch, yaw, roll, parentAngle);
  }

  tFormedX(): Observable<number> {
    return of(0);
  }

  tFormedY(): Observable<number> {
    return of(0);
  }

  tFormedZ(): Observable<number> {
    return of(0);
  }

  tFormNormal(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return of(null);
  }

  tFormPoint(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return of(null);
  }

  tFormVector(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return of(null);
  }
}
