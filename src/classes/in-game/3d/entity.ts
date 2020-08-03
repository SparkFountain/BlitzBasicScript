import { Vector3, Mesh, Camera, Light } from 'babylonjs';

export class BbScriptEntity {
  name: string;
  class: string;
  parent: BbScriptEntity;
  instance: Mesh | Camera | Light;

  constructor(name: string, className: string, parent: BbScriptEntity, instance: Mesh | Camera | Light) {
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

  public getRotation(): Vector3 {
    if (this.instance instanceof Light || this.instance instanceof Camera) {
      return new Vector3();
    } else {
      return this.instance.rotation;
    }
  }
}
