import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TextureMode } from '../../../enums/texture/texture-mode';
import { SpriteViewMode } from '../../../enums/sprite/sprite-view-mode';
import { GameEntity } from '../../../interfaces/game/entity';

@Injectable()
export class CommandsGraphics3dSpritesService {
  constructor() {}

  async createSprite(parent?: GameEntity): Promise<GameEntity> {
    //TODO implementation
    return null;
  }

  async handleSprite(sprite: GameEntity, x: number, y: number): Promise<void> {
    //TODO implementation
  }

  async loadSprite(filePath: string, mode: TextureMode, parent?: any): Promise<GameEntity> {
    //TODO implementation
    return null;
  }

  async rotateSprite(sprite: GameEntity, angle: number): Promise<void> {
    //TODO implementation
  }

  async scaleSprite(sprite: GameEntity, x: number, y: number): Promise<void> {
    //TODO implementation
  }

  async spriteViewMode(sprite: GameEntity, mode: SpriteViewMode): Promise<void> {
    //TODO implementation
  }
}
