import { Injectable } from '@angular/core';
import { CommandsGraphics3dAnimationsService } from './graphics3d/animations.service';
import { CommandsGraphics3dBrushesService } from './graphics3d/brushes.service';
import { CommandsGraphics3dCameraService } from './graphics3d/camera.service';
import { CommandsGraphics3dCollisionsService } from './graphics3d/collisions.service';
import { CommandsGraphics3dControlsService } from './graphics3d/controls.service';
import { CommandsGraphics3dCoordinatesService } from './graphics3d/coordinates.service';
import { CommandsGraphics3dDiverseService } from './graphics3d/diverse.service';
import { CommandsGraphics3dLightShadowService } from './graphics3d/light-shadow.service';
import { CommandsGraphics3dMeshesService } from './graphics3d/meshes.service';
import { CommandsGraphics3dPickingService } from './graphics3d/picking.service';
import { CommandsGraphics3dSceneService } from './graphics3d/scene.service';
import { CommandsGraphics3dSceneryService } from './graphics3d/scenery.service';
import { CommandsGraphics3dScreenService } from './graphics3d/screen.service';
import { CommandsGraphics3dSpritesService } from './graphics3d/sprites.service';
import { CommandsGraphics3dStatusService } from './graphics3d/status.service';
import { CommandsGraphics3dSurfacesService } from './graphics3d/surfaces.service';
import { CommandsGraphics3dTerrainService } from './graphics3d/terrain.service';
import { CommandsGraphics3dTexturesService } from './graphics3d/textures.service';
import { CameraType } from 'bbscript/src/enums/camera/camera-type';
import { GameEntity } from 'bbscript/src/interfaces/game/entity';
import { BlendMode } from 'bbscript/src/enums/entity/blend-mode';
import { LightType } from 'bbscript/src/enums/light/light-type';
import { Light, Mesh, Camera } from 'babylonjs';
import { PickGeometry } from 'bbscript/src/enums/pick/geometry';
import { TextureMode } from 'bbscript/src/enums/texture/texture-mode';
import { SpriteViewMode } from 'bbscript/src/enums/sprite/sprite-view-mode';
import { CubeMapFace } from 'bbscript/src/enums/texture/cube-map-face';
import { CubeMapMode } from 'bbscript/src/enums/texture/cube-map-mode';
import { TextureBlendMode } from 'bbscript/src/enums/texture/texture-blend-mode';
import { Axis } from 'bbscript/src/enums/axis';

@Injectable()
export class CommandsGraphics3DService {
  constructor(
    private animationsService: CommandsGraphics3dAnimationsService,
    private brushesService: CommandsGraphics3dBrushesService,
    private cameraService: CommandsGraphics3dCameraService,
    private collisionsService: CommandsGraphics3dCollisionsService,
    private controlsService: CommandsGraphics3dControlsService,
    private coordinatesService: CommandsGraphics3dCoordinatesService,
    private diverseService: CommandsGraphics3dDiverseService,
    private lightShadowService: CommandsGraphics3dLightShadowService,
    private meshesService: CommandsGraphics3dMeshesService,
    private pickingService: CommandsGraphics3dPickingService,
    private sceneService: CommandsGraphics3dSceneService,
    private sceneryService: CommandsGraphics3dSceneryService,
    private screenService: CommandsGraphics3dScreenService,
    private spritesService: CommandsGraphics3dSpritesService,
    private statusService: CommandsGraphics3dStatusService,
    private surfacesService: CommandsGraphics3dSurfacesService,
    private terrainService: CommandsGraphics3dTerrainService,
    private texturesService: CommandsGraphics3dTexturesService
  ) {}

  // ANIMATIONS
  async addAnimSeq(entity: any, duration: number): Promise<number> {
    return this.animationsService.addAnimSeq(entity, duration);
  }

  async animate(entity: any, mode?: number, speed?: number, sequenceId?: number, transition?: number): Promise<void> {
    return this.animationsService.animate(entity, mode, speed, sequenceId, transition);
  }

  async animating(entity: any): Promise<boolean> {
    return this.animationsService.animating(entity);
  }

  async animLength(entity: any): Promise<number> {
    return this.animationsService.animLength(entity);
  }

  async animSeq(entity: any): Promise<number> {
    return this.animationsService.animSeq(entity);
  }

  async animTime(entity: any): Promise<number> {
    return this.animationsService.animTime(entity);
  }

  async extractAnimSeq(entity: any, start: number, end: number, animSeq?: number): Promise<number> {
    return this.animationsService.extractAnimSeq(entity, start, end, animSeq);
  }

  async loadAnimSeq(entity: any, filePath: string): Promise<number> {
    return this.animationsService.loadAnimSeq(entity, filePath);
  }

  async setAnimKey(
    entity: any,
    frame: number,
    translation?: boolean,
    rotation?: boolean,
    scaling?: boolean
  ): Promise<void> {
    return this.animationsService.setAnimKey(entity, frame, translation, rotation, scaling);
  }

  async setAnimTime(entity: any, time: number, sequenceId?: number): Promise<void> {
    return this.animationsService.setAnimTime(entity, time, sequenceId);
  }

  // BRUSHES
  async brushAlpha(brush: any, alpha: number): Promise<void> {
    return this.brushesService.brushAlpha(brush, alpha);
  }

  async brushBlend(brush: any, mode: number): Promise<void> {
    return this.brushesService.brushBlend(brush, mode);
  }

  async brushColor(brush: any, red: number, green: number, blue: number): Promise<void> {
    return this.brushesService.brushColor(brush, red, green, blue);
  }

  async brushFx(brush: any, effects: number): Promise<void> {
    return this.brushesService.brushFx(brush, effects);
  }

  async brushShininess(brush: any, shininess: number): Promise<void> {
    return this.brushesService.brushShininess(brush, shininess);
  }

  async brushTexture(brush: any, texture: any, frame: number, index: number): Promise<void> {
    return this.brushesService.brushTexture(brush, texture, frame, index);
  }

  async createBrush(red?: number, green?: number, blue?: number): Promise<any> {
    return this.brushesService.createBrush(red, green, blue);
  }

  async freeBrush(brush: any): Promise<void> {
    return this.brushesService.freeBrush(brush);
  }

  async getBrushTexture(brush: any, index: number): Promise<any> {
    return this.brushesService.getBrushTexture(brush, index);
  }

  async getEntityBrush(entity: any): Promise<any> {
    return this.brushesService.getEntityBrush(entity);
  }

  async getSurfaceBrush(surface: any): Promise<any> {
    return this.brushesService.getSurfaceBrush(surface);
  }

  async loadBrush(filePath: string, modes?: number, scaleU?: number, scaleV?: number): Promise<any> {
    return this.brushesService.loadBrush(filePath, modes, scaleU, scaleV);
  }

  async paintEntity(entity: any, brush: any): Promise<void> {
    return this.brushesService.paintEntity(entity, brush);
  }

  async paintMesh(mesh: any, brush: any): Promise<void> {
    return this.brushesService.paintMesh(mesh, brush);
  }

  async paintSurface(surface: any, brush: any): Promise<void> {
    return this.brushesService.paintSurface(surface, brush);
  }

  // CAMERA
  async cameraClsColor(camera: any, red: number, green: number, blue: number): Promise<void> {
    return this.cameraService.cameraClsColor(camera, red, green, blue);
  }

  async cameraClsMode(camera: any, deleteColorBuffer?: boolean, deleteZBuffer?: boolean) {
    // TODO
  }

  async fogColor(red: number, green: number, blue: number): Promise<void> {
    return this.cameraService.fogColor(red, green, blue);
  }

  async fogMode(mode: any): Promise<void> {
    return this.cameraService.fogMode(mode);
  }

  async fogRange(near: number, far: number): Promise<void> {
    return this.cameraService.fogRange(near, far);
  }

  async fogDensity(value: number): Promise<void> {
    return this.cameraService.fogDensity(value);
  }

  async cameraProject(camera: any, x: number, y: number, z: number): Promise<void> {
    return this.cameraService.cameraProject(camera, x, y, z);
  }

  async cameraProjMode(camera: any, mode: number): Promise<void> {
    return this.cameraService.cameraProjMode(camera, mode);
  }

  async cameraRange(camera: any, near: number, far: number): Promise<void> {
    return this.cameraService.cameraRange(camera, near, far);
  }

  async cameraViewport(camera: any, x: number, y: number, width: number, height: number): Promise<void> {
    return this.cameraService.cameraViewport(camera, x, y, width, height);
  }

  async cameraZoom(camera: any, value: number): Promise<void> {
    return this.cameraService.cameraZoom(camera, value);
  }

  async createCamera(type: CameraType, parent?: GameEntity): Promise<GameEntity> {
    return this.cameraService.createCamera(type, parent);
  }

  async projectedX(): Promise<number> {
    return this.cameraService.projectedX();
  }

  async projectedY(): Promise<number> {
    return this.cameraService.projectedY();
  }

  async projectedZ(): Promise<boolean> {
    return this.cameraService.projectedZ();
  }

  // COLLISIONS
  async clearCollisions(): Promise<void> {
    return this.collisionsService.clearCollisions();
  }

  async collisionEntity(entity: any, index: number): Promise<any> {
    return this.collisionsService.collisionEntity(entity, index);
  }

  async collisionNX(entity: any, index: number): Promise<number> {
    return this.collisionsService.collisionNX(entity, index);
  }

  async collisionNY(entity: any, index: number): Promise<number> {
    return this.collisionsService.collisionNY(entity, index);
  }

  async collisionNZ(entity: any, index: number): Promise<number> {
    return this.collisionsService.collisionNZ(entity, index);
  }

  async collisions(sourceEntity: any, targetEntity: any, method: number, reaction: number): Promise<void> {
    return this.collisionsService.collisions(sourceEntity, targetEntity, method, reaction);
  }

  async collisionSurface(entity: any, index: number): Promise<any> {
    return this.collisionsService.collisionSurface(entity, index);
  }

  async collisionTime(entity: any, index: number): Promise<number> {
    return this.collisionsService.collisionTime(entity, index);
  }

  async collisionTriangle() {
    return this.collisionsService.collisionTriangle();
  }

  async collisionX() {
    return this.collisionsService.collisionX();
  }

  async collisionY() {
    return this.collisionsService.collisionY();
  }

  async collisionZ() {
    return this.collisionsService.collisionZ();
  }

  async countCollisions() {
    return this.collisionsService.countCollisions();
  }

  async entityBox() {
    return this.collisionsService.entityBox();
  }

  async entityCollided() {
    return this.collisionsService.entityCollided();
  }

  async entityRadius() {
    return this.collisionsService.entityRadius();
  }

  async entityType() {
    return this.collisionsService.entityType();
  }

  async getEntityType() {
    return this.collisionsService.getEntityType();
  }

  async meshesIntersect() {
    return this.collisionsService.meshesIntersect();
  }

  async resetEntity() {
    return this.collisionsService.resetEntity();
  }

  // CONTROLS
  async copyEntity(entity: GameEntity, parent?: GameEntity): Promise<GameEntity> {
    return this.controlsService.copyEntity(entity, parent);
  }

  async entityAlpha(entity: GameEntity, alpha: number): Promise<void> {
    return this.controlsService.entityAlpha(entity, alpha);
  }

  async entityAutoFade(entity: GameEntity, near: number, far: number): Promise<void> {
    return this.controlsService.entityAutoFade(entity, near, far);
  }

  async entityBlend(entity: GameEntity, mode: BlendMode): Promise<void> {
    return this.controlsService.entityBlend(entity, mode);
  }

  async entityColor(entity: GameEntity, red: number, green: number, blue: number): Promise<void> {
    return this.controlsService.entityColor(entity, red, green, blue);
  }

  async entityFx() {
    return this.controlsService.entityFx();
  }

  async entityOrder() {
    return this.controlsService.entityOrder();
  }

  async entityParent() {
    return this.controlsService.entityParent();
  }

  async entityShininess() {
    return this.controlsService.entityShininess();
  }

  async entityTexture() {
    return this.controlsService.entityTexture();
  }

  async freeEntity() {
    return this.controlsService.freeEntity();
  }

  async hideEntity() {
    return this.controlsService.hideEntity();
  }

  async showEntity() {
    return this.controlsService.showEntity();
  }

  // COORDINATES
  async alignToVector(entity: any, x: number, y: number, z: number, axis: Axis, tween: number): Promise<void> {
    return this.coordinatesService.alignToVector(entity, x, y, z, axis, tween);
  }

  async moveEntity(entity: any, x: number, y: number, z: number): Promise<void> {
    return this.coordinatesService.moveEntity(entity, x, y, z);
  }

  async pointEntity(sourceEntity: any, targetEntity: any, roll: number): Promise<void> {
    return this.coordinatesService.pointEntity(sourceEntity, targetEntity, roll);
  }

  async positionEntity(
    entity: GameEntity,
    x: number,
    y: number,
    z: number,
    parentCoordinates?: boolean
  ): Promise<void> {
    return this.coordinatesService.positionEntity(entity, x, y, z, parentCoordinates);
  }

  async rotateEntity(entity: Mesh | Camera, pitch: number, yaw: number, roll: number, parentCoordinates?: boolean) {
    return this.coordinatesService.rotateEntity(entity, pitch, yaw, roll, parentCoordinates);
  }

  async scaleEntity(entity: any, x: number, y: number, z: number, parentScale?: boolean): Promise<void> {
    return this.coordinatesService.scaleEntity(entity, x, y, z, parentScale);
  }

  async translateEntity(entity: any, x: number, y: number, z: number, parentAngle?: boolean): Promise<void> {
    return this.coordinatesService.translateEntity(entity, x, y, z, parentAngle);
  }

  async turnEntity(entity: any, pitch: number, yaw: number, roll: number, parentAngle?: boolean): Promise<void> {
    return this.coordinatesService.turnEntity(entity, pitch, yaw, roll, parentAngle);
  }

  async tFormedX(): Promise<number> {
    return this.coordinatesService.tFormedX();
  }

  async tFormedY(): Promise<number> {
    return this.coordinatesService.tFormedY();
  }

  async tFormedZ(): Promise<number> {
    return this.coordinatesService.tFormedZ();
  }

  async tFormNormal(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Promise<void> {
    return this.coordinatesService.tFormNormal(x, y, z, source, target);
  }

  async tFormPoint(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Promise<void> {
    return this.coordinatesService.tFormPoint(x, y, z, source, target);
  }

  async tFormVector(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Promise<void> {
    return this.coordinatesService.tFormVector(x, y, z, source, target);
  }

  // DIVERSE
  async createMirror() {
    return this.diverseService.createMirror();
  }

  async createPivot() {
    return this.diverseService.createPivot();
  }

  async createPlane() {
    return this.diverseService.createPlane();
  }

  async getMatElement() {
    return this.diverseService.getMatElement();
  }

  async loaderMatrix() {
    return this.diverseService.loaderMatrix();
  }

  async trisRendered() {
    return this.diverseService.trisRendered();
  }

  async vectorPitch() {
    return this.diverseService.vectorPitch();
  }

  async vectorYaw() {
    return this.diverseService.vectorYaw();
  }

  // LIGHT AND SHADOW
  async ambientLight(red: number, green: number, blue: number): Promise<void> {
    return this.lightShadowService.ambientLight(red, green, blue);
  }

  async createLight(type?: LightType, parent?: any): Promise<any> {
    return this.lightShadowService.createLight(type, parent);
  }

  async lightColor(light: Light, red: number, green: number, blue: number): Promise<void> {
    return this.lightShadowService.lightColor(light, red, green, blue);
  }

  async lightConeAngles() {
    return this.lightShadowService.lightConeAngles();
  }

  async lightMesh() {
    return this.lightShadowService.lightMesh();
  }

  async lightRange(light: Light, range: number): Promise<void> {
    return this.lightShadowService.lightRange(light, range);
  }

  async createShadowMap() {
    return this.lightShadowService.createShadowMap();
  }

  async freeShadowMap() {
    return this.lightShadowService.freeShadowMap();
  }

  async castShadow() {
    return this.lightShadowService.castShadow();
  }

  async receiveShadows() {
    return this.lightShadowService.receiveShadows();
  }

  async shadowDarkness() {
    return this.lightShadowService.shadowDarkness();
  }

  // MESHES
  async addMesh(source: any, target: any): Promise<any> {
    return this.meshesService.addMesh(source, target);
  }

  async copyMesh(mesh: any, parent?: any): Promise<any> {
    return this.meshesService.copyMesh(mesh, parent);
  }

  async createCone(segments?: number, hasFloor?: boolean, parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createCone(segments, hasFloor, parent);
  }

  async createSphere(segments?: number, parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createSphere(segments, parent);
  }

  async createCube(parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createCube(parent);
  }

  async createCylinder(segments?: number, hasFloor?: boolean, parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createCylinder(segments, hasFloor, parent);
  }

  async createPyramid(baseVertexNumber?: number, parent?: any): Promise<GameEntity> {
    return this.meshesService.createPyramid(baseVertexNumber, parent);
  }

  async createTorus(parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createTorus(parent);
  }

  async createTorusKnot(parent?: GameEntity): Promise<GameEntity> {
    return this.meshesService.createTorusKnot(parent);
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
  ): Promise<void> {
    return this.meshesService.fitMesh(mesh, x, y, z, width, height, depth, uniform);
  }

  async flipMesh(mesh): Promise<void> {
    return this.meshesService.flipMesh(mesh);
  }

  async loadAnimMesh(filePath: string, parent?: any): Promise<any> {
    return this.meshesService.loadAnimMesh(filePath, parent);
  }

  async loadMesh(filePath: string, parent?: any): Promise<any> {
    return this.meshesService.loadMesh(filePath, parent);
  }

  async meshCullBox(
    mesh: any,
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number
  ): Promise<void> {
    return this.meshesService.meshCullBox(mesh, x, y, z, width, height, depth);
  }

  async meshDepth(mesh: any): Promise<number> {
    return this.meshesService.meshDepth(mesh);
  }

  async meshHeight(mesh: any): Promise<number> {
    return this.meshesService.meshHeight(mesh);
  }

  async meshWidth(mesh: any): Promise<number> {
    return this.meshesService.meshWidth(mesh);
  }

  async positionMesh(mesh: Mesh, x: number, y: number, z: number): Promise<void> {
    return this.meshesService.positionMesh(mesh, x, y, z);
  }

  async rotateMesh(mesh: Mesh, pitch: number, yaw: number, roll: number): Promise<void> {
    return this.meshesService.rotateMesh(mesh, pitch, yaw, roll);
  }

  async scaleMesh(mesh: Mesh, scaleX: number, scaleY: number, scaleZ: number): Promise<void> {
    return this.meshesService.scaleMesh(mesh, scaleX, scaleY, scaleZ);
  }

  // PICKING
  async cameraPick(camera: GameEntity, x: number, y: number): Promise<GameEntity> {
    return this.pickingService.cameraPick(camera, x, y);
  }

  async entityPick(entity: GameEntity, distance: number): Promise<GameEntity> {
    return this.pickingService.entityPick(entity, distance);
  }

  async entityPickMode(entity: GameEntity, geometry: PickGeometry, coverOtherObjects?: boolean): Promise<void> {
    return this.pickingService.entityPickMode(entity, geometry);
  }

  async linePick(
    x: number,
    y: number,
    z: number,
    dx: number,
    dy: number,
    dz: number,
    radius?: number
  ): Promise<GameEntity> {
    return this.pickingService.linePick(x, y, z, dx, dy, dz, radius);
  }

  async pickedEntity(): Promise<GameEntity> {
    return this.pickingService.pickedEntity();
  }

  async pickedNX(): Promise<number> {
    return this.pickingService.pickedNX();
  }

  async pickedNY(): Promise<number> {
    return this.pickingService.pickedNY();
  }

  async pickedNZ(): Promise<number> {
    return this.pickingService.pickedNZ();
  }

  async pickedSurface() {
    return this.pickingService.pickedSurface();
  }

  async pickedTime() {
    return this.pickingService.pickedTime();
  }

  async pickedTriangle() {
    return this.pickingService.pickedTriangle();
  }

  async pickedX(): Promise<number> {
    return this.pickingService.pickedX();
  }

  async pickedY(): Promise<number> {
    return this.pickingService.pickedY();
  }

  async pickedZ(): Promise<number> {
    return this.pickingService.pickedZ();
  }

  // SCENE
  async createSkyBox() {
    return this.sceneService.createSkyBox();
  }

  async loadSkyBox() {
    return this.sceneService.loadSkyBox();
  }

  async setGravity() {
    return this.sceneService.setGravity();
  }

  // SCENERY
  async antiAlias(enabled: boolean): Promise<void> {
    return this.sceneryService.antiAlias(enabled);
  }

  async captureWorld(): Promise<void> {
    return this.sceneryService.captureWorld();
  }

  async clearWorld(removeEntities?: boolean, removeBrushes?: boolean, removeTextures?: boolean): Promise<void> {
    return this.sceneryService.clearWorld(removeEntities, removeBrushes, removeTextures);
  }

  async renderWorld(animationStep: number): Promise<void> {
    return this.sceneryService.renderWorld(animationStep);
  }

  async updateWorld(updateSpeed?: number): Promise<void> {
    return this.sceneryService.updateWorld(updateSpeed);
  }

  async wireFrame(enabled: boolean): Promise<void> {
    return this.sceneryService.wireFrame(enabled);
  }

  // SCREEN
  async countGfxModes3d(): Promise<number> {
    return this.screenService.countGfxModes3d();
  }

  async gfxDriver3D(): Promise<boolean> {
    return this.screenService.gfxDriver3D();
  }

  async gfxDriverCaps3D(): Promise<number> {
    return this.screenService.gfxDriverCaps3D();
  }

  async gfxMode3D(mode: number): Promise<boolean> {
    return this.screenService.gfxMode3D(mode);
  }

  async gfxMode3DExists(width: number, height: number, depth: number): Promise<boolean> {
    return this.screenService.gfxMode3DExists(width, height, depth);
  }

  async windowed3D(): Promise<boolean> {
    return this.screenService.windowed3D();
  }

  // SPRITES
  async createSprite(parent?: GameEntity): Promise<GameEntity> {
    return this.spritesService.createSprite(parent);
  }

  async handleSprite(sprite: GameEntity, x: number, y: number): Promise<void> {
    return this.spritesService.handleSprite(sprite, x, y);
  }

  async loadSprite(filePath: string, mode: TextureMode, parent?: any): Promise<GameEntity> {
    return this.spritesService.loadSprite(filePath, mode, parent);
  }

  async rotateSprite(sprite: GameEntity, angle: number): Promise<void> {
    return this.spritesService.rotateSprite(sprite, angle);
  }

  async scaleSprite(sprite: GameEntity, x: number, y: number): Promise<void> {
    return this.spritesService.scaleSprite(sprite, x, y);
  }

  async spriteViewMode(sprite: GameEntity, mode: SpriteViewMode): Promise<void> {
    return this.spritesService.spriteViewMode(sprite, mode);
  }

  // STATUS
  async countChildren(entity: GameEntity): Promise<number> {
    return this.statusService.countChildren(entity);
  }

  async deltaPitch(sourceEntity: GameEntity, targetEntity: GameEntity): Promise<number> {
    return this.statusService.deltaPitch(sourceEntity, targetEntity);
  }

  async deltaYaw(sourceEntity: GameEntity, targetEntity: GameEntity): Promise<number> {
    return this.statusService.deltaYaw(sourceEntity, targetEntity);
  }

  async entityClass(entity: GameEntity): Promise<string> {
    return this.statusService.entityClass(entity);
  }

  async entityDistance(entity1: GameEntity, entity2: GameEntity): Promise<number> {
    return this.statusService.entityDistance(entity1, entity2);
  }

  async entityInView(entity: GameEntity, camera: GameEntity): Promise<boolean> {
    return this.statusService.entityInView(entity, camera);
  }

  async entityName(entity: GameEntity): Promise<string> {
    return this.statusService.entityName(entity);
  }

  async entityPitch(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityPitch(entity, global);
  }

  async entityRoll(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityRoll(entity, global);
  }

  async entityVisible(entity1: GameEntity, entity2: GameEntity): Promise<boolean> {
    return this.statusService.entityVisible(entity1, entity2);
  }

  async entityX(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityX(entity, global);
  }

  async entityY(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityY(entity, global);
  }

  async entityYaw(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityYaw(entity, global);
  }

  async entityZ(entity: GameEntity, global?: boolean): Promise<number> {
    return this.statusService.entityZ(entity, global);
  }

  async findChild(entity: GameEntity, childName: string): Promise<GameEntity | null> {
    return this.statusService.findChild(entity, childName);
  }

  async getChild(entity: GameEntity, index: number): Promise<GameEntity | null> {
    return this.statusService.getChild(entity, index);
  }

  async getParent(entity: GameEntity): Promise<GameEntity> {
    return this.statusService.getParent(entity);
  }

  async nameEntity(entity: GameEntity, name: string): Promise<void> {
    return this.statusService.nameEntity(entity, name);
  }

  // SURFACES
  async addTriangle() {
    return this.surfacesService.addTriangle();
  }

  async addVertex() {
    return this.surfacesService.addVertex();
  }

  async clearSurface() {
    return this.surfacesService.clearSurface();
  }

  async countSurfaces() {
    return this.surfacesService.countSurfaces();
  }

  async countTriangles() {
    return this.surfacesService.countTriangles();
  }

  async countVertices() {
    return this.surfacesService.countVertices();
  }

  async createSurface() {
    return this.surfacesService.createSurface();
  }

  async findSurface() {
    return this.surfacesService.findSurface();
  }

  async getSurface() {
    return this.surfacesService.getSurface();
  }

  async triangleVertex() {
    return this.surfacesService.triangleVertex();
  }

  async updateNormals() {
    return this.surfacesService.updateNormals();
  }

  async vertexAlpha() {
    return this.surfacesService.vertexAlpha();
  }

  async vertexBlue() {
    return this.surfacesService.vertexBlue();
  }

  async vertexColor() {
    return this.surfacesService.vertexColor();
  }

  async vertexCoords() {
    return this.surfacesService.vertexCoords();
  }

  async vertexGreen() {
    return this.surfacesService.vertexGreen();
  }

  async vertexNormal() {
    return this.surfacesService.vertexNormal();
  }

  async vertexNX() {
    return this.surfacesService.vertexNX();
  }

  async vertexNY() {
    return this.surfacesService.vertexNY();
  }

  async vertexNZ() {
    return this.surfacesService.vertexNZ();
  }

  async vertexRed() {
    return this.surfacesService.vertexRed();
  }

  async vertexTexCoords() {
    return this.surfacesService.vertexTexCoords();
  }

  async vertexU() {
    return this.surfacesService.vertexU();
  }

  async vertexV() {
    return this.surfacesService.vertexV();
  }

  async vertexW() {
    return this.surfacesService.vertexW();
  }

  async vertexX() {
    return this.surfacesService.vertexX();
  }

  async vertexY() {
    return this.surfacesService.vertexY();
  }

  async vertexZ() {
    return this.surfacesService.vertexZ();
  }

  // TERRAIN
  async createTerrain(segments: number, parent?: any): Promise<BABYLON.Mesh> {
    return this.terrainService.createTerrain(segments, parent);
  }

  async loadTerrain(filePath: string, parent?: any): Promise<BABYLON.Mesh> {
    return this.terrainService.loadTerrain(filePath, parent);
  }

  async modifyTerrain(
    terrain: BABYLON.Mesh,
    x: number,
    z: number,
    height: number,
    realTimeUpdate?: boolean
  ): Promise<void> {
    return this.terrainService.modifyTerrain(terrain, x, z, height, realTimeUpdate);
  }

  async terrainDetail(terrain: BABYLON.Mesh, detailLevel: number, enableMorphing: boolean): Promise<void> {
    return this.terrainService.terrainDetail(terrain, detailLevel, enableMorphing);
  }

  async terrainHeight(terrain: BABYLON.Mesh, x: number, z: number): Promise<number> {
    return this.terrainService.terrainHeight(terrain, x, z);
  }

  async terrainShading(enableShading: boolean): Promise<void> {
    return this.terrainService.terrainShading(enableShading);
  }

  async terrainSize(terrain: BABYLON.Mesh): Promise<number> {
    return this.terrainService.terrainSize(terrain);
  }

  async terrainX(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    return this.terrainService.terrainX(terrain, x, y, z);
  }

  async terrainY(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    return this.terrainService.terrainY(terrain, x, y, z);
  }

  async terrainZ(terrain: BABYLON.Mesh, x: number, y: number, z: number): Promise<number> {
    return this.terrainService.terrainZ(terrain, x, y, z);
  }

  // TEXTURES
  async activeTextures(): Promise<number> {
    return this.texturesService.activeTextures();
  }

  async clearTextureFilters(): Promise<void> {
    return this.texturesService.clearTextureFilters();
  }

  async createTexture(width: number, height: number, mode?: TextureMode, frames?: number): Promise<BABYLON.Texture> {
    return this.texturesService.createTexture(width, height, mode, frames);
  }

  async freeTexture(texture: BABYLON.Texture): Promise<void> {
    return this.texturesService.freeTexture(texture);
  }

  async loadAnimTexture(
    filePath: string,
    mode: TextureMode,
    width: number,
    height: number,
    startFrame: number,
    totalFrames: number
  ): Promise<BABYLON.Texture> {
    return this.texturesService.loadAnimTexture(filePath, mode, width, height, startFrame, totalFrames);
  }

  async loadTexture(filePath: string, mode: TextureMode): Promise<BABYLON.Texture> {
    return this.texturesService.loadTexture(filePath, mode);
  }

  async positionTexture(texture: BABYLON.Texture, u: number, v: number): Promise<void> {
    return this.texturesService.positionTexture(texture, u, v);
  }

  async rotateTexture(texture: BABYLON.Texture, angle: number): Promise<void> {
    return this.texturesService.rotateTexture(texture, angle);
  }

  async scaleTexture(texture: BABYLON.Texture, u: number, v: number): Promise<void> {
    return this.texturesService.scaleTexture(texture, u, v);
  }

  async setCubeFace(texture: BABYLON.Texture, face: CubeMapFace): Promise<void> {
    return this.texturesService.setCubeFace(texture, face);
  }

  async setCubeMode(texture: BABYLON.Texture, mode: CubeMapMode): Promise<void> {
    return this.texturesService.setCubeMode(texture, mode);
  }

  async textureBlend(texture: BABYLON.Texture, mode: TextureBlendMode): Promise<void> {
    return this.texturesService.textureBlend(texture, mode);
  }

  async textureCoords(texture: BABYLON.Texture, coordinate: boolean): Promise<void> {
    return this.texturesService.textureCoords(texture, coordinate);
  }

  async textureFilter(searchText: string, mode: TextureMode): Promise<void> {
    return this.texturesService.textureFilter(searchText, mode);
  }

  async textureHeight(texture: BABYLON.Texture): Promise<number> {
    return this.texturesService.textureHeight(texture);
  }

  async textureName(texture: BABYLON.Texture): Promise<string> {
    return this.texturesService.textureName(texture);
  }

  async textureWidth(texture: BABYLON.Texture): Promise<number> {
    return this.texturesService.textureWidth(texture);
  }
}
