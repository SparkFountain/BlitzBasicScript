import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CanvasComponent} from '../../../components/canvas/canvas.component';

@Injectable()
export class CommandsGuiCanvas {
    constructor() {

    }

    createCanvas(x: number, y: number, width: number, height: number, group: any, style?: any): Observable<CanvasComponent> {
        return of(null);
    }

    //TODO implement or deprecated?
    flipCanvas(canvas: CanvasComponent, flip: boolean) {
    }
}
