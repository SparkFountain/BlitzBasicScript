import { LexerToken } from '../../interfaces/lexer-token';
import { LexerTokenCategory } from '../../enums/lexer/lexer-token-category';
import { Injectable } from '@angular/core';
import { CommandsBasicsDiverseService } from '../commands/basics/diverse.service';
import { CommandsBasicsMathsService } from '../commands/basics/maths.service';
import { CommandsBasicsStringsService } from '../commands/basics/strings.service';
import { CommandsBasicsTimeRandomService } from '../commands/basics/time-random.service';
import { CommandsDataBankService } from '../commands/data/bank.service';
import { CommandsDataFileSystemService } from '../commands/data/file-system.service';
import { CommandsGraphics2dDisplayService } from '../commands/graphics2d/display.service';
import { CommandsGraphics2dGraphicsService } from '../commands/graphics2d/graphics.service';
import { CommandsGraphics2dImagesService } from '../commands/graphics2d/images.service';
import { CommandsGraphics2dMoviesService } from '../commands/graphics2d/movies.service';
import { CommandsGraphics2dPixelService } from '../commands/graphics2d/pixel.service';
import { CommandsGraphics2dTextService } from '../commands/graphics2d/text.service';
import { CommandsGraphics3dAnimationsService } from '../commands/graphics3d/animations.service';
import { CommandsGraphics3dBrushesService } from '../commands/graphics3d/brushes.service';
import { CommandsGraphics3dCameraService } from '../commands/graphics3d/camera.service';
import { CommandsGraphics3dCollisionsService } from '../commands/graphics3d/collisions.service';
import { CommandsGraphics3dControlsService } from '../commands/graphics3d/controls.service';
import { CommandsGraphics3dCoordinatesService } from '../commands/graphics3d/coordinates.service';
import { CommandsGraphics3dDiverseService } from '../commands/graphics3d/diverse.service';
import { CommandsGraphics3dLightShadowService } from '../commands/graphics3d/light-shadow.service';
import { CommandsGraphics3dMeshesService } from '../commands/graphics3d/meshes.service';
import { CommandsGraphics3dPickingService } from '../commands/graphics3d/picking.service';
import { CommandsGraphics3dSceneService } from '../commands/graphics3d/scene.service';
import { CommandsGraphics3dSceneryService } from '../commands/graphics3d/scenery.service';
import { CommandsGraphics3dScreenService } from '../commands/graphics3d/screen.service';
import { CommandsGraphics3dSpritesService } from '../commands/graphics3d/sprites.service';
import { CommandsGraphics3dStatusService } from '../commands/graphics3d/status.service';
import { CommandsGuiEventService } from '../commands/gui/event.service';
import { CommandsGuiGadgetService } from '../commands/gui/gadget.service';
import { CommandsGuiHtmlService } from '../commands/gui/html.service';
import { CommandsGuiIconStripService } from '../commands/gui/icon-strip.service';
import { CommandsGuiListTabberService } from '../commands/gui/list-tabber.service';
import { CommandsGuiMenuService } from '../commands/gui/menu.service';
import { CommandsGuiPanelService } from '../commands/gui/panel.service';
import { CommandsGuiProgressBarService } from '../commands/gui/progress-bar.service';
import { CommandsGuiRequestService } from '../commands/gui/request.service';
import { CommandsGuiSliderService } from '../commands/gui/slider.service';
import { CommandsGuiTextAreaService } from '../commands/gui/text-area.service';
import { CommandsGuiTextFieldService } from '../commands/gui/text-field.service';
import { CommandsGuiToolbarService } from '../commands/gui/toolbar.service';
import { CommandsGuiTreeViewService } from '../commands/gui/tree-view.service';
import { CommandsGuiWindowService } from '../commands/gui/window.service';
import { BBScriptCode } from '../../interfaces/bbscript-code';
import { GeneralService } from '../general/general.service';
import { GameStateService } from '../game-state/game-state.service';
import { ParserState } from '../../enums/parser/parser-state';
import { LanguageService } from '../language/language.service';
import { ApiCommand } from '../../interfaces/api/api-command';
import { Observable, of } from 'rxjs';
import { CameraType } from '../../enums/camera/camera-type';
import { GameEntity } from '../../interfaces/game/entity';
import { GameImage2D } from '../../interfaces/game/image-2d';
import { GameFont } from '../../interfaces/game/font';
import { CommandsGraphics3dSurfacesService } from '../commands/graphics3d/surfaces.service';
import { CommandsGraphics3dTerrainService } from '../commands/graphics3d/terrain.service';
import { CommandsGraphics3dTexturesService } from '../commands/graphics3d/textures.service';
import { CommandsGuiButtonService } from '../commands/gui/button.service';
import { CommandsGuiCanvasService } from '../commands/gui/canvas.service';
import { CommandsGuiDesktopService } from '../commands/gui/desktop.service';
import { CommandsGuiDiverseService } from '../commands/gui/diverse.service';
import { CommandsIOGamepadService } from '../commands/io/gamepad.service';
import { CommandsIOKeyboardService } from '../commands/io/keyboard.service';
import { CommandsIOMouseService } from '../commands/io/mouse.service';
import { CommandsSound3DService } from '../commands/sound/3d.service';
import { CommandsSoundChannelsService } from '../commands/sound/channels.service';
import { CommandsSoundMusicSamplesService } from '../commands/sound/music-samples.service';
import { Camera, Light } from 'babylonjs';

@Injectable({
  providedIn: 'root'
})
export class ParserService {
  static MESSAGE = {
    'ERROR': {
      'DEPRECATED_KEYWORD': {
        EN: 'Deprecated key word',
        DE: 'Veraltetes Schlüsselwort'
      },
      'DEPRECATED_COMMAND': {
        EN: 'Deprecated command',
        DE: 'Veralteter Befehl'
      },
      'INVALID_TOKEN': {
        EN: 'Invalid token',
        DE: 'Ungültiges Token'
      },
      'INVALID_START_TOKEN': {
        EN: 'Invalid start token',
        DE: 'Ungültiges Anfangstoken'
      },
      'ILLEGAL_CONTEXT': {
        EN: 'Illegal token context',
        DE: 'Ungültiger Kontext für dieses Token'
      },
      'VAR_NAME_EXPECTED': {
        EN: 'Expecting a variable name',
        DE: 'Variablenname erwartet'
      },
      'TOO_MANY_PARAMETERS': {
        EN: 'Too many parameters',
        DE: 'Zu viele Parameter angegeben'
      },
      'NOT_ENOUGH_PARAMETERS': {
        EN: 'Not enough parameters',
        DE: 'Zu wenige Parameter angegeben'
      },
      'COMMA_MUST_BE_FOLLOWED_BY_EXPRESSION': {
        EN: 'Comma must be followed by another expression',
        DE: 'Nach dem Komma muss eine weitere Anweisung folgen'
      },
      'MISSING_OPENING_BRACKET': {
        EN: 'Missing opening bracket',
        DE: 'Öffnende Klammer fehlt'
      },
      'NO_MORE_TOKENS_ALLOWED': {
        EN: 'No more tokens allowed after last key word',
        DE: 'Keine weiteren Tokens nach dem letzten Schlüsselwort erlaubt'
      },
      'NO_CONDITION_BLOCK_OPENED': {
        EN: 'No condition block opened',
        DE: 'Kein Bedingungsblock definiert'
      },
      'DUPLICATE_DECLARATION': {
        EN: 'Duplicate Declaration (prohibited)',
        DE: 'Mehrfache Deklaration (verboten)'
      },
      TODO: {
        EN: 'This error message is not implemented yet.',
        DE: 'Diese Fehlermeldung wurde noch nicht implementiert.'
      }
    },
    'INFO': {},
    'WARNING': {}
  };

  individuals: object;
  stack: any[];
  state;
  gameCode: BBScriptCode;

  constructor(
    private generalService: GeneralService,
    private gameState: GameStateService,
    private language: LanguageService,
    private commandsBasicsDiverse: CommandsBasicsDiverseService,
    private commandsBasicsMaths: CommandsBasicsMathsService,
    private commandsBasicsStrings: CommandsBasicsStringsService,
    private commandsBasicsTimeRandom: CommandsBasicsTimeRandomService,
    private commandsDataBank: CommandsDataBankService,
    private commandsDataFileSystem: CommandsDataFileSystemService,
    private commandsGraphics2dDisplay: CommandsGraphics2dDisplayService,
    private commandsGraphics2dGraphics: CommandsGraphics2dGraphicsService,
    private commandsGraphics2dImages: CommandsGraphics2dImagesService,
    private commandsGraphics2dMovies: CommandsGraphics2dMoviesService,
    private commandsGraphics2dPixel: CommandsGraphics2dPixelService,
    private commandsGraphics2dText: CommandsGraphics2dTextService,
    private commandsGraphics3dAnimations: CommandsGraphics3dAnimationsService,
    private commandsGraphics3dBrushes: CommandsGraphics3dBrushesService,
    private commandsGraphics3dCamera: CommandsGraphics3dCameraService,
    private commandsGraphics3dCollisions: CommandsGraphics3dCollisionsService,
    private commandsGraphics3dControls: CommandsGraphics3dControlsService,
    private commandsGraphics3dCoordinates: CommandsGraphics3dCoordinatesService,
    private commandsGraphics3dDiverse: CommandsGraphics3dDiverseService,
    private commandsGraphics3dLightShadow: CommandsGraphics3dLightShadowService,
    private commandsGraphics3dMeshes: CommandsGraphics3dMeshesService,
    private commandsGraphics3dPicking: CommandsGraphics3dPickingService,
    private commandsGraphics3dScene: CommandsGraphics3dSceneService,
    private commandsGraphics3dScenery: CommandsGraphics3dSceneryService,
    private commandsGraphics3dScreen: CommandsGraphics3dScreenService,
    private commandsGraphics3dSprites: CommandsGraphics3dSpritesService,
    private commandsGraphics3dStatus: CommandsGraphics3dStatusService,
    private commandsGraphics3dSurfaces: CommandsGraphics3dSurfacesService,
    private commandsGraphics3dTerrain: CommandsGraphics3dTerrainService,
    private commandsGraphics3dTextures: CommandsGraphics3dTexturesService,
    private commandsGuiButton: CommandsGuiButtonService,
    private commandsGuiCanvas: CommandsGuiCanvasService,
    private commandsGuiDesktop: CommandsGuiDesktopService,
    private commandsGuiDiverse: CommandsGuiDiverseService,
    private commandsGuiEvent: CommandsGuiEventService,
    private commandsGuiGadget: CommandsGuiGadgetService,
    private commandsGuiHTML: CommandsGuiHtmlService,
    private commandsGuiIconStrip: CommandsGuiIconStripService,
    private commandsGuiListTabber: CommandsGuiListTabberService,
    private commandsGuiMenu: CommandsGuiMenuService,
    private commandsGuiPanel: CommandsGuiPanelService,
    private commandsGuiProgressBar: CommandsGuiProgressBarService,
    private commandsGuiRequest: CommandsGuiRequestService,
    private commandsGuiSlider: CommandsGuiSliderService,
    private commandsGuiTextArea: CommandsGuiTextAreaService,
    private commandsGuiTextField: CommandsGuiTextFieldService,
    private commandsGuiToolbar: CommandsGuiToolbarService,
    private commandsGuiTreeView: CommandsGuiTreeViewService,
    private commandsGuiWindow: CommandsGuiWindowService,
    private commandsIOGamepad: CommandsIOGamepadService,
    private commandsIOKeyboard: CommandsIOKeyboardService,
    private commandsIOMouse: CommandsIOMouseService,
    private commandsSound3D: CommandsSound3DService,
    private commandsSoundChannels: CommandsSoundChannelsService,
    private commandsSoundMusicSamples: CommandsSoundMusicSamplesService
  ) {
    this.resetParser();
    this.gameCode = {
      globals: [],
      statements: [],
      mainLoop: [],
      functions: [],
      types: []
    };
  }

  /**
   * Resets (or initializes) the parser object, as well as helper variables.
   */
  resetParser(): void {
    //stores individual values
    this.individuals = {};
    //stores code sections (e. g. conditions, selections, loops)
    this.stack = [];
    this.state = '?';
  }

  /**
   * Retrieves all global variables, constants, dim-arrays, function and type names
   * from a given lexer code.
   * @param lexerCode An array of lexer token arrays, preprocessed by the lexer
   */
  getIndividuals(lexerCode: Array<LexerToken[]>): any {
    let result = {
      global: [],
      const: [],
      dim: [],
      fn: [],
      type: []
    };

    lexerCode.forEach((lexerTokens: LexerToken[]) => {
      for (let i = 0; i < lexerTokens.length; i++) {
        if (lexerTokens[i].which === LexerTokenCategory.INDIVIDUAL) {
          if (i > 0 && lexerTokens[i - 1].which === LexerTokenCategory.KEYWORD) {
            //console.info('Previous token is a key word:', lexerTokens[i-1]);
            let keywordValue = lexerTokens[i - 1].value.toLowerCase();
            switch (keywordValue) {
              case 'global':
                if (result.global.indexOf(keywordValue) === -1) {
                  result.global.push(lexerTokens[i].value);
                }
                break;
              case 'const':
                if (result.const.indexOf(keywordValue) === -1) {
                  result.const.push(lexerTokens[i].value);
                }
                break;
              case 'dim':
                if (result.dim.indexOf(keywordValue) === -1) {
                  result.dim.push(lexerTokens[i].value);
                }
                break;
              case 'function':
                if (result.fn.indexOf(keywordValue) === -1) {
                  result.fn.push(lexerTokens[i].value);
                }
                break;
              case 'type':
                if (result.type.indexOf(keywordValue) === -1) {
                  result.type.push(lexerTokens[i].value);
                }
                break;
            }
          }
        }
      }
    });

    return result;
  }

  /**
   * Retrieves all local variables from a given lexer code.
   * If a function name is passed, only local variables of this function will be retrieved.
   * Otherwise, all local variables of all code functions will be retrieved.
   * @param lexerCode
   * @param fn
   */
  getLocals(lexerCode: Array<LexerToken[]>, fn?: string): any {
    if (fn) {

    }
  }

  /** RULES **/
  // [Num]: int | float | Pi
  // [Str]: string
  // [Bool]: True | False
  // [Expr]: [NumExpr] | [StrExpr] | [BoolExpr] | [Bool] | [Num] | [Str]
  // [NumExpr]: [Num] + [Num] | [Num] - [Num] | [Num] * [Num] | [Num] / [Num] | [Num] ^ [Num]
  // [StrExpr]: [Str] | [Str] + [Str] | [Str] + [Num] | [Str] + [Bool]
  // [BoolExpr]: [Bool] | [And] | [Or] | [Xor] | [Not]
  // [Ind]: $individual
  // [Ind+]: [Ind] | [Ind], [Ind+]
  // [Assign]: [Ind] = [Expr]
  // [Param]: [Ind] | [Assign]
  // [Cond]: [BoolExpr] | [Expr] = [Expr] | [Expr] < [Expr] | [Expr] > [Expr] | [Expr] <= [Expr] | [Expr] >= [Expr] | [Expr] <> [Expr]
  // Global [Ind]+
  // Local [Ind]+
  // Case [Ind]+ | Case [Expr]+
  // Default
  // Else | Else If [Cond] | Else If [Cond] Then
  // ElseIf [Cond] | ElseIf [Cond] Then
  // EndIf
  // If [Cond] | If [Cond] Then
  // Select [Ind]
  // [After]: After [ObjIndex]? [Ind]
  // [Before]: Before [ObjIndex]? [Ind]
  // Delete [Ind]
  // [First]: First [Ind]
  // [Last]: Last [Ind]
  // Insert [Ind] [Before | After]? [Ind]
  // [New]: New [Ind]
  // Null
  // TODO Object.[Type]
  // Type [Ind]
  // Field [Ind]
  // End | End Type | End Function | End If | End Select
  // Include [StrExpr]
  // Stop
  // Data [Expr]+
  // Dim [Ind]+
  // For [Assign] To [NumExpr] [Step [NumExpr]]? | For [Ind] = Each [Ind]
  // Const [Ind]+
  // MainLoop
  // Return [Expr]?
  // Exit
  // Forever
  // Next
  // Repeat
  // Until [Cond]
  // Wend
  // While [Cond]
  // [Mod]: [NumExpr] Mod [NumExpr]
  // [Not]: Not [BoolExpr]
  // [And]: [BoolExpr] And [BoolExpr]
  // [Or]: [BoolExpr] Or [BoolExpr]
  // [Xor]: [BoolExpr] Xor [BoolExpr]
  // Function [Ind] ([Param]*)
  // [Label]: .[Ind]
  // Restore [Label]
  // Read [Ind]+
  // [Ind] = Handle [Ind]
  // [Sar]: [NumExpr] Sar [NumExpr]
  // [Sar]: [NumExpr] Shl [NumExpr]
  // [Sar]: [NumExpr] Shr [NumExpr]
  createGameCode(lexerCode: Array<LexerToken[]>): BBScriptCode {
    // parse code line by line
    lexerCode.forEach((lexerTokens: LexerToken[]) => {
      // perform token cleanup: remove comments
      let initialTokens: LexerToken[] = [];
      lexerTokens.forEach((token: LexerToken) => {
        if (token.which !== LexerTokenCategory.COMMENT_MARKER && token.which !== LexerTokenCategory.COMMENT) {
          initialTokens.push(token);
        }
      });

      console.info('INITIAL TOKENS:', initialTokens);

      /*
       * Entry points:
       * // -declaration: Global | Local | Const | Dim
       *    -> can be combined with assignment
       * // -assignment: foo = 42
       * // -label: .label
       * // -command call: Graphics 640,480
       * // -function call: PrintText("Hello World")
       * // -loop begin: For | While | Repeat
       * // -loop break: Exit
       * // -loop end: Next | Wend | Until | Forever
       * // -condition: If x=y [Then] | ElseIf | Else If
       * // -condition end: EndIf | End If
       * // -selection head: Select variable
       * // -selection body: Case | Default
       * // -selection end: End Selection
       * // -function definition: Function foo(a, b, c)
       * // -function return: Return [...]
       * // -function end: End Function
       * // -type definition: Type Alien
       * // -type body: Field x, y, z
       * // -type end: End Type
       * // -object deletion: Delete alien
       * // -object insertion: Insert ...
       * // -script inclusion: Include script.bbs
       * // -debug stop: Stop
       * // -data definition: Data ...
       * // -restore data: Restore
       * // -read data: Read
       * // -main loop: MainLoop
       * // -main loop end: End MainLoop
       * // -quit program: end
       */
      // this.parseState(ParserState.INITIAL, initialTokens);

      //TODO: this is only a very basic parsing function
      if (initialTokens[0].which !== LexerTokenCategory.COMMAND) {
        console.error('First token MUST BE a command!');
      } else {
        // get all params
        let params = this.language.commands[initialTokens[0].value.toLowerCase()].params;
        console.info('PARAMS:', params);
      }
    });

    return this.gameCode;
  }

  parseState(state: ParserState, tokens: LexerToken[]) {
    //investigate first token, which is relevant for the current state
    let currentToken: LexerToken = tokens.shift();
    console.info('Parsing Token', currentToken);

    let validTokenCategories: LexerTokenCategory[];

    switch (state) {
      case ParserState.INITIAL:
        validTokenCategories = [
          LexerTokenCategory.KEYWORD,
          LexerTokenCategory.COMMAND,
          LexerTokenCategory.LABEL_DOT,
          LexerTokenCategory.INDIVIDUAL
        ];
        if (validTokenCategories.indexOf(currentToken.which) === -1) {
          console.error('Invalid token category:', currentToken);
          return;
        }

        switch (currentToken.which) {
          case LexerTokenCategory.KEYWORD:
            switch (currentToken.value.toLowerCase()) {
              case 'global':
              case 'local':
              case 'const':
              case 'dim':
                this.parseState(ParserState.DECLARATION, tokens);
                break;
              case 'for':
              case 'while':
              case 'repeat':
                this.parseState(ParserState.LOOP_HEAD, tokens);
                break;
              case 'exit':
                this.parseState(ParserState.LOOP_BREAK, tokens);
                break;
              case 'next':
              case 'wend':
              case 'until':
              case 'forever':
                this.parseState(ParserState.LOOP_END, tokens);
                break;
              case 'if':
              case 'elseif':
              case 'else':
                this.parseState(ParserState.CONDITION_HEAD, tokens);
                break;
              case 'endif':
                this.parseState(ParserState.CONDITION_END, tokens);
                break;
              case 'select':
                this.parseState(ParserState.SELECTION_HEAD, tokens);
                break;
              case 'case':
              case 'default':
                this.parseState(ParserState.SELECTION_BODY, tokens);
                break;
              case 'function':
                this.parseState(ParserState.FUNCTION_HEAD, tokens);
                break;
              case 'return':
                this.parseState(ParserState.FUNCTION_RETURN, tokens);
                break;
              case 'type':
                this.parseState(ParserState.TYPE_HEAD, tokens);
                break;
              case 'field':
                this.parseState(ParserState.TYPE_BODY, tokens);
                break;
              case 'delete':
                this.parseState(ParserState.OBJECT_DELETION, tokens);
                break;
              case 'insert':
                this.parseState(ParserState.OBJECT_INSERTION, tokens);
                break;
              case 'include':
                this.parseState(ParserState.INCLUDE, tokens);
                break;
              case 'stop':
                this.parseState(ParserState.DEBUG_STOP, tokens);
                break;
              case 'data':
                this.parseState(ParserState.DATA_DEFINITION, tokens);
                break;
              case 'restore':
                this.parseState(ParserState.RESTORE_DATA, tokens);
                break;
              case 'read':
                this.parseState(ParserState.READ_DATA, tokens);
                break;
              case 'mainloop':
                this.parseState(ParserState.MAIN_LOOP_HEAD, tokens);
                break;
              case 'end':
                if (tokens.length > 1) {
                  switch (tokens[1].which) {
                    case LexerTokenCategory.KEYWORD:
                      switch (tokens[1].value.toLowerCase()) {
                        case 'function':
                          this.parseState(ParserState.FUNCTION_END, tokens);
                          break;
                        case 'type':
                          this.parseState(ParserState.TYPE_END, tokens);
                          break;
                        case 'if':
                          this.parseState(ParserState.CONDITION_END, tokens);
                          break;
                        case 'select':
                          this.parseState(ParserState.SELECTION_END, tokens);
                          break;
                        case 'mainloop':
                          this.parseState(ParserState.MAIN_LOOP_END, tokens);
                      }
                      break;
                    default:
                    //TODO error: end must be followed by another keyword
                  }
                } else {
                  this.parseState(ParserState.QUIT_PROGRAM, tokens);
                }
                break;
              default:
                console.error('Invalid key word:', currentToken);
            }
            break;
          case LexerTokenCategory.COMMAND:
            this.stack.push(currentToken);
            this.parseState(ParserState.COMMAND_CALL, tokens);
            break;
          case LexerTokenCategory.LABEL_DOT:
            this.parseState(ParserState.LABEL, tokens);
            break;
          case LexerTokenCategory.INDIVIDUAL:
            let hasAssignment = false;
            tokens.forEach((token) => {
              if (token.which === LexerTokenCategory.ASSIGNMENT) {
                hasAssignment = true;
              }
            });

            if (hasAssignment) {
              this.parseState(ParserState.ASSIGNMENT, tokens);
            } else {
              this.parseState(ParserState.FUNCTION_CALL, tokens);
            }
        }
        break;
      case ParserState.DECLARATION:
        // these are not the key words but the actual variables!
        validTokenCategories = [
          LexerTokenCategory.GLOBAL,
          LexerTokenCategory.LOCAL,
          LexerTokenCategory.DIM,
          LexerTokenCategory.CONST
        ];
        if (validTokenCategories.indexOf(currentToken.which) === -1) {
          console.error('Invalid token category');
        }

        if (tokens.length === 0) {
          //No following tokens: Insert declaration statement
          this.gameCode.globals[currentToken.value] = 0;
        } else {
          //Valid following tokens: , =
          switch (tokens[0].which) {
            case LexerTokenCategory.COMMA:
              this.gameCode.globals[currentToken.value] = 0;
              this.parseState(ParserState.DECLARATION, tokens);
              break;
            case LexerTokenCategory.ASSIGNMENT:
              this.parseState(ParserState.ASSIGNMENT, tokens);
              break;
            default:
              console.error('Invalid token following a declaration');
          }
        }

        break;
      case ParserState.ASSIGNMENT:

        //Valid following tokens: ( [Number] [String] True False Pi First Last [Individual] [Command]
        break;
      case ParserState.COMMAND_CALL:
        let command: ApiCommand = this.language.commands[this.stack.pop().value.toLowerCase()];
        console.info('Command:', command);

        let service: string = `commands${command.category.charAt(0).toUpperCase()}${command.category.slice(1)}${command.subCategory.charAt(0).toUpperCase()}${command.subCategory.slice(1)}`;
        console.info('Service:', service);

        //TODO code must be executed later, for the services are not initialized yet
        this.gameCode.statements.push(
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
            this.gameState.getGlobalAsync('camera').subscribe((camera: GameEntity) => {
              this.commandsGraphics3dCoordinates.positionEntity(camera, 0, 2, -5).subscribe(() => {
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
            variable: 'cube',
            type: 'global',
            expression: {
              value: this.commandsGraphics3dMeshes.createCube()
            }
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('cube').subscribe((cube: GameEntity) => {
              this.commandsGraphics3dCoordinates.positionEntity(cube, 0, 1, 0).subscribe((done) => {
                observer.next();
                observer.complete();
              });
            });
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('cube').subscribe((cube: GameEntity) => {
              this.commandsGraphics3dControls.entityColor(cube, 0, 255, 0).subscribe((done) => {
                observer.next();
                observer.complete();
              });
            });
          }),

          this.commandsGraphics3dLightShadow.ambientLight(128, 200, 50),


          //2D GRAPHICS
          this.commandsGraphics2dGraphics.color(0, 128, 0),

          //this.commandsBasicsTimeRandom.delay(2000),

          this.commandsGraphics2dGraphics.oval(50, 200, 20, 40, false),
          this.commandsGraphics2dGraphics.line(300, 40, 350, 120),

          //this.commandsGraphics2dGraphics.color(255, 255, 0),
          this.commandsGraphics2dPixel.plot(200, 200),

          //IMAGE
          this.commandsGraphics2dImages.autoMidHandle(true),
          this.generalService.assign({
            variable: 'image',
            type: 'global',
            expression: {
              value: this.commandsGraphics2dImages.loadImage('/assets/gfx/face.png')
            }
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('image').subscribe((image: GameImage2D) => {
              this.commandsGraphics2dImages.resizeImage(image, 128, 128).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('image').subscribe((image: GameImage2D) => {
              this.commandsGraphics2dImages.rotateImage(image, 30).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('image').subscribe((image: GameImage2D) => {
              this.commandsGraphics2dImages.drawBlock(image, 200, 250).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          }),
          this.commandsGraphics2dGraphics.rect(195, 245, 10, 10, true),
          this.commandsGraphics2dGraphics.rect(195 - 64, 245 - 64, 10, 10, true),

          //TEXT
          this.generalService.assign({
            variable: 'font',
            type: 'global',
            expression: {
              value: this.commandsGraphics2dText.loadFont('Arial', 32, true, true, true)
            }
          }),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('font').subscribe((font: GameFont) => {
              this.commandsGraphics2dText.setFont(font).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          }),

          this.commandsGraphics2dText.text(50, 50, 'HELLO WORLD!'),
          this.commandsGraphics2dText.stringWidth('HELLO WORLD!'),
          this.commandsGraphics2dText.stringHeight('HELLO WORLD!'),
          this.generalService.assign({
            variable: 'rndValue',
            type: 'global',
            expression: {
              value: of('Hello World')
            }
          }),
          this.commandsBasicsTimeRandom.seedRnd('Hello World'),
          new Observable((observer) => {
            this.gameState.getGlobalAsync('image').subscribe((image: GameImage2D) => {
              this.commandsGraphics2dImages.maskImage(image, 255, 0, 255).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          })
        );
    }
  }

  parseCondition(tokens: LexerToken[]) {
    let linkValues: string[] = ['And', 'Or', 'Xor'];

    //find all expressions
    let expressions: Array<LexerToken[]> = [];
    let currentExpression: LexerToken[] = [];
    let links: LexerToken[] = [];
    tokens.forEach((token: LexerToken) => {
      if (token.which === LexerTokenCategory.KEYWORD && linkValues.indexOf(token.value) > -1) {
        links.push(token);

        if (currentExpression.length > 0) {
          expressions.push(currentExpression);
          currentExpression = [];
        }
      } else {
        currentExpression.push(token);
      }
    });
    if (currentExpression.length > 0) {
      expressions.push(currentExpression);
    }

    console.info('Expressions:', expressions);
    console.info('Links:', links);

    expressions.forEach((expression: LexerToken[]) => {
      this.parseExpression(expression);
    });
  }

  /**
   * Parses a comparison based on the comparison operator's index.
   * @param tokens A lexer token array
   * @param compIndex The position of the comparison operator
   */
  parseComparison(tokens: LexerToken[], compIndex: number) {
    //[Expr] = [Expr] | [Expr] < [Expr] | [Expr] > [Expr] | [Expr] <= [Expr] | [Expr] >= [Expr] | [Expr] <> [Expr]

    //TODO
  }

  parseLogicalLink(tokens: LexerToken[], linkIndex: number) {
    // [And]: [BoolExpr] And [BoolExpr]
    // [Or]: [BoolExpr] Or [BoolExpr]
    // [Xor]: [BoolExpr] Xor [BoolExpr]

    let expectedTokens = [
      LexerTokenCategory.INTEGER,
      LexerTokenCategory.FLOAT,
      LexerTokenCategory.STRING
    ];
    let validLeftExpression;

    //parse left hand boolean expression
    for (let leftIndex = linkIndex - 1; leftIndex >= 0; leftIndex--) {
      let currentToken = tokens[leftIndex];
      if (expectedTokens.indexOf(currentToken.which) > -1) {

      }
    }
  }

  parseExpression(tokens: LexerToken[]) {
    let validTokenCategories: any = {
      value: [
        LexerTokenCategory.KEYWORD,
        LexerTokenCategory.INTEGER,
        LexerTokenCategory.STRING,
        LexerTokenCategory.FLOAT,
        LexerTokenCategory.INDIVIDUAL
      ],
      algebraicComparison: [
        LexerTokenCategory.ALGEBRAIC,
        LexerTokenCategory.COMPARISON
      ]
    };
    let validKeywords: any = {
      value: ['Not', 'Pi']
    };

    let state = 'value';

    tokens.forEach((token: LexerToken) => {
      //check if current token is valid
      let validToken = validTokenCategories[state].indexOf(token.which) > -1;
      if (token.which === LexerTokenCategory.KEYWORD) {
        validToken = validKeywords[state].indexOf(token.value) > -1;
      }

      if (validToken) {
        switch (token.which) {
          case LexerTokenCategory.INTEGER:
          case LexerTokenCategory.FLOAT:
            state = 'algebraicComparison';
        }
      } else {
        console.error('Invalid token:', token);
      }
    });
  }
}
