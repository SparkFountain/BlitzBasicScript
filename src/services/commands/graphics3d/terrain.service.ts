import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CommandsGraphics3dTerrainService {
  constructor() {}

  async createTerrain(segments: number, parent?: any): Promise<BABYLON.Mesh> {
    //TODO implementation
    return null;
  }

  async loadTerrain(filePath: string, parent?: any): Promise<BABYLON.Mesh> {
    //TODO implementation, see https://www.babylonjs-playground.com/#E6OZX#7
    return null;
  }

  async modifyTerrain(
    terrain: BABYLON.Mesh,
    x: number,
    z: number,
    height: number,
    realTimeUpdate?: boolean
  ): Promise<void> {
    //TODO implementation
  }

  async terrainDetail(terrain: BABYLON.Mesh, detailLevel: number, enableMorphing: boolean): Promise<void> {
    //TODO implementation
  }

  async terrainHeight(terrain: BABYLON.Mesh, x: number, z: number): Promise<number> {
    //TODO implementation
    return 0;
  }

  async terrainShading(enableShading: boolean): Promise<void> {
    //TODO implementation
  }

  async terrainSize(terrain: BABYLON.Mesh): Promise<number> {
    //TODO implementation
    return 0;
  }

  async terrainX(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    //TODO implementation
    return 0;
  }

  async terrainY(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    //TODO implementation
    return 0;
  }

  async terrainZ(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    //TODO implementation
    return 0;
  }
}
