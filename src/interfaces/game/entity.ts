import {EntityClass} from '../../enums/entity/entity-class';

export interface GameEntity {
    name: string,
    class: EntityClass,
    parent: GameEntity | null,
    mesh?: BABYLON.Mesh,
    camera?: BABYLON.Camera,
    sprite?: BABYLON.Sprite,
    light?: BABYLON.Light
}
