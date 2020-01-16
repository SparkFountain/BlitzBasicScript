import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BlitzBasicScriptCanvasComponent} from '../../../components/canvas/canvas.component';

@Injectable()
export class CommandsGuiCanvasService {
    constructor() {

    }

    createCanvas(x: number, y: number, width: number, height: number, group: any, style?: any): Observable<BlitzBasicScriptCanvasComponent> {
        return of(null);
    }

    //TODO implement or deprecated?
    flipCanvas(canvas: BlitzBasicScriptCanvasComponent, flip: boolean) {
    }
}
