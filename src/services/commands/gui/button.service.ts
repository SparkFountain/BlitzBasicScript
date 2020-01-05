import {Injectable} from '@angular/core';
import {ButtonComponent} from '../../../components/button/button.component';
import {Observable, of, Subscriber} from 'rxjs';
import {GuiButtonStyle} from '../../../enums/gui/button-style';

@Injectable()
export class CommandsGuiButton {
    constructor() {

    }

    buttonState(button: ButtonComponent): Observable<boolean> {
        //TODO
        return of(false);
    }

    createButton(text: string, x: number, y: number, width: number, height: number, group: any, style?: GuiButtonStyle): Observable<ButtonComponent> {
        //TODO
        return of(null);
    }

    setButtonState(button: ButtonComponent, active: boolean): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            //TODO
        });
    }
}
