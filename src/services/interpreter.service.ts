import { Injectable } from '@angular/core';
import { CommandsBasicsService } from './commands/basics.service';
import { CommandsDataService } from './commands/data.service';
import { CommandsGraphics2DService } from './commands/graphics2d.service';
import { CommandsGraphics3DService } from './commands/graphics3d.service';
import { CommandsGUIService } from './commands/gui.service';
import { CommandsIOService } from './commands/io.service';
import { CommandsSoundService } from './commands/sound.service';

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
    const cmdLower: string = command.toLowerCase();
    switch (cmdLower) {
      // BASICS - DIVERSE
      case 'apptitle':
        return this.basics.appTitle(params[0]);
      case 'commandline':
        return this.basics.commandLine();
      case 'debuglog':
        return this.basics.debugLog(params[0]);
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
        return this.basics.abs(params[0]);
      case 'acos':
        return this.basics.acos(params[0]);
      case 'asin': return this.basics.asin(params[0]);
      case 'atan': return this.basics.atan(params[0]);
      case 'atan2': return this.basics.atan2(params[0], params[1]);
      case 'bin': return this.basics.bin(params[0]);
      case 'ceil': return this.basics.ceil(params[0]);
      case 'cos': return this.basics.cos(params[0]);
      case 'exp': return this.basics.exp(params[0]);
      case 'float': return this.basics.float(params[0]);
      case 'floor': return this.basics.floor(params[0]);
      case 'hex': return this.basics.hex(params[0])
      case 'int': return this.basics.int(params[0])
      case 'log': return this.basics.log(params[0]);
      case 'log10': return this.basics.log10(params[0]);
      case 'pi': return this.basics.pi();
      case 'sar': return this.basics.sar(params[0], params[1]);
      case 'sgn': return this.basics.sgn(params[0]);
      case 'shl': return this.basics.shl(params[0], params[1]);
      case 'shr': return this.basics.shr(params[0], params[1]);
      case 'sin': return this.basics.sin(params[0]);
      case 'sqr': return this.basics.sqr(params[0]);
      case 'tan': return this.basics.tan(params[0]);
      // BASICS - STRINGS
      case 'asc': return this.basics.asc(params[0]);
      case 'chr': return this.basics.chr(params[0]);
      case 'instr': return this.basics.instr(params[0], params[1], params[2]);
      case 'left': return this.basics.left(params[0], params[1]);
      case 'len': return this.basics.len(params[0]);
      case 'lower': return this.basics.lower(params[0]);
      case 'lset': return this.basics.lset(params[0], params[1]);
      case 'mid': return this.basics.mid(params[0], params[1], params[2]);
      case 'replace': return this.basics.replace(params[0], params[1], params[2]);
      case 'right': return this.basics.right(params[0], params[1]);
      case 'rset': return this.basics.rset(params[0], params[1]);
      case 'str': return this.basics.str(params[0]);
      case 'string': return this.basics.string(params[0], params[1]);
      case 'trim': return this.basics.trim(params[0]);
      case 'upper': return this.basics.upper(params[0]);
      // BASICS - TIME AND RANDOM
      case 'createtimer': return this.basics.createTimer();
      case 'currentdate': return this.basics.currentDate();
      case 'currenttime': return this.basics.currentTime();
      case 'delay': return this.basics.delay(params[0]);
      case 'freetimer': return this.basics.freeTimer();
      case 'millisecs': return this.basics.milliSecs();
      case 'pausetimer': return this.basics.pauseTimer();
      case 'rand': return this.basics.rand(params[0], params[1]);
      case 'resettimer': return this.basics.resetTimer();
      case 'resumetimer': return this.basics.resumeTimer();
      case 'rnd': return this.basics.rnd(params[0], params[1]);
      case 'rndseed': return this.basics.rndSeed();
      case 'seedrnd': return this.basics.seedRnd(params[0]);
      case 'timerticks': return this.basics.timerTicks();
      case 'waittimer': return this.basics.waitTimer();
    }

    return null;
  }
}
