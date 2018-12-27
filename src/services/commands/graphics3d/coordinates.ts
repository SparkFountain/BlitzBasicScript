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

  alignToVector(entity: any, x: number, y: number, z: number, axis: Axis, tween: number) {
    //TODO test if this is the correct behaviour
    //TODO in this implementation, tween would be deprecated
    let upDirection;
    switch (axis) {
      case 1: //x
        upDirection = new BABYLON.Vector3(1, 0, 0);
        break;
      case 2: //y
        upDirection = new BABYLON.Vector3(0, 1, 0);
        break;
      case 3: //z
        upDirection = new BABYLON.Vector3(0, 0, 1);
        break;
    }
    entity.alignWithNormal(new BABYLON.Vector3(x, y, z), upDirection);
  }

  moveEntity(entity: any, x: number, y: number, z: number): Observable<void> {
    return this.babylonjs.moveEntity(entity, x, y, z);
  }

  pointEntity(sourceEntity, targetEntity, roll) {

  }

  positionEntity(entity: Mesh | Camera, x: number, y: number, z: number, parentCoordinates?: boolean): Observable<void> {
    return this.babylonjs.positionMesh(entity, x, y, z, parentCoordinates);
  }

  rotateEntity(entity: Mesh | Camera, pitch: number, yaw: number, roll: number, parentCoordinates?: boolean) {
    return this.babylonjs.rotateEntity(entity, pitch, yaw, roll, parentCoordinates);
  }

  scaleEntity(entity, x, y, z, global) {
    entity.scaling = new BABYLON.Vector3(x, y, z);
  }

  translateEntity(entity, x, y, z, global) {
    entity.translate(BABYLON.Axis.X, x, BABYLON.Space.LOCAL);
    entity.translate(BABYLON.Axis.Y, y, BABYLON.Space.LOCAL);
    entity.translate(BABYLON.Axis.Z, z, BABYLON.Space.LOCAL);
  }

  turnEntity(entity, pitch, yaw, roll, global) {
    //TODO implement global
    entity.addRotation(pitch, yaw, roll);
  }
}
