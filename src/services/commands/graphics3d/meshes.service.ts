import { Injectable } from "@angular/core";
import { BabylonJSService } from "../../babylon-js.service";
import { Mesh } from "babylonjs";
import { BbScriptEntity } from "bbscript/src/classes/in-game/3d/entity";

@Injectable()
export class CommandsGraphics3dMeshesService {
  constructor(private babylonjs: BabylonJSService) {}

  async addMesh(
    source: BbScriptEntity,
    target: BbScriptEntity
  ): Promise<void> {}

  async copyMesh(
    mesh: BbScriptEntity,
    parent?: BbScriptEntity
  ): Promise<BbScriptEntity> {
    return null;
  }

  async createCone(
    segments?: number,
    hasFloor?: boolean,
    parent?: BbScriptEntity
  ): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs
    //   .createCone(segments, hasFloor)
    //   .then((coneMesh: Mesh) => {
    //     const coneEntity: BbScriptEntity = {
    //       name: "TODO",
    //       class: "Mesh",
    //       parent: parent ? parent : null,
    //       mesh: coneMesh,
    //     };

    //     return coneEntity;
    //   });
  }

  async createSphere(
    segments?: number,
    parent?: BbScriptEntity
  ): Promise<BbScriptEntity> {
    return this.babylonjs.createSphere(segments).then((sphereMesh: Mesh) => {
      return null;

      // const sphereEntity: BbScriptEntity = {
      //   name: "TODO",
      //   class: "Mesh",
      //   parent: parent ? parent : null,
      //   mesh: sphereMesh,
      // };

      // return sphereEntity;
    });
  }

  async createCube(parent?: BbScriptEntity): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs.createCube().then((cubeMesh: Mesh) => {
    //   const cubeEntity: BbScriptEntity = {
    //     name: "TODO",
    //     class: "Mesh",
    //     parent: parent ? parent : null,
    //     mesh: cubeMesh,
    //   };

    //   return cubeEntity;
    // });
  }

  async createCylinder(
    segments?: number,
    hasFloor?: boolean,
    parent?: BbScriptEntity
  ): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs
    //   .createCylinder(segments, hasFloor)
    //   .then((cylinderMesh: Mesh) => {
    //     const cylinderEntity: BbScriptEntity = {
    //       name: "TODO",
    //       class: "Mesh",
    //       parent: parent ? parent : null,
    //       mesh: cylinderMesh,
    //     };

    //     return cylinderEntity;
    //   });
  }

  async createPyramid(
    baseVertexNumber?: number,
    parent?: any
  ): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs
    //   .createPyramid(baseVertexNumber)
    //   .then((pyramidMesh: Mesh) => {
    //     const pyramidEntity: BbScriptEntity = {
    //       name: "TODO",
    //       class: "Mesh",
    //       parent: parent ? parent : null,
    //       mesh: pyramidMesh,
    //     };

    //     return pyramidEntity;
    //   });
  }

  async createTorus(parent?: BbScriptEntity): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs.createTorus().then((torusMesh: Mesh) => {
    //   const torusEntity: BbScriptEntity = {
    //     name: "TODO",
    //     class: "Mesh",
    //     parent: parent ? parent : null,
    //     mesh: torusMesh,
    //   };

    //   return torusEntity;
    // });
  }

  async createTorusKnot(parent?: BbScriptEntity): Promise<BbScriptEntity> {
    return null;

    // return this.babylonjs.createTorusKnot().then((torusKnotMesh: Mesh) => {
    //   const torusKnotEntity: BbScriptEntity = {
    //     name: "TODO",
    //     class: "Mesh",
    //     parent: parent ? parent : null,
    //     mesh: torusKnotMesh,
    //   };

    //   return torusKnotEntity;
    // });
  }

  async fitMesh(
    mesh: BbScriptEntity,
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number,
    uniform: boolean
  ): Promise<void> {}

  async flipMesh(mesh: BbScriptEntity): Promise<void> {}

  async loadAnimMesh(filePath: string, parent?: any): Promise<BbScriptEntity> {
    return null;
  }

  async loadMesh(filePath: string, parent?: any): Promise<BbScriptEntity> {
    return null;
  }

  async meshCullBox(
    mesh: any,
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number
  ): Promise<void> {}

  async meshDepth(mesh: BbScriptEntity): Promise<number> {
    return 0;
  }

  async meshHeight(mesh: BbScriptEntity): Promise<number> {
    return 0;
  }

  async meshWidth(mesh: BbScriptEntity): Promise<number> {
    return 0;
  }

  async positionMesh(
    mesh: BbScriptEntity,
    x: number,
    y: number,
    z: number
  ): Promise<void> {}

  async rotateMesh(
    mesh: BbScriptEntity,
    pitch: number,
    yaw: number,
    roll: number
  ): Promise<void> {}

  async scaleMesh(
    mesh: BbScriptEntity,
    scaleX: number,
    scaleY: number,
    scaleZ: number
  ): Promise<void> {}
}
