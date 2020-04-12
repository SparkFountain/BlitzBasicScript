import { Injectable } from '@angular/core';
import { GameEntity } from '../../../interfaces/game/entity';

@Injectable()
export class CommandsGraphics3dStatusService {
  constructor() {}

  async countChildren(entity: GameEntity): Promise<number> {
    return -1;
  }

  async deltaPitch(sourceEntity: GameEntity, targetEntity: GameEntity): Promise<number> {
    return -1;
  }

  async deltaYaw(sourceEntity: GameEntity, targetEntity: GameEntity): Promise<number> {
    return -1;
  }

  async entityClass(entity: GameEntity): Promise<string> {
    return entity.class;
  }

  async entityDistance(entity1: GameEntity, entity2: GameEntity): Promise<number> {
    return -1;
  }

  async entityInView(entity: GameEntity, camera: GameEntity): Promise<boolean> {
    return false;
  }

  async entityName(entity: GameEntity): Promise<string> {
    return entity.name;
  }

  async entityPitch(entity: GameEntity, global?: boolean): Promise<number> {
    return 0;
  }

  async entityRoll(entity: GameEntity, global?: boolean): Promise<number> {
    return 0;
  }

  async entityVisible(entity1: GameEntity, entity2: GameEntity): Promise<boolean> {
    return false;
  }

  async entityX(entity: GameEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityY(entity: GameEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityYaw(entity: GameEntity, global?: boolean): Promise<number> {
    return null;
  }

  async entityZ(entity: GameEntity, global?: boolean): Promise<number> {
    return null;
  }

  async findChild(entity: GameEntity, childName: string): Promise<GameEntity | null> {
    return null;
  }

  async getChild(entity: GameEntity, index: number): Promise<GameEntity | null> {
    return null;
  }

  async getParent(entity: GameEntity): Promise<GameEntity> {
    return entity.parent;
  }

  async nameEntity(entity: GameEntity, name: string): Promise<void> {
    entity.name = name;
  }
}
