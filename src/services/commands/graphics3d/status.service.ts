import { Injectable } from '@angular/core';
import { BbScriptEntity } from 'bbscript/src/classes/in-game/3d/entity';

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
    return entity.class;
  }

  async entityDistance(entity1: BbScriptEntity, entity2: BbScriptEntity): Promise<number> {
    return -1;
  }

  async entityInView(entity: BbScriptEntity, camera: BbScriptEntity): Promise<boolean> {
    return false;
  }

  async entityName(entity: BbScriptEntity): Promise<string> {
    return null;
    // return entity.name;
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
    return null;
  }

  async entityY(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityYaw(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityZ(entity: BbScriptEntity, global?: boolean): Promise<number> {
    return null;
  }

  async findChild(entity: BbScriptEntity, childName: string): Promise<BbScriptEntity | null> {
    return null;
  }

  async getChild(entity: BbScriptEntity, index: number): Promise<BbScriptEntity | null> {
    return null;
  }

  async getParent(entity: BbScriptEntity): Promise<BbScriptEntity> {
    return null;
    // return entity.parent;
  }

  async nameEntity(entity: BbScriptEntity, name: string): Promise<void> {
    return null;
    // entity.name = name;
  }
}
