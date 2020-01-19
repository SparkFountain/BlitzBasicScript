import { Injectable } from "@angular/core";
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
import { Observable } from 'rxjs';
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
  constructor(private animationsService: CommandsGraphics3dAnimationsService,
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
  ) { }

  // ANIMATIONS
  addAnimSeq(entity: any, duration: number): number {
    return this.animationsService.addAnimSeq(entity, duration);
  }

  animate(entity: any, mode?: number, speed?: number, sequenceId?: number, transition?: number): void {
    return this.animationsService.animate(entity, mode, speed, sequenceId, transition);
  }

  animating(entity: any): boolean {
    return this.animationsService.animating(entity);
  }

  animLength(entity: any): number {
    return this.animationsService.animLength(entity);
  }

  animSeq(entity: any): number {
    return this.animationsService.animSeq(entity);
  }

  animTime(entity: any): number {
    return this.animationsService.animTime(entity);
  }

  extractAnimSeq(entity: any, start: number, end: number, animSeq?: number): number {
    return this.animationsService.extractAnimSeq(entity, start, end, animSeq);
  }

  loadAnimSeq(entity: any, filePath: string): number {
    return this.animationsService.loadAnimSeq(entity, filePath);
  }

  setAnimKey(entity: any, frame: number, translation?: boolean, rotation?: boolean, scaling?: boolean): void {
    return this.animationsService.setAnimKey(entity, frame, translation, rotation, scaling);
  }

  setAnimTime(entity: any, time: number, sequenceId?: number): void {
    return this.animationsService.setAnimTime(entity, time, sequenceId);
  }

  // BRUSHES
  brushAlpha(brush: any, alpha: number): void {
    return this.brushesService.brushAlpha(brush, alpha);
  }

  brushBlend(brush: any, mode: number): void {
    return this.brushesService.brushBlend(brush, mode);
  }

  brushColor(brush: any, red: number, green: number, blue: number): void {
    return this.brushesService.brushColor(brush, red, green, blue);
  }

  brushFx(brush: any, effects: number): void {
    return this.brushesService.brushFx(brush, effects);
  }

  brushShininess(brush: any, shininess: number): void {
    return this.brushesService.brushShininess(brush, shininess);
  }

  brushTexture(brush: any, texture: any, frame: number, index: number): void {
    return this.brushesService.brushTexture(brush, texture, frame, index);
  }

  createBrush(red?: number, green?: number, blue?: number): any {
    return this.brushesService.createBrush(red, green, blue);
  }

  freeBrush(brush: any): void {
    return this.brushesService.freeBrush(brush);
  }

  getBrushTexture(brush: any, index: number): any {
    return this.brushesService.getBrushTexture(brush, index);
  }

  getEntityBrush(entity: any): any {
    return this.brushesService.getEntityBrush(entity);
  }

  getSurfaceBrush(surface: any): any {
    return this.brushesService.getSurfaceBrush(surface);
  }

  loadBrush(filePath: string, modes?: number, scaleU?: number, scaleV?: number) {
    return this.brushesService.loadBrush(filePath, modes, scaleU, scaleV);
  }

  paintEntity(entity: any, brush: any): void {
    return this.brushesService.paintEntity(entity, brush);
  }

  paintMesh(mesh: any, brush: any): void {
    return this.brushesService.paintMesh(mesh, brush);
  }

  paintSurface(surface: any, brush: any): void {
    return this.brushesService.paintSurface(surface, brush);
  }

  // CAMERA
  cameraClsColor(camera: any, red: number, green: number, blue: number): Observable<void> {
    return this.cameraService.cameraClsColor(camera, red, green, blue);
  }

  cameraClsMode(camera: any, deleteColorBuffer?: boolean, deleteZBuffer?: boolean) {
    // TODO
  }

  fogColor(red: number, green: number, blue: number): Observable<void> {
    return this.cameraService.fogColor(red, green, blue);
  }

  fogMode(mode): Observable<void> {
    return this.cameraService.fogMode(mode);
  }

  fogRange(near: number, far: number): Observable<void> {
    return this.cameraService.fogRange(near, far);
  }

  fogDensity(value: number): Observable<void> {
    return this.cameraService.fogDensity(value);
  }

  cameraProject(camera: any, x: number, y: number, z: number): void {
    return this.cameraService.cameraProject(camera, x, y, z);
  }

  cameraProjMode(camera: any, mode: number): void {
    return this.cameraService.cameraProjMode(camera, mode);
  }

  cameraRange(camera: any, near: number, far: number): void {
    return this.cameraService.cameraRange(camera, near, far);
  }

  cameraViewport(camera: any, x: number, y: number, width: number, height: number): void {
    return this.cameraService.cameraViewport(camera, x, y, width, height);
  }

  cameraZoom(camera: any, value: number): void {
    return this.cameraService.cameraZoom(camera, value);
  }

  createCamera(type: CameraType, parent?: GameEntity): Observable<GameEntity> {
    return this.cameraService.createCamera(type, parent);
  }

  projectedX(): Observable<number> {
    return this.cameraService.projectedX();
  }

  projectedY(): Observable<number> {
    return this.cameraService.projectedY();
  }

  projectedZ(): Observable<boolean> {
    return this.cameraService.projectedZ();
  }

  // COLLISIONS
  clearCollisions(): Observable<void> {
    return this.collisionsService.clearCollisions();
  }

  collisionEntity(entity: any, index: number): any {
    return this.collisionsService.collisionEntity(entity, index);
  }

  collisionNX(entity: any, index: number): number {
    return this.collisionsService.collisionNX(entity, index);
  }

  collisionNY(entity: any, index: number): number {
    return this.collisionsService.collisionNY(entity, index);
  }

  collisionNZ(entity: any, index: number): number {
    return this.collisionsService.collisionNZ(entity, index);
  }

  collisions(sourceEntity: any, targetEntity: any, method: number, reaction: number): void {
    return this.collisionsService.collisions(sourceEntity, targetEntity, method, reaction);
  }

  collisionSurface(entity: any, index: number): any {
    return this.collisionsService.collisionSurface(entity, index);
  }

  collisionTime(entity: any, index: number): number {
    return this.collisionsService.collisionTime(entity, index);
  }

  collisionTriangle() {
    return this.collisionsService.collisionTriangle();
  }

  collisionX() {
    return this.collisionsService.collisionX();
  }

  collisionY() {
    return this.collisionsService.collisionY();
  }

  collisionZ() {
    return this.collisionsService.collisionZ();
  }

  countCollisions() {
    return this.collisionsService.countCollisions();
  }

  entityBox() {
    return this.collisionsService.entityBox();
  }

  entityCollided() {
    return this.collisionsService.entityCollided();
  }

  entityRadius() {
    return this.collisionsService.entityRadius();
  }

  entityType() {
    return this.collisionsService.entityType();
  }

  getEntityType() {
    return this.collisionsService.getEntityType();
  }

  meshesIntersect() {
    return this.collisionsService.meshesIntersect();
  }

  resetEntity() {
    return this.collisionsService.resetEntity();
  }

  // CONTROLS
  copyEntity(entity: GameEntity, parent?: GameEntity): Observable<GameEntity> {
    return this.controlsService.copyEntity(entity, parent);
  }

  entityAlpha(entity: GameEntity, alpha: number): Observable<void> {
    return this.controlsService.entityAlpha(entity, alpha);
  }

  entityAutoFade(entity: GameEntity, near: number, far: number): Observable<void> {
    return this.controlsService.entityAutoFade(entity, near, far);
  }

  entityBlend(entity: GameEntity, mode: BlendMode): Observable<void> {
    return this.controlsService.entityBlend(entity, mode);
  }

  entityColor(entity: GameEntity, red: number, green: number, blue: number): Observable<void> {
    return this.controlsService.entityColor(entity, red, green, blue);
  }

  entityFx() {
    return this.controlsService.entityFx();
  }

  entityOrder() {
    return this.controlsService.entityOrder();
  }

  entityParent() {
    return this.controlsService.entityParent();
  }

  entityShininess() {
    return this.controlsService.entityShininess();
  }

  entityTexture() {
    return this.controlsService.entityTexture();
  }

  freeEntity() {
    return this.controlsService.freeEntity();
  }

  hideEntity() {
    return this.controlsService.hideEntity();
  }

  showEntity() {
    return this.controlsService.showEntity();
  }

  // COORDINATES
  alignToVector(entity: any, x: number, y: number, z: number, axis: Axis, tween: number): Observable<void> {
    return this.coordinatesService.alignToVector(entity, x, y, z, axis, tween);
  }

  moveEntity(entity: any, x: number, y: number, z: number): Observable<void> {
    return this.coordinatesService.moveEntity(entity, x, y, z);
  }

  pointEntity(sourceEntity: any, targetEntity: any, roll: number): Observable<void> {
    return this.coordinatesService.pointEntity(sourceEntity, targetEntity, roll);
  }

  positionEntity(entity: GameEntity, x: number, y: number, z: number, parentCoordinates?: boolean): Observable<void> {
    return this.coordinatesService.positionEntity(entity, x, y, z, parentCoordinates);
  }

  rotateEntity(entity: Mesh | Camera, pitch: number, yaw: number, roll: number, parentCoordinates?: boolean) {
    return this.coordinatesService.rotateEntity(entity, pitch, yaw, roll, parentCoordinates);
  }

  scaleEntity(entity: any, x: number, y: number, z: number, parentScale?: boolean): Observable<void> {
    return this.coordinatesService.scaleEntity(entity, x, y, z, parentScale);
  }

  translateEntity(entity: any, x: number, y: number, z: number, parentAngle?: boolean): Observable<void> {
    return this.coordinatesService.translateEntity(entity, x, y, z, parentAngle);
  }

  turnEntity(entity: any, pitch: number, yaw: number, roll: number, parentAngle?: boolean): Observable<void> {
    return this.coordinatesService.turnEntity(entity, pitch, yaw, roll, parentAngle);
  }

  tFormedX(): Observable<number> {
    return this.coordinatesService.tFormedX();
  }

  tFormedY(): Observable<number> {
    return this.coordinatesService.tFormedY();
  }

  tFormedZ(): Observable<number> {
    return this.coordinatesService.tFormedZ();
  }

  tFormNormal(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return this.coordinatesService.tFormNormal(x, y, z, source, target);
  }

  tFormPoint(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return this.coordinatesService.tFormPoint(x, y, z, source, target);
  }

  tFormVector(x: number, y: number, z: number, source: GameEntity, target: GameEntity): Observable<void> {
    return this.coordinatesService.tFormVector(x, y, z, source, target);
  }

  // DIVERSE
  createMirror() {
    return this.diverseService.createMirror();
  }

  createPivot() {
    return this.diverseService.createPivot();
  }

  createPlane() {
    return this.diverseService.createPlane();
  }

  getMatElement() {
    return this.diverseService.getMatElement();
  }

  loaderMatrix() {
    return this.diverseService.loaderMatrix();
  }

  trisRendered() {
    return this.diverseService.trisRendered();
  }

  vectorPitch() {
    return this.diverseService.vectorPitch();
  }

  vectorYaw() {
    return this.diverseService.vectorYaw();
  }

  // LIGHT AND SHADOW
  ambientLight(red: number, green: number, blue: number): Observable<void> {
    return this.lightShadowService.ambientLight(red, green, blue);
  }

  createLight(type?: LightType, parent?: any): Observable<any> {
    return this.lightShadowService.createLight(type, parent);
  }

  lightColor(light: Light, red: number, green: number, blue: number): Observable<void> {
    return this.lightShadowService.lightColor(light, red, green, blue);
  }

  lightConeAngles() {
    return this.lightShadowService.lightConeAngles();
  }

  lightMesh() {
    return this.lightShadowService.lightMesh();
  }

  lightRange(light: Light, range: number): Observable<void> {
    return this.lightShadowService.lightRange(light, range);
  }

  createShadowMap() {
    return this.lightShadowService.createShadowMap();
  }

  deleteShadowMap() {
    return this.lightShadowService.deleteShadowMap();
  }

  castShadow() {
    return this.lightShadowService.castShadow();
  }

  receiveShadows() {
    return this.lightShadowService.receiveShadows();
  }

  shadowDarkness() {
    return this.lightShadowService.shadowDarkness();
  }

  // MESHES
  addMesh(source: any, target: any): Observable<any> {
    return this.meshesService.addMesh(source, target);
  }

  copyMesh(mesh: any, parent?: any): Observable<any> {
    return this.meshesService.copyMesh(mesh, parent);
  }

  createCone(segments?: number, hasFloor?: boolean, parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createCone(segments, hasFloor, parent);
  }

  createSphere(segments?: number, parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createSphere(segments, parent);
  }

  createCube(parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createCube(parent);
  }

  createCylinder(segments?: number, hasFloor?: boolean, parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createCylinder(segments, hasFloor, parent);
  }

  createPyramid(baseVertexNumber?: number, parent?: any): Observable<GameEntity> {
    return this.meshesService.createPyramid(baseVertexNumber, parent);
  }

  createTorus(parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createTorus(parent);
  }

  createTorusKnot(parent?: GameEntity): Observable<GameEntity> {
    return this.meshesService.createTorusKnot(parent);
  }

  fitMesh(mesh: any, x: number, y: number, z: number, width: number, height: number, depth: number, uniform: boolean): void {
    return this.meshesService.fitMesh(mesh, x, y, z, width, height, depth, uniform);
  }

  flipMesh(mesh): void {
    return this.meshesService.flipMesh(mesh);
  }

  loadAnimMesh(filePath: string, parent?: any): any {
    return this.meshesService.loadAnimMesh(filePath, parent);
  }

  loadMesh(filePath: string, parent?: any): any {
    return this.meshesService.loadMesh(filePath, parent);
  }

  meshCullBox(mesh: any, x: number, y: number, z: number, width: number, height: number, depth: number): void {
    return this.meshesService.meshCullBox(mesh, x, y, z, width, height, depth);
  }

  meshDepth(mesh: any): Observable<number> {
    return this.meshesService.meshDepth(mesh);
  }

  meshHeight(mesh: any): Observable<number> {
    return this.meshesService.meshHeight(mesh);
  }

  meshWidth(mesh: any): Observable<number> {
    return this.meshesService.meshWidth(mesh);
  }

  positionMesh(mesh: Mesh, x: number, y: number, z: number): Observable<void> {
    return this.meshesService.positionMesh(mesh, x, y, z);
  }

  rotateMesh(mesh: Mesh, pitch: number, yaw: number, roll: number): Observable<void> {
    return this.meshesService.rotateMesh(mesh, pitch, yaw, roll);
  }

  scaleMesh(mesh: Mesh, scaleX: number, scaleY: number, scaleZ: number): Observable<void> {
    return this.meshesService.scaleMesh(mesh, scaleX, scaleY, scaleZ);
  }

  // PICKING
  cameraPick(camera: GameEntity, x: number, y: number): Observable<GameEntity> {
    return this.pickingService.cameraPick(camera, x, y);
  }

  entityPick(entity: GameEntity, distance: number): Observable<GameEntity> {
    return this.pickingService.entityPick(entity, distance);
  }

  entityPickMode(entity: GameEntity, geometry: PickGeometry, coverOtherObjects?: boolean): Observable<void> {
    return this.pickingService.entityPickMode(entity, geometry);
  }

  linePick(x: number, y: number, z: number, dx: number, dy: number, dz: number, radius?: number): Observable<GameEntity> {
    return this.pickingService.linePick(x, y, z, dx, dy, dz, radius);
  }

  pickedEntity(): Observable<GameEntity> {
    return this.pickingService.pickedEntity();
  }

  pickedNX(): Observable<number> {
    return this.pickingService.pickedNX();
  }

  pickedNY(): Observable<number> {
    return this.pickingService.pickedNY();
  }

  pickedNZ(): Observable<number> {
    return this.pickingService.pickedNZ();
  }

  pickedSurface() {
    return this.pickingService.pickedSurface();
  }

  pickedTime() {
    return this.pickingService.pickedTime();
  }

  pickedTriangle() {
    return this.pickingService.pickedTriangle();
  }

  pickedX(): Observable<number> {
    return this.pickingService.pickedX();
  }

  pickedY(): Observable<number> {
    return this.pickingService.pickedY();
  }

  pickedZ(): Observable<number> {
    return this.pickingService.pickedZ();
  }

  // SCENE
  createSkyBox() {
    return this.sceneService.createSkyBox();
  }

  loadSkyBox() {
    return this.sceneService.loadSkyBox();
  }

  setGravity() {
    return this.sceneService.setGravity();
  }

  // SCENERY
  antiAlias(enabled: boolean): Observable<void> {
    return this.sceneryService.antiAlias(enabled);
  }

  captureWorld(): Observable<void> {
    return this.sceneryService.captureWorld();
  }

  clearWorld(removeEntities?: boolean, removeBrushes?: boolean, removeTextures?: boolean): Observable<void> {
    return this.sceneryService.clearWorld(removeEntities, removeBrushes, removeTextures);
  }

  renderWorld(animationStep: number): Observable<void> {
    return this.sceneryService.renderWorld(animationStep);
  }

  updateWorld(updateSpeed?: number): Observable<void> {
    return this.sceneryService.updateWorld(updateSpeed);
  }

  wireFrame(enabled: boolean): Observable<void> {
    return this.sceneryService.wireFrame(enabled);
  }

  // SCREEN
  countGfxModes3d(): Observable<number> {
    return this.screenService.countGfxModes3d();
  }

  gfxDriver3D(): Observable<boolean> {
    return this.screenService.gfxDriver3D();
  }

  gfxDriverCaps3D(): Observable<number> {
    return this.screenService.gfxDriverCaps3D();
  }

  gfxMode3D(mode: number): Observable<boolean> {
    return this.screenService.gfxMode3D(mode);
  }

  gfxMode3DExists(width: number, height: number, depth: number): Observable<boolean> {
    return this.screenService.gfxMode3DExists(width, height, depth);
  }

  windowed3D(): Observable<boolean> {
    return this.screenService.windowed3D();
  }

  // SPRITES
  createSprite(parent?: GameEntity): Observable<GameEntity> {
    return this.spritesService.createSprite(parent);
  }

  handleSprite(sprite: GameEntity, x: number, y: number): Observable<void> {
    return this.spritesService.handleSprite(sprite, x, y);
  }

  loadSprite(filePath: string, mode: TextureMode, parent?: any): Observable<GameEntity> {
    return this.spritesService.loadSprite(filePath, mode, parent);
  }

  rotateSprite(sprite: GameEntity, angle: number): Observable<void> {
    return this.spritesService.rotateSprite(sprite, angle);
  }

  scaleSprite(sprite: GameEntity, x: number, y: number): Observable<void> {
    return this.spritesService.scaleSprite(sprite, x, y);
  }

  spriteViewMode(sprite: GameEntity, mode: SpriteViewMode): Observable<void> {
    return this.spritesService.spriteViewMode(sprite, mode);
  }

  // STATUS
  countChildren(entity: GameEntity): Observable<number> {
    return this.statusService.countChildren(entity);
  }

  deltaPitch(sourceEntity: GameEntity, targetEntity: GameEntity): Observable<number> {
    return this.statusService.deltaPitch(sourceEntity, targetEntity);
  }

  deltaYaw(sourceEntity: GameEntity, targetEntity: GameEntity): Observable<number> {
    return this.statusService.deltaYaw(sourceEntity, targetEntity);
  }

  entityClass(entity: GameEntity): string {
    return this.statusService.entityClass(entity);
  }

  entityDistance(entity1: GameEntity, entity2: GameEntity): Observable<number> {
    return this.statusService.entityDistance(entity1, entity2);
  }

  entityInView(entity: GameEntity, camera: GameEntity): Observable<boolean> {
    return this.statusService.entityInView(entity, camera);
  }

  entityName(entity: GameEntity): Observable<string> {
    return this.statusService.entityName(entity);
  }

  entityPitch(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityPitch(entity, global);
  }

  entityRoll(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityRoll(entity, global);
  }

  entityVisible(entity1: GameEntity, entity2: GameEntity): Observable<boolean> {
    return this.statusService.entityVisible(entity1, entity2);
  }

  entityX(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityX(entity, global);
  }

  entityY(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityY(entity, global);
  }

  entityYaw(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityYaw(entity, global);
  }

  entityZ(entity: GameEntity, global?: boolean): Observable<number> {
    return this.statusService.entityZ(entity, global);
  }

  findChild(entity: GameEntity, childName: string): Observable<GameEntity | null> {
    return this.statusService.findChild(entity, childName);
  }

  getChild(entity: GameEntity, index: number): Observable<GameEntity | null> {
    return this.statusService.getChild(entity, index);
  }

  getParent(entity: GameEntity): Observable<GameEntity> {
    return this.statusService.getParent(entity);
  }

  nameEntity(entity: GameEntity, name: string): Observable<void> {
    return this.statusService.nameEntity(entity, name);
  }

  // SURFACES
  addTriangle() {
    return this.surfacesService.addTriangle();
  }

  addVertex() {
    return this.surfacesService.addVertex();
  }

  clearSurface() {
    return this.surfacesService.clearSurface();
  }

  countSurfaces() {
    return this.surfacesService.countSurfaces();
  }

  countTriangles() {
    return this.surfacesService.countTriangles();
  }

  countVertices() {
    return this.surfacesService.countVertices();
  }

  createSurface() {
    return this.surfacesService.createSurface();
  }

  findSurface() {
    return this.surfacesService.findSurface();
  }

  getSurface() {
    return this.surfacesService.getSurface();
  }

  triangleVertex() {
    return this.surfacesService.triangleVertex();
  }

  updateNormals() {
    return this.surfacesService.updateNormals();
  }

  vertexAlpha() {
    return this.surfacesService.vertexAlpha();
  }

  vertexBlue() {
    return this.surfacesService.vertexBlue();
  }

  vertexColor() {
    return this.surfacesService.vertexColor();
  }

  vertexCoords() {
    return this.surfacesService.vertexCoords();
  }

  vertexGreen() {
    return this.surfacesService.vertexGreen();
  }

  vertexNormal() {
    return this.surfacesService.vertexNormal();
  }

  vertexNX() {
    return this.surfacesService.vertexNX();
  }

  vertexNY() {
    return this.surfacesService.vertexNY();
  }

  vertexNZ() {
    return this.surfacesService.vertexNZ();
  }

  vertexRed() {
    return this.surfacesService.vertexRed();
  }

  vertexTexCoords() {
    return this.surfacesService.vertexTexCoords();
  }

  vertexU() {
    return this.surfacesService.vertexU();
  }

  vertexV() {
    return this.surfacesService.vertexV();
  }

  vertexW() {
    return this.surfacesService.vertexW();
  }

  vertexX() {
    return this.surfacesService.vertexX();
  }

  vertexY() {
    return this.surfacesService.vertexY();
  }

  vertexZ() {
    return this.surfacesService.vertexZ();
  }

  // TERRAIN
  createTerrain(segments: number, parent?: any): Observable<BABYLON.Mesh> {
    return this.terrainService.createTerrain(segments, parent);
  }

  loadTerrain(filePath: string, parent?: any): Observable<BABYLON.Mesh> {
    return this.terrainService.loadTerrain(filePath, parent);
  }

  modifyTerrain(terrain: BABYLON.Mesh, x: number, z: number, height: number, realTimeUpdate?: boolean): Observable<void> {
    return this.terrainService.modifyTerrain(terrain, x, z, height, realTimeUpdate);
  }

  terrainDetail(terrain: BABYLON.Mesh, detailLevel: number, enableMorphing: boolean): Observable<void> {
    return this.terrainService.terrainDetail(terrain, detailLevel, enableMorphing);
  }

  terrainHeight(terrain: BABYLON.Mesh, x: number, z: number): Observable<number> {
    return this.terrainService.terrainHeight(terrain, x, z);
  }

  terrainShading(enableShading: boolean): Observable<void> {
    return this.terrainService.terrainShading(enableShading);
  }

  terrainSize(terrain: BABYLON.Mesh): Observable<number> {
    return this.terrainService.terrainSize(terrain);
  }

  terrainX(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
    return this.terrainService.terrainX(terrain, x, y, z);
  }

  terrainY(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
    return this.terrainService.terrainY(terrain, x, y, z);
  }

  terrainZ(terrain: BABYLON.Mesh, x: number, y: number, z: number): Observable<number> {
    return this.terrainService.terrainZ(terrain, x, y, z);
  }

  // TEXTURES
  activeTextures(): Observable<number> {
    return this.texturesService.activeTextures();
  }

  clearTextureFilters(): Observable<void> {
    return this.texturesService.clearTextureFilters();
  }

  createTexture(width: number, height: number, mode?: TextureMode, frames?: number): Observable<BABYLON.Texture> {
    return this.texturesService.createTexture(width, height, mode, frames);
  }

  freeTexture(texture: BABYLON.Texture): Observable<void> {
    return this.texturesService.freeTexture(texture);
  }

  loadAnimTexture(filePath: string, mode: TextureMode, width: number, height: number, startFrame: number, totalFrames: number): Observable<BABYLON.Texture> {
    return this.texturesService.loadAnimTexture(filePath, mode, width, height, startFrame, totalFrames);
  }

  loadTexture(filePath: string, mode: TextureMode): Observable<BABYLON.Texture> {
    return this.texturesService.loadTexture(filePath, mode);
  }

  positionTexture(texture: BABYLON.Texture, u: number, v: number): Observable<void> {
    return this.texturesService.positionTexture(texture, u, v);
  }

  rotateTexture(texture: BABYLON.Texture, angle: number): Observable<void> {
    return this.texturesService.rotateTexture(texture, angle);
  }

  scaleTexture(texture: BABYLON.Texture, u: number, v: number): Observable<void> {
    return this.texturesService.scaleTexture(texture, u, v);
  }

  setCubeFace(texture: BABYLON.Texture, face: CubeMapFace): Observable<void> {
    return this.texturesService.setCubeFace(texture, face);
  }

  setCubeMode(texture: BABYLON.Texture, mode: CubeMapMode): Observable<void> {
    return this.texturesService.setCubeMode(texture, mode);
  }

  textureBlend(texture: BABYLON.Texture, mode: TextureBlendMode): Observable<void> {
    return this.texturesService.textureBlend(texture, mode);
  }

  textureCoords(texture: BABYLON.Texture, coordinate: boolean): Observable<void> {
    return this.texturesService.textureCoords(texture, coordinate);
  }

  textureFilter(searchText: string, mode: TextureMode): Observable<void> {
    return this.texturesService.textureFilter(searchText, mode);
  }

  textureHeight(texture: BABYLON.Texture): Observable<number> {
    return this.texturesService.textureHeight(texture);
  }

  textureName(texture: BABYLON.Texture): Observable<string> {
    return this.texturesService.textureName(texture);
  }

  textureWidth(texture: BABYLON.Texture): Observable<number> {
    return this.texturesService.textureWidth(texture);
  }
}
