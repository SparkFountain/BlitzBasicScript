import { Component, Input, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { LexerService } from 'bbscript/src/services/lexer/lexer.service';
import { ParserService } from 'bbscript/src/services/parser/parser.service';
import { LexerToken } from 'bbscript/src/interfaces/lexer-token';
import { BBScriptCode } from 'bbscript/src/interfaces/bbscript-code';

@Component({
  selector: 'blitz-basic-script-canvas',
  templateUrl: 'canvas.html',
  styleUrls: ['canvas.scss']
})
export class BlitzBasicScriptCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('scene', { static: true }) scene: ElementRef<HTMLCanvasElement>;
  @ViewChild('gui', { static: true }) gui: ElementRef<HTMLCanvasElement>;

  sceneCtx: any;
  guiCtx: any;

  tokens: LexerToken[][];
  gameCode: BBScriptCode;

  private _code: string[];
  @Input()
  set code(code: string[]) {
    this._code = code;
    this.tokens = this.lexer.lexCode(code);
    this.gameCode = this.parser.createGameCode(this.tokens);

    console.info('Game code:', this.gameCode);
  }

  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _camera: BABYLON.FreeCamera;
  private _light: BABYLON.Light;

  constructor(private lexer: LexerService,
              private parser: ParserService
    ) {

  }

  ngOnInit(): void {
    this._canvas = document.getElementById('scene') as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);
  }

  ngAfterViewInit(): void {
    this.sceneCtx = this.scene.nativeElement.getContext('webgl');
    this.guiCtx = this.gui.nativeElement.getContext('2d');

    // TODO: debug only, remove later
    this.guiCtx.fillRect(20, 20, 100, 70);

    // Create the scene.
    this.createScene();

    // Start render loop.
    this.doRender();
  }

  createScene(): void {
    // Create a basic BJS Scene object.
    this._scene = new BABYLON.Scene(this._engine);

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);

    // Target the camera to scene origin.
    this._camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    this._camera.attachControl(this._canvas, false);

    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);

    // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere',
      { segments: 16, diameter: 2 }, this._scene);

    // Move the sphere upward 1/2 of its height.
    sphere.position.y = 1;

    // Create a built-in "ground" shape.
    const ground = BABYLON.MeshBuilder.CreateGround('ground',
      { width: 6, height: 6, subdivisions: 2 }, this._scene);
  }

  doRender(): void {
    // Run the render loop.
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });

    // The canvas/window resize event handler.
    window.addEventListener('resize', () => {
      this._engine.resize();
    });
  }
}
