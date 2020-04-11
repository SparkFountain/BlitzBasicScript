import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsTimeRandomService {
  constructor() {}

  createTimer(): Promise<any> {
    return null;
  }

  currentDate(): Promise<string> {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Promise.resolve(day + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear());
  }

  currentTime(): Promise<string> {
    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Promise.resolve(hours + ':' + minutes + ':' + seconds);
  }

  delay(milliSeconds: number): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      setTimeout(() => {
        resolve();
      }, milliSeconds);
    });
  }

  freeTimer(): Promise<void> {
    return null;
  }

  milliSecs(): Promise<number> {
    return null;
  }

  pauseTimer(): Promise<void> {
    return null;
  }

  rand(minOrMax: number, max?: number): Promise<number> {
    if (max) {
      return Promise.resolve(Math.trunc(Math.random() * (max - minOrMax) + minOrMax));
    } else {
      return Promise.resolve(Math.trunc(Math.random() * minOrMax));
    }
  }

  resetTimer(): Promise<void> {
    return null;
  }

  resumeTimer(): Promise<void> {
    return null;
  }

  rnd(minOrMax: number, max: number): Promise<number> {
    if (max) {
      return Promise.resolve(Math.random() * (max - minOrMax) + minOrMax);
    } else {
      return Promise.resolve(Math.random() * minOrMax);
    }
  }

  rndSeed(): Promise<number> {
    return null;
  }

  seedRnd(value: string): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      // TODO: implementation, see https://stackoverflow.com/a/19303725
      // const x = Math.sin(seed++) * 10000;
      // return x - Math.floor(x);
      resolve();
    });
  }

  timerTicks(): Promise<number> {
    return null;
  }

  waitTimer(): Promise<void> {
    return null;
  }
}
