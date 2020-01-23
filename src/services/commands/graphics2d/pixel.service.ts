import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Render2dService} from '../../2d/render2d.service';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsGraphics2dPixelService {
    constructor(private graphics2d: Render2dService,
                private gameState: GameStateService) {

    }

    colorBlue(): Observable<number> {
        return of(this.gameState.getScreenProperties().color.blue);
    }

    colorGreen(): Observable<number> {
        return of(this.gameState.getScreenProperties().color.green);
    }

    colorRed(): Observable<number> {
        return of(this.gameState.getScreenProperties().color.red);
    }

    plot(x: number, y: number): Observable<void> {
        return this.graphics2d.plot(x, y);
    }
}
