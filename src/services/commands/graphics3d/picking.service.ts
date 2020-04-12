import { Injectable } from '@angular/core';
import { GameEntity } from '../../../interfaces/game/entity';
import { PickGeometry } from '../../../enums/pick/geometry';

@Injectable()
export class CommandsGraphics3dPickingService {
  constructor() {}

  async cameraPick(camera: GameEntity, x: number, y: number): Promise<GameEntity> {
    return null;
  }

  async entityPick(entity: GameEntity, distance: number): Promise<GameEntity> {
    return null;
  }

  async entityPickMode(entity: GameEntity, geometry: PickGeometry, coverOtherObjects?: boolean): Promise<void> {}

  async linePick(
    x: number,
    y: number,
    z: number,
    dx: number,
    dy: number,
    dz: number,
    radius?: number
  ): Promise<GameEntity> {
    return null;
  }

  async pickedEntity(): Promise<GameEntity> {
    return null;
  }

  async pickedNX(): Promise<number> {
    return 0;
  }

  async pickedNY(): Promise<number> {
    return 0;
  }

  async pickedNZ(): Promise<number> {
    return 0;
  }

  async pickedSurface() {}

  async pickedTime() {}

  async pickedTriangle() {}

  async pickedX(): Promise<number> {
    return 0;
  }

  async pickedY(): Promise<number> {
    return 0;
  }

  async pickedZ(): Promise<number> {
    return 0;
  }
}
