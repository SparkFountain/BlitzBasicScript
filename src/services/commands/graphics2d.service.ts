import { Injectable } from '@angular/core';
import { CommandsGraphics2dDisplayService } from './graphics2d/display.service';
import { CommandsGraphics2dGraphicsService } from './graphics2d/graphics.service';
import { CommandsGraphics2dImagesService } from './graphics2d/images.service';
import { CommandsGraphics2dMoviesService } from './graphics2d/movies.service';
import { CommandsGraphics2dPixelService } from './graphics2d/pixel.service';
import { CommandsGraphics2dTextService } from './graphics2d/text.service';
import { GameImage2D } from 'bbscript/src/interfaces/game/image-2d';
import { GameMovie } from 'bbscript/src/interfaces/game/movie';
import { GameFont } from 'bbscript/src/interfaces/game/font';
import { BbScriptImage } from 'bbscript/src/classes/in-game/2d/image';

@Injectable()
export class CommandsGraphics2DService {
  constructor(
    private display: CommandsGraphics2dDisplayService,
    private graphicsService: CommandsGraphics2dGraphicsService,
    private imagesService: CommandsGraphics2dImagesService,
    private moviesService: CommandsGraphics2dMoviesService,
    private pixelService: CommandsGraphics2dPixelService,
    private textService: CommandsGraphics2dTextService
  ) {}

  // DISPLAY
  async endGraphics(): Promise<void> {
    return this.display.endGraphics();
  }

  async gfxModeDepth(mode: number): Promise<number> {
    return this.display.gfxModeDepth(mode);
  }

  async gfxModeExists(width: number, height: number, depth: number): Promise<boolean> {
    return this.display.gfxModeExists(width, height, depth);
  }

  async graphics(width: number, height: number, depth: number, mode: number): Promise<void> {
    return this.display.graphics(width, height);
  }

  async graphicsDepth(): Promise<number> {
    return this.display.graphicsDepth();
  }

  async graphicsHeight(): Promise<number> {
    return this.display.graphicsHeight();
  }

  async graphicsWidth(): Promise<number> {
    return this.display.graphicsWidth();
  }

  // GRAPHICS
  async cls(): Promise<void> {
    return Promise.resolve(this.graphicsService.cls());
  }

  async clsColor(red: number, green: number, blue: number): Promise<void> {
    console.info('ClsColor command called');
    return this.graphicsService.clsColor(red, green, blue);
  }

  async color(red: number, green: number, blue: number): Promise<void> {
    return this.graphicsService.color(red, green, blue);
  }

  async line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.graphicsService.line(beginX, beginY, endX, endY);
  }

  async origin(x: number, y: number): Promise<void> {
    return this.graphicsService.origin(x, y);
  }

  async oval(x: number, y: number, width: number, height: number, filled: boolean): Promise<void> {
    return this.graphicsService.oval(x, y, width, height, filled);
  }

  async rect(x: number, y: number, width: number, height: number, filled?: boolean): Promise<void> {
    return this.graphicsService.rect(x, y, width, height, filled);
  }

  async viewport(beginX: number, beginY: number, width: number, height: number): Promise<void> {
    return this.graphicsService.viewport(beginX, beginY, width, height);
  }

  // IMAGES
  async autoMidHandle(active: boolean): Promise<void> {
    return this.imagesService.autoMidHandle(active);
  }

  async copyImage(image: GameImage2D): Promise<GameImage2D> {
    return this.imagesService.copyImage(image);
  }

  async createImage(width: number, height: number, frames?: number): Promise<GameImage2D> {
    return this.imagesService.createImage(width, height, frames);
  }

  async drawBlock(image: any, x: number, y: number, frame?: number): Promise<void> {
    return this.imagesService.drawBlock(image, x, y, frame);
  }

  async drawBlockRect(
    image: any,
    x: number,
    y: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number,
    frame?: number
  ): Promise<void> {
    return this.imagesService.drawBlockRect(image, x, y, beginX, beginY, width, height, frame);
  }

  async drawImage(image: GameImage2D, x: number, y: number, frame?: number): Promise<void> {
    return this.imagesService.drawImage(image, x, y, frame);
  }

  async drawImageRect(): Promise<void> {
    return this.imagesService.drawImageRect();
  }

  async freeImage(image: GameImage2D): Promise<void> {
    return this.imagesService.freeImage(image);
  }

  async grabImage(): Promise<any> {
    return this.imagesService.grabImage();
  }

  async handleImage(image: GameImage2D, x: number, y: number): Promise<void> {
    return this.imagesService.handleImage(image, x, y);
  }

  async imageHeight(image: GameImage2D): Promise<number> {
    return this.imagesService.imageHeight(image);
  }

  async imageRectCollide(
    image: GameImage2D,
    x: number,
    y: number,
    frame: number,
    beginX: number,
    beginY: number,
    width: number,
    height: number
  ): Promise<boolean> {
    return this.imagesService.imageRectCollide(image, x, y, frame, beginX, beginY, width, height);
  }

  async imageRectOverlap(
    image: BbScriptImage,
    imageX: number,
    imageY: number,
    rectX: number,
    rectY: number,
    rectWidth: number,
    rectHeight: number
  ): Promise<boolean> {
    return this.imagesService.imageRectOverlap(image, imageX, imageY, rectX, rectY, rectWidth, rectHeight);
  }

  async imagesCollide(
    image1: GameImage2D,
    x1: number,
    y1: number,
    frame1: number,
    image2: GameImage2D,
    x2: number,
    y2: number,
    frame2: number
  ): Promise<boolean> {
    return this.imagesService.imagesCollide(image1, x1, y1, frame1, image2, x2, y2, frame2);
  }

  async imagesOverlap(
    image1: GameImage2D,
    x1: number,
    y1: number,
    image2: GameImage2D,
    x2: number,
    y2: number
  ): Promise<boolean> {
    return this.imagesService.imagesOverlap(image1, x1, y1, image2, x2, y2);
  }

  async imageWidth(image: GameImage2D): Promise<number> {
    return this.imagesService.imageWidth(image);
  }

  async imageXHandle(image: GameImage2D): Promise<number> {
    return this.imagesService.imageXHandle(image);
  }

  async imageYHandle(image: GameImage2D): Promise<number> {
    return this.imagesService.imageYHandle(image);
  }

  async loadAnimImage(filePath: string, width, height, startFrameIndex: number, totalFrames: number): Promise<any> {
    return this.imagesService.loadAnimImage(filePath, width, height, startFrameIndex, totalFrames);
  }

  async loadImage(filePath: string): Promise<GameImage2D> {
    console.info('Load Image:', filePath);
    return this.imagesService.loadImage(filePath);
  }

  async maskImage(image: GameImage2D, red: number, green: number, blue: number): Promise<void> {
    return this.imagesService.maskImage(image, red, green, blue);
  }

  async midHandle(image: GameImage2D): Promise<void> {
    return this.imagesService.midHandle(image);
  }

  async rectsOverlap(
    x1: number,
    y1: number,
    width1: number,
    height1: number,
    x2: number,
    y2: number,
    width2: number,
    height2: number
  ): Promise<boolean> {
    return this.imagesService.rectsOverlap(x1, y1, width1, height1, x2, y2, width2, height2);
  }

  async resizeImage(image: GameImage2D, width: number, height: number): Promise<void> {
    return this.imagesService.resizeImage(image, width, height);
  }

  async rotateImage(image: GameImage2D, angle: number): Promise<void> {
    return this.imagesService.rotateImage(image, angle);
  }

  async saveImage(): Promise<void> {
    return this.imagesService.saveImage();
  }

  async scaleImage(image: GameImage2D, zoomX: number, zoomY: number): Promise<void> {
    return this.imagesService.scaleImage(image, zoomX, zoomY);
  }

  async tileBlock(image: GameImage2D, offsetX: number, offsetY: number, frame?: number): Promise<void> {
    return this.imagesService.tileBlock(image, offsetX, offsetY, frame);
  }

  async tileImage(): Promise<void> {
    return this.imagesService.tileImage();
  }

  // MOVIES
  async closeMovie(movie: GameMovie): Promise<void> {
    return this.moviesService.closeMovie(movie);
  }

  async drawMovie(movie: GameMovie, x: number, y: number, width: number, height: number): Promise<boolean> {
    return this.moviesService.drawMovie(movie, x, y, width, height);
  }

  async movieHeight(movie: GameMovie): Promise<number> {
    return this.moviesService.movieHeight(movie);
  }

  async moviePlaying(movie: GameMovie): Promise<boolean> {
    return this.moviesService.moviePlaying(movie);
  }

  async movieWidth(movie: GameMovie): Promise<number> {
    return this.moviesService.movieWidth(movie);
  }

  async openMovie(filePath: string): Promise<GameMovie> {
    return this.moviesService.openMovie(filePath);
  }

  // PIXEL
  async colorBlue(): Promise<number> {
    return this.pixelService.colorBlue();
  }

  async colorGreen(): Promise<number> {
    return this.pixelService.colorGreen();
  }

  async colorRed(): Promise<number> {
    return this.pixelService.colorRed();
  }

  async plot(x: number, y: number): Promise<void> {
    return this.pixelService.plot(x, y);
  }

  // TEXT
  async fontAscent(font: GameFont): Promise<number> {
    return this.textService.fontAscent(font);
  }

  async fontDescent(font: GameFont): Promise<number> {
    return this.textService.fontDescent(font);
  }

  async fontHeight(font: GameFont): Promise<number> {
    return this.textService.fontHeight(font);
  }

  async fontName(font: GameFont): Promise<string> {
    return this.textService.fontName(font);
  }

  async fontSize(font: GameFont): Promise<number> {
    return this.textService.fontSize(font);
  }

  async fontStyle(font: GameFont): Promise<number> {
    return this.textService.fontStyle(font);
  }

  async fontWidth(font: GameFont): Promise<number> {
    return this.textService.fontWidth(font);
  }

  async freeFont(font: GameFont): Promise<void> {
    return this.textService.freeFont(font);
  }

  async loadFont(
    fontName: string,
    size: number,
    bold?: boolean,
    italic?: boolean,
    underline?: boolean
  ): Promise<GameFont> {
    return this.textService.loadFont(fontName, size, bold, italic, underline);
  }

  async locate(x: number, y: number): Promise<void> {
    return this.textService.locate(x, y);
  }

  async print(text: string): Promise<void> {
    return this.textService.print(text);
  }

  async setFont(font: GameFont): Promise<void> {
    return this.textService.setFont(font);
  }

  async stringHeight(text: string): Promise<number> {
    return this.textService.stringHeight(text);
  }

  async stringWidth(text: string): Promise<number> {
    return this.textService.stringWidth(text);
  }

  async text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Promise<void> {
    return this.textService.text(x, y, text, centerX, centerY);
  }

  async write(text: string): Promise<void> {
    return this.textService.write(text);
  }
}
