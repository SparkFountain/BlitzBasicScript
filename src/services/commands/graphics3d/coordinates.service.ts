import { Injectable } from "@angular/core";
import { BabylonJSService } from "../../babylon-js.service";
import { BbScriptAxis } from "../../../enums/axis";
import { GameEntity } from "../../../interfaces/game/entity";
import { Mesh, Camera } from "babylonjs";
import { BbScriptEntity } from "bbscript/src/classes/in-game/3d/entity";

@Injectable()
export class CommandsGraphics3dCoordinatesService {
  constructor(private babylonjs: BabylonJSService) {}

  async alignToVector(
    entity: BbScriptEntity,
    x: number,
    y: number,
    z: number,
    axis: BbScriptAxis,
    tween: number
  ): Promise<void> {
    return this.babylonjs.alignToVector(entity, x, y, z, axis, tween);
  }

  async moveEntity(
    entity: BbScriptEntity,
    x: number,
    y: number,
    z: number
  ): Promise<void> {
    return this.babylonjs.moveEntity(entity, x, y, z);
  }

  async pointEntity(
    sourceEntity: BbScriptEntity,
    targetEntity: BbScriptEntity,
    roll: number
  ): Promise<void> {
    return this.babylonjs.pointEntity(sourceEntity, targetEntity, roll);
  }

  async positionEntity(
    entity: GameEntity,
    x: number,
    y: number,
    z: number,
    parentCoordinates?: boolean
  ): Promise<void> {
    // TODO distinguish between positionMesh and positionEntity!
    let mesh: Mesh | Camera;
    if (entity.camera) {
      mesh = entity.camera;
    } else if (entity.mesh) {
      mesh = entity.mesh;
    }
    return this.babylonjs.positionMesh(mesh, x, y, z, parentCoordinates);
  }

  async rotateEntity(
    entity: Mesh | Camera,
    pitch: number,
    yaw: number,
    roll: number,
    parentCoordinates?: boolean
  ) {
    return this.babylonjs.rotateEntity(
      entity,
      pitch,
      yaw,
      roll,
      parentCoordinates
    );
  }

  async scaleEntity(
    entity: BbScriptEntity,
    x: number,
    y: number,
    z: number,
    parentScale?: boolean
  ): Promise<void> {
    return this.babylonjs.scaleMesh(entity, x, y, z, parentScale);
  }

  async translateEntity(
    entity: BbScriptEntity,
    x: number,
    y: number,
    z: number,
    parentAngle?: boolean
  ): Promise<void> {
    return this.babylonjs.translateEntity(entity, x, y, z, parentAngle);
  }

  async turnEntity(
    entity: BbScriptEntity,
    pitch: number,
    yaw: number,
    roll: number,
    parentAngle?: boolean
  ): Promise<void> {
    return this.babylonjs.turnEntity(entity, pitch, yaw, roll, parentAngle);
  }

  async tFormedX(): Promise<number> {
    return 0;
  }

  async tFormedY(): Promise<number> {
    return 0;
  }

  async tFormedZ(): Promise<number> {
    return 0;
  }

  async tFormNormal(
    x: number,
    y: number,
    z: number,
    source: GameEntity,
    target: GameEntity
  ): Promise<void> {}

  async tFormPoint(
    x: number,
    y: number,
    z: number,
    source: GameEntity,
    target: GameEntity
  ): Promise<void> {}

  async tFormVector(
    x: number,
    y: number,
    z: number,
    source: GameEntity,
    target: GameEntity
  ): Promise<void> {}
}
