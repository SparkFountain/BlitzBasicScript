import { Injectable } from '@angular/core';
import { CommandsBasicsDiverseService } from './basics/diverse.service';
import { CommandsBasicsMathsService } from './basics/maths.service';
import { CommandsBasicsStringsService } from './basics/strings.service';
import { CommandsBasicsTimeRandomService } from './basics/time-random.service';

@Injectable()
export class CommandsBasicsService {
  constructor(
    private diverse: CommandsBasicsDiverseService,
    private maths: CommandsBasicsMathsService,
    private strings: CommandsBasicsStringsService,
    private timeRandom: CommandsBasicsTimeRandomService
  ) {}

  // TODO: remove later, only for testing purposes
  test(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      // the function is executed automatically when the promise is constructed

      // after 1 second signal that the job is done with the result "done"
      setTimeout(() => resolve(), 1000);
    });
  }

  // DIVERSE
  appTitle(title: string): Promise<void> {
    return this.diverse.appTitle(title);
  }

  commandLine(): Promise<void> {
    return this.diverse.commandLine();
  }

  debugLog(message: string): Promise<void> {
    return this.diverse.debugLog(message);
  }

  getEnv(): Promise<any> {
    return this.diverse.getEnv();
  }

  runtimeError(): Promise<void> {
    return this.diverse.runtimeError();
  }

  runtimeStats(): Promise<void> {
    return this.diverse.runtimeStats();
  }

  setEnv(): Promise<void> {
    return this.diverse.setEnv();
  }

  systemProperty(): Promise<void> {
    return this.diverse.systemProperty();
  }

  // MATHS
  abs(number: number): Promise<number> {
    return this.maths.abs(number);
  }

  acos(number): Promise<number> {
    return this.maths.acos(number);
  }

  asin(value): Promise<number> {
    return this.maths.asin(value);
  }

  atan(value): Promise<number> {
    return this.maths.atan(value);
  }

  atan2(y, x): Promise<number> {
    return this.maths.atan2(y, x);
  }

  bin(value): Promise<string> {
    return this.maths.bin(value);
  }

  ceil(value): Promise<number> {
    return this.maths.ceil(value);
  }

  cos(value): Promise<number> {
    return this.maths.cos(value);
  }

  exp(value): Promise<number> {
    return this.maths.exp(value);
  }

  float(value): Promise<number> {
    return this.maths.float(value);
  }

  floor(value): Promise<number> {
    return this.maths.floor(value);
  }

  hex(value): Promise<string> {
    return this.maths.hex(value);
  }

  int(value): Promise<number> {
    return this.maths.int(value);
  }

  log(value): Promise<number> {
    return this.maths.log(value);
  }

  log10(value): Promise<number> {
    return this.maths.log10(value);
  }

  pi(): Promise<number> {
    return this.maths.pi();
  }

  sar(number, bits): Promise<number> {
    return this.maths.sar(number, bits);
  }

  sgn(value): Promise<number> {
    return this.maths.sgn(value);
  }

  shl(number, bits): Promise<number> {
    return this.maths.shl(number, bits);
  }

  shr(number, bits): Promise<number> {
    return this.maths.shr(number, bits);
  }

  sin(value): Promise<number> {
    return this.maths.sin(value);
  }

  sqr(value): Promise<number> {
    return this.maths.sqr(value);
  }

  tan(value): Promise<number> {
    return this.maths.tan(value);
  }

  // STRINGS
  asc(string: string): Promise<number> {
    return this.strings.asc(string);
  }

  chr(value: number): Promise<string> {
    return this.strings.chr(value);
  }

  instr(text: string, search: string, start: number): Promise<number> {
    return this.strings.instr(text, search, start);
  }

  left(text: string, count: number): Promise<string> {
    return this.strings.left(text, count);
  }

  len(text: string): Promise<number> {
    return this.strings.len(text);
  }

  lower(text: string): Promise<string> {
    return this.strings.lower(text);
  }

  lset(text: string, count: number): Promise<string> {
    return this.strings.lset(text, count);
  }

  mid(text: string, start: number, count: number): Promise<string> {
    return this.strings.mid(text, start, count);
  }

  replace(text: string, search: string, replace: string): Promise<string> {
    return this.strings.replace(text, search, replace);
  }

  right(text: string, count: number): Promise<string> {
    return this.strings.right(text, count);
  }

  rset(text: string, count: number): Promise<string> {
    return this.strings.rset(text, count);
  }

  str(value: number): Promise<string> {
    return this.strings.str(value);
  }

  string(text: string, count: number): Promise<string> {
    return this.strings.string(text, count);
  }

  trim(text: string): Promise<string> {
    return this.strings.trim(text);
  }

  upper(text: string): Promise<string> {
    return this.strings.upper(text);
  }

  // TIME AND RANDOM
  createTimer(): Promise<any> {
    return this.timeRandom.createTimer();
  }

  currentDate(): Promise<string> {
    return this.timeRandom.currentDate();
  }

  currentTime(): Promise<string> {
    return this.timeRandom.currentTime();
  }

  delay(milliSeconds: number): Promise<void> {
    return this.timeRandom.delay(milliSeconds);
  }

  freeTimer(): Promise<void> {
    return this.timeRandom.freeTimer();
  }

  milliSecs() {
    return this.timeRandom.milliSecs();
  }

  pauseTimer() {
    return this.timeRandom.pauseTimer();
  }

  rand(minOrMax: number, max?: number): Promise<number> {
    return this.timeRandom.rand(minOrMax, max);
  }

  resetTimer() {
    return this.timeRandom.resetTimer();
  }

  resumeTimer() {
    return this.timeRandom.resumeTimer();
  }

  rnd(minOrMax: number, max: number): Promise<number> {
    return this.timeRandom.rnd(minOrMax, max);
  }

  rndSeed() {
    return this.timeRandom.rndSeed();
  }

  seedRnd(value: string): Promise<void> {
    return this.timeRandom.seedRnd(value);
  }

  timerTicks() {
    return this.timeRandom.timerTicks();
  }

  waitTimer() {
    return this.timeRandom.waitTimer();
  }
}
