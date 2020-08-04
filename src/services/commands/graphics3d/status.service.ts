import { Injectable } from '@angular/core';
import { BbScriptEntity } from 'bbscript/src/classes/in-game/3d/entity';
import { DeepImmutableObject, Vector3, DeepImmutable } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dStatusService {
  constructor() {}

  async countChildren(entity: BbScriptEntity): Promise<number> {
    return -1;
  }

  async deltaPitch(sourceEntity: BbScriptEntity, targetEntity: BbScriptEntity): Promise<number> {
    return -1;
  }

  async deltaYaw(sourceEntity: BbScriptEntity, targetEntity: BbScriptEntity): Promise<number> {
    return -1;
  }

  async entityClass(entity: BbScriptEntity): Promise<string> {
    return entity.getClass();
  }

  async entityDistance(entity1: BbScriptEntity, entity2: BbScriptEntity): Promise<number> {
    // TODO: find out what's wrong with DeepImmutableObjects
    return null;
    // return BABYLON.Vector3.Distance(entity1.getPosition() as DeepImmutable<Vector3>, entity2.getPosition());
  }

  async entityInView(entity: BbScriptEntity, camera: BbScriptEntity): Promise<boolean> {
    return false;
  }

  async entityName(entity: BbScriptEntity): Promise<string> {
    return entity.getName();
  }

  async entityPitch(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return 0;
  }

  async entityRoll(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return 0;
  }

  async entityVisible(entity1: BbScriptEntity, entity2: BbScriptEntity): Promise<boolean> {
    return false;
  }

  async entityX(entity: BbScriptEntity, global?: boolean): Promise<number> {
    // TODO: implement global parameter
    return entity.getPosition().x;
  }

  async entityY(entity: BbScriptEntity, global?: boolean): Promise<number> {
    // TODO: implement global parameter
    return entity.getPosition().y;
  }

  async entityYaw(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityZ(entity: BbScriptEntity, global?: boolean): Promise<number> {
    // TODO: implement global parameter
    return entity.getPosition().z;
  }

  async findChild(entity: BbScriptEntity, childName: string): Promise<BbScriptEntity | null> {
    return null;
  }

  async getChild(entity: BbScriptEntity, index: number): Promise<BbScriptEntity | null> {
    return null;
  }

  async getParent(entity: BbScriptEntity): Promise<BbScriptEntity> {
    return entity.getParent();
  }

  async nameEntity(entity: BbScriptEntity, name: string): Promise<void> {
    entity.setName(name);
  }
}
