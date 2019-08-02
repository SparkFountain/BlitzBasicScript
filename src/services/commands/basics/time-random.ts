import { Injectable } from '@angular/core';
import { Observable, of, Subscriber, timer } from 'rxjs';

@Injectable()
export class CommandsBasicsTimeRandom {
  constructor() {

  }

  createTimer() {
  }

  currentDate(): Observable<string> {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let date = new Date();
    let day = (
      date.getDate() < 10
    ) ? '0' + date.getDate() : date.getDate();
    return of(day + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear());
  }

  currentTime(): Observable<string> {
    let date = new Date();
    let hours = (
      date.getHours() < 10
    ) ? '0' + date.getHours() : date.getHours();
    let minutes = (
      date.getMinutes() < 10
    ) ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = (
      date.getSeconds() < 10
    ) ? '0' + date.getSeconds() : date.getSeconds();
    return of(hours + ':' + minutes + ':' + seconds);
  }

  delay(milliSeconds: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      timer(milliSeconds).subscribe(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  freeTimer() {
  }

  milliSecs() {
  }

  pauseTimer() {
  }

  rand(minOrMax: number, max?: number): Observable<number> {
    if (max) {
      return of(Math.trunc(Math.random() * (max - minOrMax) + minOrMax));
    } else {
      return of(Math.trunc(Math.random() * minOrMax));
    }
  }

  resetTimer() {
  }

  resumeTimer() {
  }

  rnd(minOrMax: number, max: number): Observable<number> {
    if (max) {
      return of(Math.random() * (max - minOrMax) + minOrMax);
    } else {
      return of(Math.random() * minOrMax);
    }
  }

  rndSeed() {
  }

  seedRnd(value: string): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      // TODO: implementation, see https://stackoverflow.com/a/19303725
      // const x = Math.sin(seed++) * 10000;
      // return x - Math.floor(x);
      observer.next();
      observer.complete();
    });
  }

  timerTicks() {
  }

  waitTimer() {
  }
}
