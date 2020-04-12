import { Injectable } from '@angular/core';
import { BabylonJSService } from '../../babylon-js.service';
import { GameEntity } from '../../../interfaces/game/entity';
import { Mesh } from 'babylonjs';

@Injectable()
export class CommandsGraphics3dMeshesService {
  constructor(private babylonjs: BabylonJSService) {}

  async addMesh(source: any, target: any): Promise<any> {}

  async copyMesh(mesh: any, parent?: any): Promise<any> {}

  async createCone(segments?: number, hasFloor?: boolean, parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createCone(segments, hasFloor).then((coneMesh: Mesh) => {
      const coneEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: coneMesh
      };

      return coneEntity;
    });
  }

  async createSphere(segments?: number, parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createSphere(segments).then((sphereMesh: Mesh) => {
      const sphereEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: sphereMesh
      };

      return sphereEntity;
    });
  }

  async createCube(parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createCube().then((cubeMesh: Mesh) => {
      const cubeEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: cubeMesh
      };

      return cubeEntity;
    });
  }

  async createCylinder(segments?: number, hasFloor?: boolean, parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createCylinder(segments, hasFloor).then((cylinderMesh: Mesh) => {
      const cylinderEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: cylinderMesh
      };

      return cylinderEntity;
    });
  }

  async createPyramid(baseVertexNumber?: number, parent?: any): Promise<GameEntity> {
    return this.babylonjs.createPyramid(baseVertexNumber).then((pyramidMesh: Mesh) => {
      const pyramidEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: pyramidMesh
      };

      return pyramidEntity;
    });
  }

  async createTorus(parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createTorus().then((torusMesh: Mesh) => {
      const torusEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: torusMesh
      };

      return torusEntity;
    });
  }

  async createTorusKnot(parent?: GameEntity): Promise<GameEntity> {
    return this.babylonjs.createTorusKnot().then((torusKnotMesh: Mesh) => {
      const torusKnotEntity: GameEntity = {
        name: 'TODO',
        class: 'Mesh',
        parent: parent ? parent : null,
        mesh: torusKnotMesh
      };

      return torusKnotEntity;
    });
  }

  async fitMesh(
    mesh: any,
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number,
    uniform: boolean
  ): Promise<void> {}

  async flipMesh(mesh): Promise<void> {}

  async loadAnimMesh(filePath: string, parent?: any): Promise<any> {}

  async loadMesh(filePath: string, parent?: any): Promise<any> {}

  async meshCullBox(
    mesh: any,
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number
  ): Promise<void> {}

  async meshDepth(mesh: any): Promise<number> {
    return 0;
  }

  async meshHeight(mesh: any): Promise<number> {
    return 0;
  }

  async meshWidth(mesh: any): Promise<number> {
    return 0;
  }

  async positionMesh(mesh: Mesh, x: number, y: number, z: number): Promise<void> {}

  async rotateMesh(mesh: Mesh, pitch: number, yaw: number, roll: number): Promise<void> {}

  async scaleMesh(mesh: Mesh, scaleX: number, scaleY: number, scaleZ: number): Promise<void> {}
}
