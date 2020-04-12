import { Injectable } from '@angular/core';
import { CommandsBasicsService } from './commands/basics.service';
import { CommandsDataService } from './commands/data.service';
import { CommandsGraphics2DService } from './commands/graphics2d.service';
import { CommandsGraphics3DService } from './commands/graphics3d.service';
import { CommandsGUIService } from './commands/gui.service';
import { CommandsIOService } from './commands/io.service';
import { CommandsSoundService } from './commands/sound.service';
import { Expression } from '../types/expression';
import { NumericExpression } from '../classes/expressions/numerical-expression';
import { BooleanExpression } from '../classes/expressions/boolean-expression';
import { StringExpression } from '../classes/expressions/string-expression';
import { Assignment } from '../classes/assignment';
import { GameStateService } from './game-state.service';
import { CommandStatement } from '../classes/command';
import { VariableExpression } from '../classes/expressions/variable-expression';
import { ArithmeticExpression } from '../classes/expressions/arithmetic-expression';
import { Term } from '../types/arithmetic-term';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  constructor(
    private basics: CommandsBasicsService,
    private data: CommandsDataService,
    private graphics2d: CommandsGraphics2DService,
    private graphics3d: CommandsGraphics3DService,
    private gui: CommandsGUIService,
    private io: CommandsIOService,
    private sound: CommandsSoundService,
    private gameState: GameStateService
  ) {}

  public async executeCommand(command: CommandStatement): Promise<any> {
    // console.info('EXECUTE COMMAND', command);

    const expressionsToEvaluate: Promise<any>[] = [];
    command.params.forEach((p: Expression) => expressionsToEvaluate.push(this.evaluateExpression(p)));
    const evaluatedParams: any[] = await Promise.all(expressionsToEvaluate);
    // console.info('Evaluated Params:', evaluatedParams);

    const cmdLower: string = command.name.toLowerCase();
    switch (cmdLower) {
      // BASICS - DIVERSE
      case 'apptitle':
        return this.basics.appTitle(evaluatedParams[0]);
      case 'commandline':
        return this.basics.commandLine();
      case 'debuglog':
        return this.basics.debugLog(evaluatedParams[0]);
      case 'getenv':
        return this.basics.getEnv();
      case 'runtimeerror':
        return this.basics.runtimeError();
      case 'runtimestats':
        return this.basics.runtimeStats();
      case 'setenv':
        return this.basics.setEnv();
      case 'systemproperty':
        return this.basics.systemProperty();
      // BASICS - MATHS
      case 'abs':
        return this.basics.abs(evaluatedParams[0]);
      case 'acos':
        return this.basics.acos(evaluatedParams[0]);
      case 'asin':
        return this.basics.asin(evaluatedParams[0]);
      case 'atan':
        return this.basics.atan(evaluatedParams[0]);
      case 'atan2':
        return this.basics.atan2(evaluatedParams[0], evaluatedParams[1]);
      case 'bin':
        return this.basics.bin(evaluatedParams[0]);
      case 'ceil':
        return this.basics.ceil(evaluatedParams[0]);
      case 'cos':
        return this.basics.cos(evaluatedParams[0]);
      case 'exp':
        return this.basics.exp(evaluatedParams[0]);
      case 'float':
        return this.basics.float(evaluatedParams[0]);
      case 'floor':
        return this.basics.floor(evaluatedParams[0]);
      case 'hex':
        return this.basics.hex(evaluatedParams[0]);
      case 'int':
        return this.basics.int(evaluatedParams[0]);
      case 'log':
        return this.basics.log(evaluatedParams[0]);
      case 'log10':
        return this.basics.log10(evaluatedParams[0]);
      case 'pi':
        return this.basics.pi();
      case 'sar':
        return this.basics.sar(evaluatedParams[0], evaluatedParams[1]);
      case 'sgn':
        return this.basics.sgn(evaluatedParams[0]);
      case 'shl':
        return this.basics.shl(evaluatedParams[0], evaluatedParams[1]);
      case 'shr':
        return this.basics.shr(evaluatedParams[0], evaluatedParams[1]);
      case 'sin':
        return this.basics.sin(evaluatedParams[0]);
      case 'sqr':
        return this.basics.sqr(evaluatedParams[0]);
      case 'tan':
        return this.basics.tan(evaluatedParams[0]);
      // BASICS - STRINGS
      case 'asc':
        return this.basics.asc(evaluatedParams[0]);
      case 'chr':
        return this.basics.chr(evaluatedParams[0]);
      case 'instr':
        return this.basics.instr(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'left':
        return this.basics.left(evaluatedParams[0], evaluatedParams[1]);
      case 'len':
        return this.basics.len(evaluatedParams[0]);
      case 'lower':
        return this.basics.lower(evaluatedParams[0]);
      case 'lset':
        return this.basics.lset(evaluatedParams[0], evaluatedParams[1]);
      case 'mid':
        return this.basics.mid(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'replace':
        return this.basics.replace(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'right':
        return this.basics.right(evaluatedParams[0], evaluatedParams[1]);
      case 'rset':
        return this.basics.rset(evaluatedParams[0], evaluatedParams[1]);
      case 'str':
        return this.basics.str(evaluatedParams[0]);
      case 'string':
        return this.basics.string(evaluatedParams[0], evaluatedParams[1]);
      case 'trim':
        return this.basics.trim(evaluatedParams[0]);
      case 'upper':
        return this.basics.upper(evaluatedParams[0]);
      // BASICS - TIME AND RANDOM
      case 'createtimer':
        return this.basics.createTimer();
      case 'currentdate':
        return this.basics.currentDate();
      case 'currenttime':
        return this.basics.currentTime();
      case 'delay':
        return this.basics.delay(evaluatedParams[0]);
      case 'freetimer':
        return this.basics.freeTimer();
      case 'millisecs':
        return this.basics.milliSecs();
      case 'pausetimer':
        return this.basics.pauseTimer();
      case 'rand':
        return this.basics.rand(evaluatedParams[0], evaluatedParams[1]);
      case 'resettimer':
        return this.basics.resetTimer();
      case 'resumetimer':
        return this.basics.resumeTimer();
      case 'rnd':
        return this.basics.rnd(evaluatedParams[0], evaluatedParams[1]);
      case 'rndseed':
        return this.basics.rndSeed();
      case 'seedrnd':
        return this.basics.seedRnd(evaluatedParams[0]);
      case 'timerticks':
        return this.basics.timerTicks();
      case 'waittimer':
        return this.basics.waitTimer();
      // DATA - BANKS
      case 'banksize':
        return this.data.bankSize(evaluatedParams[0]);
      case 'copybank':
        return this.data.copyBank(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'createbank':
        return this.data.createBank(evaluatedParams[0]);
      case 'freebank':
        return this.data.freeBank(evaluatedParams[0]);
      case 'peekbyte':
        return this.data.peekByte(evaluatedParams[0], evaluatedParams[1]);
      case 'peekfloat':
        return this.data.peekFloat(evaluatedParams[0], evaluatedParams[1]);
      case 'peekint':
        return this.data.peekInt(evaluatedParams[0], evaluatedParams[1]);
      case 'peekshort':
        return this.data.peekShort(evaluatedParams[0], evaluatedParams[1]);
      case 'pokebyte':
        return this.data.pokeByte(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokefloat':
        return this.data.pokeFloat(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokeint':
        return this.data.pokeInt(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokeshort':
        return this.data.pokeShort(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'readbytes':
        return this.data.readBytes(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      case 'resizebank':
        return this.data.resizeBank(evaluatedParams[0], evaluatedParams[1]);
      case 'writebytes':
        return this.data.writeBytes(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      // DATA - FILE SYSTEM
      case 'changedir':
        return this.data.changeDir();
      case 'closedir':
        return this.data.closeDir();
      case 'closefile':
        return this.data.closeFile();
      case 'copyfile':
        return this.data.copyFile();
      case 'createdir':
        return this.data.createDir();
      case 'currentdir':
        return this.data.currentDir();
      case 'deletedir':
        return this.data.deleteDir();
      case 'deletefile':
        return this.data.deleteFile();
      case 'eof':
        return this.data.eof();
      case 'filepos':
        return this.data.filePos();
      case 'filesize':
        return this.data.fileSize();
      case 'filetype':
        return this.data.fileType();
      case 'morefiles':
        return this.data.moreFiles();
      case 'nextfile':
        return this.data.nextFile();
      case 'openfile':
        return this.data.openFile();
      case 'readavail':
        return this.data.readAvail();
      case 'readbyte':
        return this.data.readByte();
      case 'readdir':
        return this.data.readDir();
      case 'readfile':
        return this.data.readFile();
      case 'readfloat':
        return this.data.readFloat();
      case 'readint':
        return this.data.readInt();
      case 'readline':
        return this.data.readLine();
      case 'readshort':
        return this.data.readShort();
      case 'readstring':
        return this.data.readString();
      case 'seekfile':
        return this.data.seekFile();
      case 'writebyte':
        return this.data.writeByte();
      case 'writefile':
        return this.data.writeFile();
      case 'writefloat':
        return this.data.writeFloat();
      case 'writeint':
        return this.data.writeInt();
      case 'writeline':
        return this.data.writeLine();
      case 'writeshort':
        return this.data.writeShort();
      case 'writestring':
        return this.data.writeString();
      // GRAPHICS 2D - DISPLAY
      case 'endgraphics':
        return this.graphics2d.endGraphics();
      case 'gfxmodedepth':
        return this.graphics2d.gfxModeDepth();
      case 'gfxmodeexists':
        return this.graphics2d.gfxModeExists();
      case 'graphics':
        return this.graphics2d.graphics(evaluatedParams[0], evaluatedParams[1]);
      case 'graphicsdepth':
        return this.graphics2d.graphicsDepth();
      case 'graphicsheight':
        return this.graphics2d.graphicsHeight();
      case 'graphicswidth':
        return this.graphics2d.graphicsWidth();
      // GRAPHICS 2D - GRAPHICS
      case 'cls':
        return this.graphics2d.cls();
      case 'clscolor':
        return this.graphics2d.clsColor(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'color':
        return this.graphics2d.color(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'line':
        return this.graphics2d.line(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      case 'origin':
        return this.graphics2d.origin(evaluatedParams[0], evaluatedParams[1]);
      case 'oval':
        return this.graphics2d.oval(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'rect':
        return this.graphics2d.rect(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'viewport':
        return this.graphics2d.viewport(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      // GRAPHICS 2D - IMAGES
      case 'automidhandle':
        return this.graphics2d.autoMidHandle(evaluatedParams[0]);
      case 'copyimage':
        return this.graphics2d.copyImage(evaluatedParams[0]);
      case 'createimage':
        return this.graphics2d.createImage(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'drawblock':
        return this.graphics2d.drawBlock(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3]
        );
      case 'drawblockrect':
        return this.graphics2d.drawBlockRect(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4],
          evaluatedParams[5],
          evaluatedParams[6],
          evaluatedParams[7]
        );
      case 'drawimage':
        return this.graphics2d.drawImage(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3]
        );
      case 'drawimagerect':
        return this.graphics2d.drawImageRect();
      case 'freeimage':
        return this.graphics2d.freeImage(evaluatedParams[0]);
      case 'grabimage':
        return this.graphics2d.grabImage();
      case 'handleimage':
        return this.graphics2d.handleImage(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'imageheight':
        return this.graphics2d.imageHeight(evaluatedParams[0]);
      case 'imagerectcollide':
        return this.graphics2d.imageRectCollide(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4],
          evaluatedParams[5],
          evaluatedParams[6],
          evaluatedParams[7]
        );
      case 'imagerectoverlap':
        return this.graphics2d.imageRectOverlap();
      case 'imagescollide':
        return this.graphics2d.imagesCollide(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4],
          evaluatedParams[5],
          evaluatedParams[6],
          evaluatedParams[7]
        );
      case 'imagesoverlap':
        return this.graphics2d.imagesOverlap(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4],
          evaluatedParams[5]
        );
      case 'imagewidth':
        return this.graphics2d.imageWidth(evaluatedParams[0]);
      case 'imagexhandle':
        return this.graphics2d.imageXHandle(evaluatedParams[0]);
      case 'imageyhandle':
        return this.graphics2d.imageYHandle(evaluatedParams[0]);
      case 'loadanimimage':
        return this.graphics2d.loadAnimImage(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'loadimage':
        return this.graphics2d.loadImage(evaluatedParams[0]);
      case 'maskimage':
        return this.graphics2d.maskImage(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3]
        );
      case 'midhandle':
        return this.graphics2d.midHandle(evaluatedParams[0]);
      case 'rectsoverlap':
        return this.graphics2d.rectsOverlap(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4],
          evaluatedParams[5],
          evaluatedParams[6],
          evaluatedParams[7]
        );
      case 'resizeimage':
        return this.graphics2d.resizeImage(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'rotateimage':
        return this.graphics2d.rotateImage(evaluatedParams[0], evaluatedParams[1]);
      case 'saveimage':
        return this.graphics2d.saveImage();
      case 'scaleimage':
        return this.graphics2d.scaleImage(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'tileblock':
        return this.graphics2d.tileBlock(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3]
        );
      case 'tileimage':
        return this.graphics2d.tileImage();
      // GRAPHICS 2D - MOVIES
      case 'closemovie':
        return this.graphics2d.closeMovie(evaluatedParams[0]);
      case 'drawmovie':
        return this.graphics2d.drawMovie(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'movieheight':
        return this.graphics2d.movieHeight(evaluatedParams[0]);
      case 'movieplaying':
        return this.graphics2d.moviePlaying(evaluatedParams[0]);
      case 'moviewidth':
        return this.graphics2d.movieWidth(evaluatedParams[0]);
      case 'openmovie':
        return this.graphics2d.openMovie(evaluatedParams[0]);
      // GRAPHICS 2D - PIXEL
      case 'colorblue':
        return this.graphics2d.colorBlue();
      case 'colorgreen':
        return this.graphics2d.colorGreen();
      case 'colorRed':
        return this.graphics2d.colorRed();
      case 'plot':
        return this.graphics2d.plot(evaluatedParams[0], evaluatedParams[1]);
      case 'fontascent':
        return this.graphics2d.fontAscent(evaluatedParams[0]);
      case 'fontdescent':
        return this.graphics2d.fontDescent(evaluatedParams[0]);
      case 'fontheight':
        return this.graphics2d.fontHeight(evaluatedParams[0]);
      case 'fontname':
        return this.graphics2d.fontName(evaluatedParams[0]);
      case 'fontsize':
        return this.graphics2d.fontSize(evaluatedParams[0]);
      case 'fontstyle':
        return this.graphics2d.fontStyle(evaluatedParams[0]);
      case 'fontwidth':
        return this.graphics2d.fontWidth(evaluatedParams[0]);
      case 'freefont':
        return this.graphics2d.freeFont(evaluatedParams[0]);
      case 'loadfont':
        return this.graphics2d.loadFont(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'locate':
        return this.graphics2d.locate(evaluatedParams[0], evaluatedParams[1]);
      case 'print':
        return this.graphics2d.print(evaluatedParams[0]);
      case 'setfont':
        return this.graphics2d.setFont(evaluatedParams[0]);
      case 'stringheight':
        return this.graphics2d.stringHeight(evaluatedParams[0]);
      case 'stringwidth':
        return this.graphics2d.stringWidth(evaluatedParams[0]);
      case 'text':
        return this.graphics2d.text(
          evaluatedParams[0],
          evaluatedParams[1],
          evaluatedParams[2],
          evaluatedParams[3],
          evaluatedParams[4]
        );
      case 'write':
        return this.graphics2d.write(evaluatedParams[0]);
      // GRAPHICS 3D - ANIMATIONS
      case 'addanimseq':
        return this.graphics3d.addAnimSeq(evaluatedParams[0], evaluatedParams[1]);
      case 'animate':
        return this.graphics3d.animate(evaluatedParams[0], evaluatedParams[1]);
    }

    return null;
  }

  public async evaluateExpression(expression: Expression): Promise<any> {
    // console.info('Expression', expression);

    switch (expression.constructor.name) {
      case 'NumericExpression':
        return (expression as NumericExpression).value;
      case 'BooleanExpression':
        return (expression as BooleanExpression).value;
      case 'StringExpression':
        return (expression as StringExpression).value;
      case 'VariableExpression':
        const varExpr: VariableExpression = expression as VariableExpression;
        switch (varExpr.scope) {
          case 'const':
          case 'global':
            return this.gameState.getGlobal(varExpr.id);
        }
      case 'CommandStatement':
        return this.executeCommand(expression as CommandStatement);
      case 'ArithmeticExpression':
        const arithExpr: ArithmeticExpression = expression as ArithmeticExpression;

        const termsToEvaluate: Promise<string>[] = [];
        arithExpr.terms.forEach((term: Term) => termsToEvaluate.push(this.evaluateExpression(term)));
        const evaluatedTerms: any[] = await Promise.all(termsToEvaluate);

        let result = '';
        evaluatedTerms.forEach((term: string, index: number) => {
          result += term;
          if (index < arithExpr.terms.length - 1) {
            result += arithExpr.operators[index];
          }
        });
        return eval(result);
    }

    console.warn('Expression could not be evaluated:', expression);
    return null;
  }

  public async assign(assignment: Assignment): Promise<void> {
    const evaluatedExpression: any = await this.evaluateExpression(assignment.value);
    // console.info('evaluatedExpression:', evaluatedExpression);

    switch (assignment.scope) {
      case 'const':
      case 'global':
        this.gameState.setGlobal(assignment.id, evaluatedExpression);
    }
  }
}
