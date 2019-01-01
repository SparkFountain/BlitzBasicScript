import {Injectable} from '@angular/core';
import {AbstractSyntaxTree} from '../../interfaces/parser/abstract-syntax-tree';
import {BbscriptCode} from '../../interfaces/bbscript-code';
import {GeneralService} from '../general/general.service';
import {CommandsGraphics2dDisplay} from '../commands/graphics2d/display';
import {CommandsGraphics2dGraphics} from '../commands/graphics2d/graphics';
import {CommandsBasicsDiverse} from '../commands/basics/diverse';
import {CommandsGraphics3dCamera} from '../commands/graphics3d/camera';
import {CameraType} from '../../enums/camera/camera-type';
import {CommandsGraphics3dMeshes} from '../commands/graphics3d/meshes';
import {CommandsGraphics3dCoordinates} from '../commands/graphics3d/coordinates';
import {GameStateService} from '../game-state/game-state.service';
import {Observable, of, Subscriber} from 'rxjs';
import Camera = BABYLON.Camera;
import Mesh = BABYLON.Mesh;
import {CommandsGraphics2dPixel} from '../commands/graphics2d/pixel';
import {CommandsBasicsTimeRandom} from '../commands/basics/time-random';
import {CommandsGraphics2dImages} from '../commands/graphics2d/images';
import {CommandsGraphics3dLightShadow} from '../commands/graphics3d/light-shadow';
import Light = BABYLON.Light;

@Injectable({
  providedIn: 'root'
})
export class CodeGenerator {
  constructor(
    private gameState: GameStateService,
    private generalService: GeneralService,
    private commandsGraphics2dDisplay: CommandsGraphics2dDisplay,
    private commandsGraphics2dGraphics: CommandsGraphics2dGraphics,
    private commandsGraphics2dImages: CommandsGraphics2dImages,
    private commandsGraphics2dPixel: CommandsGraphics2dPixel,
    private commandsGraphics3dCamera: CommandsGraphics3dCamera,
    private commandsGraphics3dCoordinates: CommandsGraphics3dCoordinates,
    private commandsGraphics3dLightShadow: CommandsGraphics3dLightShadow,
    private commandsGraphics3dMeshes: CommandsGraphics3dMeshes,
    private commandsBasicsDiverse: CommandsBasicsDiverse,
    private commandsBasicsTimeRandom: CommandsBasicsTimeRandom
  ) {

  }

  createTargetCode(abstractSyntaxTree: AbstractSyntaxTree): BbscriptCode {
    return null;
  }

  getFakeTargetCode(): BbscriptCode {
    return {
      globals: [],
      statements: [
        //TODO wait with target code execution until all services are initialized

        this.commandsGraphics2dDisplay.graphics(800, 600),
        //this.commandsGraphics2dGraphics.cameraClsColor(255,0,0),  //TODO wrong implementation, fix
        this.generalService.assign({
          variable: 'i',
          type: 'global',
          expression: {
            value: of(42)
          }
        }),

        //CAMERA
        this.generalService.assign({
          variable: 'camera',
          type: 'global',
          expression: {
            value: this.commandsGraphics3dCamera.createCamera(CameraType.FREE)
          }
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('camera').subscribe((camera: Camera) => {
            this.commandsGraphics3dCoordinates.positionEntity(camera, 0, 1, -10).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('camera').subscribe((camera: Camera) => {
            this.commandsGraphics3dCamera.cameraClsColor(camera, 50, 200, 240).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        }),

        //LIGHT
        this.generalService.assign({
          variable: 'light',
          type: 'global',
          expression: {
            value: this.commandsGraphics3dLightShadow.createLight(1)
          }
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('light').subscribe((light: Light) => {
            this.commandsGraphics3dLightShadow.lightColor(light, 255, 255, 0).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        }),

        //PRIMITIVE MESH
        this.generalService.assign({
          variable: 'cone',
          type: 'global',
          expression: {
            value: this.commandsGraphics3dMeshes.createTorusKnot()
          }
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('cone').subscribe((cone: Mesh) => {
            this.commandsGraphics3dCoordinates.positionEntity(cone, 0, 1, 5).subscribe((done) => {
              observer.next();
              observer.complete();
            });
          });
        }),

        this.commandsGraphics3dLightShadow.ambientLight(128, 200, 50),

        this.commandsGraphics2dGraphics.color(255, 0, 0),
        this.commandsGraphics2dGraphics.rect(20, 20, 100, 50, true),

        this.commandsBasicsTimeRandom.delay(2000),

        this.commandsGraphics2dGraphics.oval(50, 200, 20, 40, false),
        this.commandsGraphics2dGraphics.line(300, 40, 350, 120),

        this.commandsGraphics2dGraphics.color(255, 255, 0),
        this.commandsGraphics2dPixel.plot(200, 200),

        //IMAGE
        this.generalService.assign({
          variable: 'image',
          type: 'global',
          expression: {
            value: this.commandsGraphics2dImages.loadImage('/assets/gfx/bbscript-logo.png')
          }
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('image').subscribe((image: HTMLImageElement) => {
            this.commandsGraphics2dImages.drawImage(image, 0, 0).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        })

        /*this.generalService.forToNext({
          assignment: {
            variable: 'i',
            expression: 10
          },
          limit: 10,
          increment: 1,
          statements: []
        }),

        this.commandService.basics.diverse.appTitle('Carribico')*/
      ],
      mainLoop: [
        //this.commandsBasicsDiverse.debugLog('Hello World' + new Date().getTime())
      ],
      functions: [],
      types: []
    };
  }
}
