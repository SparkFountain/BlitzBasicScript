import { Injectable } from '@angular/core';
import { forkJoin, of, Subscriber } from 'rxjs';
import { GameStateService } from '../../game-state.service';
import { GameFont } from '../../../interfaces/game/font';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dTextService {
  constructor(private graphics2d: Render2dService, private gameState: GameStateService) {}

  fontAscent(font: GameFont): Promise<number> {
    return this.graphics2d.fontAscent(font);
  }

  fontDescent(font: GameFont): Promise<number> {
    return this.graphics2d.fontDescent(font);
  }

  //TODO according to BlitzForum Online Help, the font parameter should not be set: https://www.blitzforum.de/help/fontHeight
  fontHeight(font: GameFont): Promise<number> {
    return new Promise<number>((resolve: Function, reject: Function) => {
      forkJoin([this.fontAscent(font), this.fontDescent(font)]).subscribe((values: number[]) => {
        resolve(values[0] + values[1]);
      });
    });
  }

  fontName(font: GameFont): Promise<string> {
    return Promise.resolve(font.name);
  }

  fontSize(font: GameFont): Promise<number> {
    return Promise.resolve(font.size);
  }

  fontStyle(font: GameFont): Promise<number> {
    return new Promise<number>((resolve: Function, reject: Function) => {
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

      resolve(result);
    });
  }

  fontWidth(font: GameFont): Promise<number> {
    return this.graphics2d.fontWidth(font);
  }

  freeFont(font: GameFont): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      font = null;

      resolve();
    });
  }

  loadFont(fontName: string, size: number, bold?: boolean, italic?: boolean, underline?: boolean): Promise<GameFont> {
    return new Promise<GameFont>((resolve: Function, reject: Function) => {
      resolve({
        name: fontName,
        size: size,
        bold: bold,
        italic: italic,
        underline: underline,
      });
    });
  }

  locate(x: number, y: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      this.gameState.setTextModeOffset({ x: x, y: y });

      resolve();
    });
  }

  // TODO: make this command deprecated?
  print(text: string): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      let textModeOffset: { x: number; y: number } = this.gameState.getTextModeProperties().offset;
      // this.text(textModeOffset.x, textModeOffset.y, text).subscribe(() => {
      //   //TODO calculate new text mode offset

      //   resolve();
      // });
    });
  }

  setFont(font: GameFont): Promise<void> {
    return this.graphics2d.setFont(font);
  }

  stringHeight(text: string): Promise<number> {
    return this.graphics2d.stringHeight();
  }

  stringWidth(text: string): Promise<number> {
    return this.graphics2d.stringWidth(text);
  }

  text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Promise<void> {
    return this.graphics2d.text(x, y, text, centerX, centerY);
  }

  // TODO: make this command deprecated?
  write(text: string): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      //TODO

      resolve();
    });
  }
}
