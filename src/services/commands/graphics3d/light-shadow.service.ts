import { Injectable } from '@angular/core';
import { BabylonJSService } from '../../babylon-js.service';
import { LightType } from '../../../enums/light/light-type';
import { Light } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dLightShadowService {
  constructor(private babylonjs: BabylonJSService) {}

  async ambientLight(red: number, green: number, blue: number): Promise<void> {
    return this.babylonjs.ambientLight(red, green, blue);
  }

  async createLight(type?: LightType, parent?: any): Promise<any> {
    return this.babylonjs.createLight(type).then((light: any) => {
      if (parent) {
        light.parent = parent;
      }
      return light;
    });
  }

  async lightColor(light: Light, red: number, green: number, blue: number): Promise<void> {
    return this.babylonjs.lightColor(light, red, green, blue);
  }

  async lightConeAngles() {}

  async lightMesh() {}

  async lightRange(light: Light, range: number): Promise<void> {
    return this.babylonjs.lightRange(light, range);
  }

  async createShadowMap() {}

  async deleteShadowMap() {}

  async castShadow() {}

  async receiveShadows() {}

  async shadowDarkness() {}
}
