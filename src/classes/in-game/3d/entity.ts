import { Vector3, Mesh, Camera, Light } from 'babylonjs';

export class BbScriptEntity {
  name: string;
  class: string;
  parent: BbScriptEntity;
  instance: Mesh | Camera | Light;

  constructor(
    name: string,
    className: string,
    parent: BbScriptEntity,
    instance: Mesh | Camera | Light
  ) {
    this.name = name;
    this.class = className;
    this.parent = parent;
    this.instance = instance;
  }

  public getPosition(): Vector3 {
    if (this.instance instanceof Light) {
      return new Vector3();
    } else {
      return this.instance.position;
    }
  }

  public setPosition(x: number, y: number, z: number): void {
    if (this.instance instanceof Light) {
      // TODO: implement a solution
    } else {
      this.instance.position = new Vector3(x, y, z);
    }
  }

  public getRotation(): Vector3 {
    if (this.instance instanceof Light || this.instance instanceof Camera) {
      return new Vector3();
    } else {
      return this.instance.rotation;
    }
  }

  public setRotation(pitch: number, yaw: number, roll: number): void {
    if (this.instance instanceof Light || this.instance instanceof Camera) {
      // TODO: implement a solution
    } else {
      this.instance.rotation = new Vector3(pitch, yaw, roll);
    }
  }

  public getScaling(): Vector3 {
    if (this.instance instanceof Light || this.instance instanceof Camera) {
      // TODO: implement a solution
      return new Vector3();
    } else {
      return this.instance.scaling;
    }
  }

  public setScaling(width: number, height: number, depth: number): void {
    if (this.instance instanceof Light || this.instance instanceof Camera) {
      // TODO: implement a solution
    } else {
      this.instance.scaling = new Vector3(width, height, depth);
    }
  }
}
