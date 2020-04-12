import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CommandsGraphics3dScreenService {
  constructor() {}

  async countGfxModes3d(): Promise<number> {
    return 1;
  }

  async gfxDriver3D(): Promise<boolean> {
    return BABYLON.Engine.isSupported();
  }

  async gfxDriverCaps3D(): Promise<number> {
    return 110;
  }

  async gfxMode3D(mode: number): Promise<boolean> {
    return true;
  }

  async gfxMode3DExists(width: number, height: number, depth: number): Promise<boolean> {
    return true;
  }

  async windowed3D(): Promise<boolean> {
    return true;
  }
}
