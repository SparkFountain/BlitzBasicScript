import { Injectable } from '@angular/core';
import { CommandsBasicsService } from './commands/basics.service';
import { CommandsDataService } from './commands/data.service';
import { CommandsGraphics2DService } from './commands/graphics2d.service';
import { CommandsGraphics3DService } from './commands/graphics3d.service';
import { CommandsGUIService } from './commands/gui.service';
import { CommandsIOService } from './commands/io.service';
import { CommandsSoundService } from './commands/sound.service';
import { Expression } from '../types/expression';
import { NumericalExpression } from '../classes/numerical-expression';
import { BooleanExpression } from '../classes/boolean-expression';
import { StringExpression } from '../classes/string-expression';

@Injectable({
  providedIn: 'root',
})
export class InterpreterService {
  constructor(
    private basics: CommandsBasicsService,
    private data: CommandsDataService,
    private graphics2d: CommandsGraphics2DService,
    private graphics3d: CommandsGraphics3DService,
    private gui: CommandsGUIService,
    private io: CommandsIOService,
    private sound: CommandsSoundService
  ) {}

  public executeCommand(command: string, params: any[]): Promise<any> {
    const evaluatedParams: any[] = params.map((p: any) => this.evaluateExpression(p));
    // console.info('Evaluated Params:', evaluatedParams);

    const cmdLower: string = command.toLowerCase();
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
      case 'banksize': return this.data.bankSize(evaluatedParams[0]);
      case 'copybank': return this.data.copyBank(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3], evaluatedParams[4]);
      case 'createbank': return this.data.createBank(evaluatedParams[0]);
      case 'freebank': return this.data.freeBank(evaluatedParams[0]);
      case 'peekbyte': return this.data.peekByte(evaluatedParams[0], evaluatedParams[1]);
      case 'peekfloat': return this.data.peekFloat(evaluatedParams[0], evaluatedParams[1]);
      case 'peekint': return this.data.peekInt(evaluatedParams[0], evaluatedParams[1]);
      case 'peekshort': return this.data.peekShort(evaluatedParams[0], evaluatedParams[1]);
      case 'pokebyte': return this.data.pokeByte(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokefloat': return this.data.pokeFloat(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokeint': return this.data.pokeInt(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'pokeshort': return this.data.pokeShort(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2]);
      case 'readbytes': return this.data.readBytes(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      case 'resizebank': return this.data.resizeBank(evaluatedParams[0], evaluatedParams[1]);
      case 'writebytes': return this.data.writeBytes(evaluatedParams[0], evaluatedParams[1], evaluatedParams[2], evaluatedParams[3]);
      // DATA - FILE SYSTEM
      case 'changedir': return this.data.changeDir();
      case 'closedir': return this.data.closeDir();
      case 'closefile': return this.data.closeFile();
      case 'copyfile': return this.data.copyFile();
      case 'createdir': return this.data.createDir();
      case 'currentdir': return this.data.currentDir();
      case 'deletedir': return this.data.deleteDir();
      case 'deletefile': return this.data.deleteFile();
      case 'eof': return this.data.eof();
      case 'filepos': return this.data.filePos();
      case 'filesize': return this.data.fileSize();
      case 'filetype': return this.data.fileType();
      case 'morefiles': return this.data.moreFiles();
      case 'nextfile': return this.data.nextFile();
      case 'openfile': return this.data.openFile();
      case 'readavail': return this.data.readAvail();
      case 'readbyte': return this.data.readByte();
      case 'readdir': return this.data.readDir();
      case 'readfile': return this.data.readFile();
      case 'readfloat': return this.data.readFloat();
      case 'readint': return this.data.readInt();
      case 'readline': return this.data.readLine();
      case 'readshort': return this.data.readShort();
      case 'readstring': return this.data.readString();
      case 'seekfile': return this.data.seekFile();
      case 'writebyte': return this.data.writeByte();
      case 'writefile': return this.data.writeFile();
      case 'writefloat': return this.data.writeFloat();
      case 'writeint': return this.data.writeInt();
      case 'writeline': return this.data.writeLine();
      case 'writeshort': return this.data.writeShort();
      case 'writestring': return this.data.writeString();
    }

    return null;
  }

  public evaluateExpression(expression: Expression): any {
    // console.info('Expression', expression);
    // console.info('Expression class:', expression.constructor.name);

    switch(expression.constructor.name) {
      case 'NumericalExpression':
        return (expression as NumericalExpression).value;
      case 'BooleanExpression':
        return (expression as BooleanExpression).value;
      case 'StringExpression':
        return (expression as StringExpression).value;
    }

    return null;
  }
}
