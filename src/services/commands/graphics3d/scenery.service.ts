import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsGraphics3dScenery {
    constructor(private gameState: GameStateService) {

    }

    antiAlias(enabled: boolean): Observable<void> {
        return of(this.gameState.setAntiAliasing(enabled));
    }

    captureWorld(): Observable<void> {
        //TODO implementation
        return of(null);
    }

    clearWorld(removeEntities?: boolean, removeBrushes?: boolean, removeTextures?: boolean): Observable<void> {
        //TODO implementation
        return of(null);
    }

    renderWorld(animationStep: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    updateWorld(updateSpeed?: number): Observable<void> {
        //TODO implementation
        return of(null);
    }

    wireFrame(enabled: boolean): Observable<void> {
        return of(this.gameState.setWireFrame(enabled));
    }
}
