import { BbScriptEntity } from './entity';
import { CameraType } from 'bbscript/src/enums/camera/camera-type';
import { Camera } from 'babylonjs/Cameras/camera';

export class BbScriptCamera extends BbScriptEntity {
  minZ: number;
  maxZ: number;

  constructor(camera: Camera, parent?: BbScriptEntity) {
    super('camera', 'camera', parent, camera);
  }
}
