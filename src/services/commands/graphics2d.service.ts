import { Injectable } from "@angular/core";
import { CommandsGraphics2dDisplayService } from './graphics2d/display.service';
import { CommandsGraphics2dGraphicsService } from './graphics2d/graphics.service';
import { CommandsGraphics2dImagesService } from './graphics2d/images.service';
import { CommandsGraphics2dMoviesService } from './graphics2d/movies.service';
import { CommandsGraphics2dPixelService } from './graphics2d/pixel.service';
import { CommandsGraphics2dTextService } from './graphics2d/text.service';
import { Observable } from 'rxjs';
import { GameImage2D } from 'bbscript/src/interfaces/game/image-2d';
import { GameMovie } from 'bbscript/src/interfaces/game/movie';
import { GameFont } from 'bbscript/src/interfaces/game/font';

@Injectable()
export class CommandsGraphics2DService {
  constructor(private display: CommandsGraphics2dDisplayService,
    private graphicsService: CommandsGraphics2dGraphicsService,
    private imagesService: CommandsGraphics2dImagesService,
    private moviesService: CommandsGraphics2dMoviesService,
    private pixelService: CommandsGraphics2dPixelService,
    private textService: CommandsGraphics2dTextService
  ) { }

  // DISPLAY
  endGraphics() {
    return this.display.endGraphics();
  }

  gfxModeDepth(): Observable<number> {
    return this.display.gfxModeDepth();
  }

  gfxModeExists(): Observable<boolean> {
    return this.display.gfxModeExists();
  }

  graphics(width: number, height: number): Observable<void> {
    return this.display.graphics(width, height);
  }

  graphicsDepth(): Observable<number> {
    return this.display.graphicsDepth();
  }

  graphicsHeight(): Observable<number> {
    return this.display.graphicsHeight();
  }

  graphicsWidth(): Observable<number> {
    return this.display.graphicsWidth();
  }

  // GRAPHICS
  cls(): Observable<void> {
    return this.graphicsService.cls();
  }

  clsColor(red: number, green: number, blue: number): Observable<void> {
    console.info('ClsColor command called');
    return this.graphicsService.clsColor(red, green, blue);
  }

  color(red: number, green: number, blue: number): Observable<void> {
    return this.graphicsService.color(red, green, blue);
  }

  line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.graphicsService.line(beginX, beginY, endX, endY);
  }

  origin(x: number, y: number): Observable<void> {
    return this.graphicsService.origin(x, y);
  }

  oval(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return this.graphicsService.oval(x, y, width, height, filled);
  }

  rect(x: number, y: number, width: number, height: number, filled?: boolean): Observable<void> {
    return this.graphicsService.rect(x, y, width, height, filled);
  }

  viewport(beginX: number, beginY: number, width: number, height: number): Observable<void> {
    return this.graphicsService.viewport(beginX, beginY, width, height);
  }

  // IMAGES
  autoMidHandle(active: boolean): Observable<void> {
    return this.imagesService.autoMidHandle(active);
  }

  copyImage(image: GameImage2D): Observable<GameImage2D> {
    return this.imagesService.copyImage(image);
  }

  createImage(width: number, height: number, frames?: number): Observable<GameImage2D> {
    return this.imagesService.createImage(width, height, frames);
  }

  drawBlock(image: any, x: number, y: number, frame?: number): Observable<void> {
    return this.imagesService.drawBlock(image, x, y, frame);
  }

  drawBlockRect(image: any, x: number, y: number, beginX: number, beginY: number, width: number, height: number, frame?: number): Observable<void> {
    return this.imagesService.drawBlockRect(image, x, y, beginX, beginY, width, height, frame);
  }

  drawImage(image: GameImage2D, x: number, y: number, frame?: number): Observable<void> {
    return this.imagesService.drawImage(image, x, y, frame);
  }

  drawImageRect() {
    return this.imagesService.drawImageRect();
  }

  freeImage(image: GameImage2D): Observable<void> {
    return this.imagesService.freeImage(image);
  }

  grabImage() {
    return this.imagesService.grabImage();
  }

  handleImage(image: GameImage2D, x: number, y: number): Observable<void> {
    return this.imagesService.handleImage(image, x, y);
  }

  imageHeight(image: GameImage2D): Observable<number> {
    return this.imagesService.imageHeight(image);
  }

  imageRectCollide(image: GameImage2D, x: number, y: number, frame: number, beginX: number, beginY: number, width: number, height: number) {
    return this.imagesService.imageRectCollide(image, x, y, frame, beginX, beginY, width, height);
  }

  imageRectOverlap() {
    return this.imagesService.imageRectOverlap();
  }

  imagesCollide(image1: GameImage2D, x1: number, y1: number, frame1: number, image2: GameImage2D, x2: number, y2: number, frame2: number): Observable<boolean> {
    return this.imagesService.imagesCollide(image1, x1, y1, frame1, image2, x2, y2, frame2);
  }

  imagesOverlap(image1: GameImage2D, x1: number, y1: number, image2: GameImage2D, x2: number, y2: number): Observable<boolean> {
    return this.imagesService.imagesOverlap(image1, x1, y1, image2, x2, y2);
  }

  imageWidth(image: GameImage2D): Observable<number> {
    return this.imagesService.imageWidth(image);
  }

  imageXHandle(image: GameImage2D): Observable<number> {
    return this.imagesService.imageXHandle(image);
  }

  imageYHandle(image: GameImage2D): Observable<number> {
    return this.imagesService.imageYHandle(image);
  }

  loadAnimImage(filePath: string, width, height, startFrameIndex: number, totalFrames: number) {
    return this.imagesService.loadAnimImage(filePath, width, height, startFrameIndex, totalFrames);
  }

  loadImage(filePath: string): Observable<GameImage2D> {
    console.info('Load Image:', filePath);
    return this.imagesService.loadImage(filePath);
  }

  maskImage(image: GameImage2D, red: number, green: number, blue: number): Observable<void> {
    return this.imagesService.maskImage(image, red, green, blue);
  }

  midHandle(image: GameImage2D): Observable<void> {
    return this.imagesService.midHandle(image);
  }

  rectsOverlap(x1: number, y1: number, width1: number, height1: number, x2: number, y2: number, width2: number, height2: number): Observable<boolean> {
    return this.imagesService.rectsOverlap(x1, y1, width1, height1, x2, y2, width2, height2);
  }

  resizeImage(image: GameImage2D, width: number, height: number): Observable<void> {
    return this.imagesService.resizeImage(image, width, height);
  }

  rotateImage(image: GameImage2D, angle: number): Observable<void> {
    return this.imagesService.rotateImage(image, angle);
  }

  saveImage(): Observable<void> {
    return this.imagesService.saveImage();
  }

  scaleImage(image: GameImage2D, zoomX: number, zoomY: number): Observable<void> {
    return this.imagesService.scaleImage(image, zoomX, zoomY);
  }

  tileBlock(image: GameImage2D, offsetX: number, offsetY: number, frame?: number): Observable<void> {
    return this.imagesService.tileBlock(image, offsetX, offsetY, frame);
  }

  tileImage(): Observable<void> {
    return this.imagesService.tileImage();
  }

  // MOVIES
  closeMovie(movie: GameMovie): Observable<void> {
    return this.moviesService.closeMovie(movie);
  }

  drawMovie(movie: GameMovie, x: number, y: number, width: number, height: number): Observable<boolean> {
    return this.moviesService.drawMovie(movie, x, y, width, height);
  }

  movieHeight(movie: GameMovie): Observable<number> {
    return this.moviesService.movieHeight(movie);
  }

  moviePlaying(movie: GameMovie): Observable<boolean> {
    return this.moviesService.moviePlaying(movie);
  }

  movieWidth(movie: GameMovie): Observable<number> {
    return this.moviesService.movieWidth(movie);
  }

  openMovie(filePath: string): Observable<GameMovie> {
    return this.moviesService.openMovie(filePath);
  }

  // PIXEL
  colorBlue(): Observable<number> {
    return this.pixelService.colorBlue();
  }

  colorGreen(): Observable<number> {
    return this.pixelService.colorGreen();
  }

  colorRed(): Observable<number> {
    return this.pixelService.colorRed();
  }

  plot(x: number, y: number): Observable<void> {
    return this.pixelService.plot(x, y);
  }

  // TEXT
  fontAscent(font: GameFont): Observable<number> {
    return this.textService.fontAscent(font);
  }

  fontDescent(font: GameFont): Observable<number> {
    return this.textService.fontDescent(font);
  }

  fontHeight(font: GameFont): Observable<number> {
    return this.textService.fontHeight(font);
  }

  fontName(font: GameFont): Observable<string> {
    return this.textService.fontName(font);
  }

  fontSize(font: GameFont): Observable<number> {
    return this.textService.fontSize(font);
  }

  fontStyle(font: GameFont): Observable<number> {
    return this.textService.fontStyle(font);
  }

  fontWidth() {
    return this.textService.fontWidth();
  }

  freeFont(font: GameFont): Observable<void> {
    return this.textService.freeFont(font);
  }

  loadFont(fontName: string, size: number, bold?: boolean, italic?: boolean, underline?: boolean): Observable<GameFont> {
    return this.textService.loadFont(fontName, size, bold, italic, underline);
  }

  locate(x: number, y: number): Observable<void> {
    return this.textService.locate(x, y);
  }

  print(text: string): Observable<void> {
    return this.textService.print(text);
  }

  setFont(font: GameFont): Observable<void> {
    return this.textService.setFont(font);
  }

  stringHeight(text: string): Observable<number> {
    return this.textService.stringHeight(text);
  }

  stringWidth(text: string): Observable<number> {
    return this.textService.stringWidth(text);
  }

  text(x: number, y: number, text: string, centerX?: boolean, centerY?: boolean): Observable<void> {
    return this.textService.text(x, y, text, centerX, centerY);
  }

  write(text: string): Observable<void> {
    return this.textService.write(text);
  }
}
