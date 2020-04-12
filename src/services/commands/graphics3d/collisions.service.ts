import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class CommandsGraphics3dCollisionsService {
  constructor() {}

  async clearCollisions(): Promise<void> {}

  async collisionEntity(entity: any, index: number): Promise<any> {}

  async collisionNX(entity: any, index: number): Promise<number> {
    return 0;
  }

  async collisionNY(entity: any, index: number): Promise<number> {
    return 0;
  }

  async collisionNZ(entity: any, index: number): Promise<number> {
    return 0;
  }

  async collisions(sourceEntity: any, targetEntity: any, method: number, reaction: number): Promise<void> {}

  async collisionSurface(entity: any, index: number): Promise<any> {}

  async collisionTime(entity: any, index: number): Promise<number> {
    return 0;
  }

  async collisionTriangle() {}

  async collisionX() {}

  async collisionY() {}

  async collisionZ() {}

  async countCollisions() {}

  async entityBox() {}

  async entityCollided() {}

  async entityRadius() {}

  async entityType() {}

  async getEntityType() {}

  async meshesIntersect() {}

  async resetEntity() {}
}
