import { Injectable } from '@angular/core';
import { GameEntity } from '../../../interfaces/game/entity';
import { of, Subscriber } from 'rxjs';
import { BlendMode } from '../../../enums/entity/blend-mode';
import { BabylonJSService } from '../../babylon-js.service';

@Injectable()
export class CommandsGraphics3dControlsService {
  constructor(private babylonjs: BabylonJSService) {}

  async copyEntity(entity: GameEntity, parent?: GameEntity): Promise<GameEntity> {
    return null;
  }

  async entityAlpha(entity: GameEntity, alpha: number): Promise<void> {
    entity.mesh.material.alpha = alpha;
  }

  async entityAutoFade(entity: GameEntity, near: number, far: number): Promise<void> {}

  async entityBlend(entity: GameEntity, mode: BlendMode): Promise<void> {}

  async entityColor(entity: GameEntity, red: number, green: number, blue: number): Promise<void> {
    if (entity.class === 'Mesh') {
      this.babylonjs.colorMesh(entity.mesh, red, green, blue);
    } else {
      console.error(`Cannot assign "EntityColor()" to entity of type ${entity.class}`);
    }
  }

  async entityFx() {}

  async entityOrder() {}

  async entityParent() {}

  async entityShininess() {}

  async entityTexture() {}

  async freeEntity() {}

  async hideEntity() {}

  async showEntity() {}
}
