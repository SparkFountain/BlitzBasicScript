import {Injectable} from '@angular/core';

@Injectable()
export class CommandsGraphics3dAnimations {
  constructor() {

  }

  addAnimSeq(entity: any, duration: number): number {
    return 0;
  }

  animate(entity: any, mode?: number, speed?: number, sequenceId?: number, transition?: number): void {

  }

  animating(entity: any): boolean {
    return false;
  }

  animLength(entity: any): number {
    return 0;
  }

  animSeq(entity: any): number {
    return 0;
  }

  animTime(entity: any): number {
    return 0;
  }

  extractAnimSeq(entity: any, start: number, end: number, animSeq?: number): number {
    return 0;
  }

  loadAnimSeq(entity: any, filePath: string): number {
    return 0;
  }

  setAnimKey(entity: any, frame: number, translation?: boolean, rotation?: boolean, scaling?: boolean): void {

  }

  setAnimTime(entity: any, time: number, sequenceId?: number): void {

  }
}
