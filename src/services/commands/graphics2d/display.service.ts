import {Injectable} from '@angular/core';
import {BabylonJSService} from '../../babylon-js.service';
import {GameStateService} from '../../game-state.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dDisplayService {
    constructor(private babylonjs: BabylonJSService,
                private graphics2d: Render2dService,
                private gameState: GameStateService
    ) {

    }

    endGraphics(): Promise<void> {
      return null;
    }

    gfxModeDepth(): Promise<number> {
        return Promise.resolve(32);
    }

    gfxModeExists(): Promise<boolean> {
        return Promise.resolve(true);
    }

    graphics(width: number, height: number): Promise<void> {
        this.gameState.setScreenWidth(width);
        this.gameState.setScreenHeight(height);
        this.gameState.setScreenViewport({
            beginX: 0,
            beginY: 0,
            width: width,
            height: height
        });

        // TODO: refactor
        return null;
        // return concat(
        //     this.babylonjs.initGraphics(width, height),
        //     this.graphics2d.initGraphics(width, height)
        // );
    }

    graphicsDepth(): Promise<number> {
        return Promise.resolve(32);
    }

    graphicsHeight(): Promise<number> {
        return Promise.resolve(this.gameState.getScreenProperties().height);
    }

    graphicsWidth(): Promise<number> {
        return Promise.resolve(this.gameState.getScreenProperties().width);
    }
}
