import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {Axis} from '../../../enums/axis';
import {Observable} from 'rxjs';
import Mesh = BABYLON.Mesh;
import Camera = BABYLON.Camera;

@Injectable()
export class CommandsGraphics3dCoordinates {
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

  positionEntity(entity: Mesh | Camera, x: number, y: number, z: number, parentCoordinates?: boolean): Observable<void> {
    return this.babylonjs.positionMesh(entity, x, y, z, parentCoordinates);
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

  tFormedX() {
  }

  tFormedY() {
  }

  tFormedZ() {
  }

  tFormNormal() {
  }

  tFormPoint() {
  }

  tFormVector() {
  }
}
