import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsDiverseService {
  constructor(/*private gameState: GameStateService*/) {}

  appTitle(title: string): Promise<void> {
    return Promise.resolve(null /*this.gameState.setAppTitle(title)*/);
  }

  commandLine(): Promise<void> {
    return null;
  }

  debugLog(message: string): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      console.log(message);
      resolve();
    });
  }

  getEnv(): Promise<any> {
    return null;
  }

  runtimeError(): Promise<void> {
    return null;
  }

  runtimeStats(): Promise<void> {
    return null;
  }

  setEnv(): Promise<void> {
    return null;
  }

  systemProperty(): Promise<void> {
    return null;
  }
}
