import { Injectable } from "@angular/core";
import { CommandsBasicsDiverseService } from './basics/diverse.service';
import { Observable, of } from 'rxjs';
import { CommandsBasicsMathsService } from './basics/maths.service';
import { CommandsBasicsStringsService } from './basics/strings.service';
import { CommandsBasicsTimeRandomService } from './basics/time-random.service';

@Injectable()
export class CommandsBasicsService {
  constructor(private diverse: CommandsBasicsDiverseService,
    private maths: CommandsBasicsMathsService,
    private strings: CommandsBasicsStringsService,
    private timeRandom: CommandsBasicsTimeRandomService
  ) {

  }

  // DIVERSE
  appTitle(title: string): Observable<void> {
    return this.diverse.appTitle(title);
  }

  commandLine() {
    return this.diverse.commandLine();
  }

  debugLog(message: string): Observable<void> {
    return this.diverse.debugLog(message);
  }

  getEnv() {
    return this.diverse.getEnv();
  }

  runtimeError() {
    return this.diverse.runtimeError();
  }

  runtimeStats() {
    return this.diverse.runtimeStats();
  }

  setEnv() {
    return this.diverse.setEnv();
  }

  systemProperty() {
    return this.diverse.systemProperty();
  }

  // MATHS
  abs(number: number): Observable<number> {
    return this.maths.abs(number);
  }

  acos(number): Observable<number> {
    return this.maths.acos(number);
  }

  asin(value): Observable<number> {
    return this.maths.asin(value);
  }

  atan(value): Observable<number> {
    return this.maths.atan(value);
  }

  atan2(y, x): Observable<number> {
    return this.maths.atan2(y, x);
  }

  bin(value): Observable<string> {
    return this.maths.bin(value);
  }

  ceil(value): Observable<number> {
    return this.maths.ceil(value);
  }

  cos(value): Observable<number> {
    return this.maths.cos(value);
  }

  exp(value): Observable<number> {
    return this.maths.exp(value);
  }

  float(value): Observable<number> {
    return this.maths.float(value);
  }

  floor(value): Observable<number> {
    return this.maths.floor(value);
  }

  hex(value): Observable<string> {
    return this.maths.hex(value);
  }

  int(value): Observable<number> {
    return this.maths.int(value);
  }

  log(value): Observable<number> {
    return this.maths.log(value);
  }

  log10(value): Observable<number> {
    return this.maths.log10(value);
  }

  pi(): Observable<number> {
    return this.maths.pi();
  }

  sar(number, bits): Observable<number> {
    return this.maths.sar(number, bits);
  }

  sgn(value): Observable<number> {
    return this.maths.sgn(value);
  }

  shl(number, bits): Observable<number> {
    return this.maths.shl(number, bits);
  }

  shr(number, bits): Observable<number> {
    return this.maths.shr(number, bits);
  }

  sin(value): Observable<number> {
    return this.maths.sin(value);
  }

  sqr(value): Observable<number> {
    return this.maths.sqr(value);
  }

  tan(value): Observable<number> {
    return this.maths.tan(value);
  }

  // STRINGS
  asc(string: string): Observable<number> {
    return this.strings.asc(string);
  }

  chr(value: number): Observable<string> {
    return this.strings.chr(value);
  }

  instr(text: string, search: string, start: number): Observable<number> {
    return this.strings.instr(text, search, start);
  }

  left(text: string, count: number): Observable<string> {
    return this.strings.left(text, count);
  }

  len(text: string): Observable<number> {
    return this.strings.len(text);
  }

  lower(text: string): Observable<string> {
    return this.strings.lower(text);
  }

  lset(text: string, count: number): Observable<string> {
    return this.strings.lset(text, count);
  }

  mid(text: string, start: number, count: number): Observable<string> {
    return this.strings.mid(text, start, count);
  }

  replace(text: string, search: string, replace: string): Observable<string> {
    return this.strings.replace(text, search, replace);
  }

  right(text: string, count: number): Observable<string> {
    return this.strings.right(text, count);
  }

  rset(text: string, count: number): Observable<string> {
    return this.strings.rset(text, count);
  }

  str(value: number): Observable<string> {
    return this.strings.str(value);
  }

  string(text: string, count: number): Observable<string> {
    return this.strings.string(text, count);
  }

  trim(text: string): Observable<string> {
    return this.strings.trim(text);
  }

  upper(text: string): Observable<string> {
    return this.strings.upper(text);
  }

  // TIME AND RANDOM
  createTimer() {
    return this.timeRandom.createTimer();
  }

  currentDate(): Observable<string> {
    return this.timeRandom.currentDate();
  }

  currentTime(): Observable<string> {
    return this.timeRandom.currentTime();
  }

  delay(milliSeconds: number): Observable<void> {
    return this.timeRandom.delay(milliSeconds);
  }

  freeTimer() {
    return this.timeRandom.freeTimer();
  }

  milliSecs() {
    return this.timeRandom.milliSecs();
  }

  pauseTimer() {
    return this.timeRandom.pauseTimer();
  }

  rand(minOrMax: number, max?: number): Observable<number> {
    return this.timeRandom.rand(minOrMax, max);
  }

  resetTimer() {
    return this.timeRandom.resetTimer();
  }

  resumeTimer() {
    return this.timeRandom.resumeTimer();
  }

  rnd(minOrMax: number, max: number): Observable<number> {
    return this.timeRandom.rnd(minOrMax, max);
  }

  rndSeed() {
    return this.timeRandom.rndSeed();
  }

  seedRnd(value: string): Observable<void> {
    return this.timeRandom.seedRnd(value);
  }

  timerTicks() {
    return this.timeRandom.timerTicks();
  }

  waitTimer() {
    return this.timeRandom.waitTimer();
  }
}
