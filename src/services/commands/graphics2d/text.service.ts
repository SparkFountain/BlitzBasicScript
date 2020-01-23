import {Injectable} from '@angular/core';
import {forkJoin, Observable, of, Subscriber} from 'rxjs';
import {Render2dService} from '../../2d/render2d.service';
import {GameStateService} from '../../game-state/game-state.service';
import {GameFont} from '../../../interfaces/game/font';

@Injectable()
export class CommandsGraphics2dTextService {
    constructor(private graphics2d: Render2dService,
                private gameState: GameStateService) {

    }

    fontAscent(font: GameFont): Observable<number> {
        return this.graphics2d.fontAscent(font);
    }

    fontDescent(font: GameFont): Observable<number> {
        return this.graphics2d.fontDescent(font);
    }

    //TODO according to BlitzForum Online Help, the font parameter should not be set: https://www.blitzforum.de/help/fontHeight
    fontHeight(font: GameFont): Observable<number> {
        return new Observable<number>((observer: Subscriber<number>) => {
            forkJoin([this.fontAscent(font), this.fontDescent(font)]).subscribe((values: number[]) => {
                observer.next(values[0] + values[1]);
                observer.complete();
            });
        });
    }

    fontName(font: GameFont): Observable<string> {
        return of(font.name);
    }

    fontSize(font: GameFont): Observable<number> {
        return of(font.size);
    }

    fontStyle(font: GameFont): Observable<number> {
        return new Observable<number>((observer: Subscriber<number>) => {
            let result = 0;
            if (font.bold) {
                result += 1;
            }
            if (font.italic) {
                result += 2;
            }
            if (font.underline) {
                result += 4;
            }

            observer.next(result);
            observer.complete();
        });
    }

    fontWidth() {
        return this.graphics2d.fontWidth();
    }

    freeFont(font: GameFont): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            font = null;

            observer.next();
            observer.complete();
        });

    }

    loadFont(fontName: string, size: number, bold?: boolean, italic?: boolean, underline?: boolean): Observable<GameFont> {
        return new Observable<GameFont>((observer: Subscriber<GameFont>) => {
            observer.next({
                name: fontName,
                size: size,
                bold: bold,
                italic: italic,
                underline: underline
            });
            observer.complete();
        });
    }

    locate(x: number, y: number): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            this.gameState.setTextModeOffset({x: x, y: y});

            observer.next();
            observer.complete();
        });
    }

    print(text: string): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            let textModeOffset: { x: number, y: number } = this.gameState.getTextModeProperties().offset;
            this.text(textModeOffset.x, textModeOffset.y, text).subscribe(() => {
                //TODO calculate new text mode offset

                observer.next();
                observer.complete();
            });
        });
    }

    setFont(font: GameFont): Observable<void> {
        return this.graphics2d.setFont(font);
    }

    stringHeight(text: string): Observable<number> {
        return this.graphics2d.stringHeight();
    }

    stringWidth(text: string): Observable<number> {
        return this.graphics2d.stringWidth(text);
    }

    text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Observable<void> {
        return this.graphics2d.text(x, y, text, centerX, centerY);
    }

    write(text: string): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            //TODO

            observer.next();
            observer.complete();
        });
    }
}
