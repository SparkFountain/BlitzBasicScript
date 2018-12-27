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

@Injectable({
  providedIn: 'root'
})
export class CodeGenerator {
  constructor(
    private gameState: GameStateService,
    private generalService: GeneralService,
    private commandsGraphics2dDisplay: CommandsGraphics2dDisplay,
    private commandsGraphics2dGraphics: CommandsGraphics2dGraphics,
    private commandsGraphics3dCamera: CommandsGraphics3dCamera,
    private commandsGraphics3dCoordinates: CommandsGraphics3dCoordinates,
    private commandsGraphics3dMeshes: CommandsGraphics3dMeshes,
    private commandsBasicsDiverse: CommandsBasicsDiverse
  ) {

  }

  createTargetCode(abstractSyntaxTree: AbstractSyntaxTree): BbscriptCode {
    return null;
  }

  getFakeTargetCode(): BbscriptCode {
    return {
      globals: [],
      statements: [
        this.commandsGraphics2dDisplay.graphics(800, 600),
        //this.commandsGraphics2dGraphics.cameraClsColor(255,0,0),  //TODO wrong implementation, fix
        this.generalService.assign({
          variable: 'i',
          type: 'global',
          expression: {
            value: of(42)
          }
        }),

        this.generalService.assign({
          variable: 'camera',
          type: 'global',
          expression: {
            value: this.commandsGraphics3dCamera.createCamera(CameraType.FREE)
          }
        }),

        new Observable((observer) => {
          this.gameState.getGlobalAsync('camera').subscribe((camera: Camera) => {
            this.commandsGraphics3dCoordinates.positionEntity(camera, 0, 1, -10).subscribe((done) => {
              observer.next();
              observer.complete();
            });

          });
        }),

        this.generalService.assign({
          variable: 'cone',
          type: 'global',
          expression: {
            value: this.commandsGraphics3dMeshes.createCone()
          }
        }),
        new Observable((observer) => {
          this.gameState.getGlobalAsync('cone').subscribe((cone: Mesh) => {
            this.commandsGraphics3dCoordinates.positionEntity(cone, 0, 1, 5).subscribe((done) => {
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
        this.commandsBasicsDiverse.debugLog('Hello World' + new Date().getTime())
      ],
      functions: [],
      types: []
    };
  }
}
