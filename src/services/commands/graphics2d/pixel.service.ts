import {Injectable} from '@angular/core';
import {GameStateService} from '../../game-state.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dPixelService {
    constructor(private graphics2d: Render2dService,
                private gameState: GameStateService) {

    }

    colorBlue(): Promise<number> {
        return Promise.resolve(this.gameState.getScreenProperties().color.blue);
    }

    colorGreen(): Promise<number> {
        return Promise.resolve(this.gameState.getScreenProperties().color.green);
    }

    colorRed(): Promise<number> {
        return Promise.resolve(this.gameState.getScreenProperties().color.red);
    }

    plot(x: number, y: number): Promise<void> {
        return this.graphics2d.plot(x, y);
    }
}
