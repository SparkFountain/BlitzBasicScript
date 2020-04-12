import { Injectable } from '@angular/core';
import { TextureMode } from '../../../enums/texture/texture-mode';
import { CubeMapFace } from '../../../enums/texture/cube-map-face';
import { CubeMapMode } from '../../../enums/texture/cube-map-mode';
import { TextureBlendMode } from '../../../enums/texture/texture-blend-mode';

@Injectable()
export class CommandsGraphics3dTexturesService {
  constructor() {}

  async activeTextures(): Promise<number> {
    //TODO implement
    return 0;
  }

  async clearTextureFilters(): Promise<void> {
    //TODO implement
    return null;
  }

  async createTexture(width: number, height: number, mode?: TextureMode, frames?: number): Promise<BABYLON.Texture> {
    //TODO implementation
    return null;
  }

  async freeTexture(texture: BABYLON.Texture): Promise<void> {
    texture = null;
  }

  async loadAnimTexture(
    filePath: string,
    mode: TextureMode,
    width: number,
    height: number,
    startFrame: number,
    totalFrames: number
  ): Promise<BABYLON.Texture> {
    //TODO implementation
    return null;
  }

  async loadTexture(filePath: string, mode: TextureMode): Promise<BABYLON.Texture> {
    //TODO implementation
    return null;
  }

  async positionTexture(texture: BABYLON.Texture, u: number, v: number): Promise<void> {
    //TODO implementation
    return null;
  }

  async rotateTexture(texture: BABYLON.Texture, angle: number): Promise<void> {
    //TODO implementation
    return null;
  }

  async scaleTexture(texture: BABYLON.Texture, u: number, v: number): Promise<void> {
    //TODO implementation
    return null;
  }

  async setCubeFace(texture: BABYLON.Texture, face: CubeMapFace): Promise<void> {
    //TODO implementation
    return null;
  }

  async setCubeMode(texture: BABYLON.Texture, mode: CubeMapMode): Promise<void> {
    //TODO implementation
    return null;
  }

  async textureBlend(texture: BABYLON.Texture, mode: TextureBlendMode): Promise<void> {
    //TODO implementation
    return null;
  }

  async textureCoords(texture: BABYLON.Texture, coordinate: boolean): Promise<void> {
    //TODO implementation
    return null;
  }

  async textureFilter(searchText: string, mode: TextureMode): Promise<void> {
    //TODO implementation
    return null;
  }

  async textureHeight(texture: BABYLON.Texture): Promise<number> {
    return texture.getBaseSize().height;
  }

  async textureName(texture: BABYLON.Texture): Promise<string> {
    //TODO implementation
    return '';
  }

  async textureWidth(texture: BABYLON.Texture): Promise<number> {
    return texture.getBaseSize().width;
  }
}
