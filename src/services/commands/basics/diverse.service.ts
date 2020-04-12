import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsDiverseService {
  constructor(/*private gameState: GameStateService*/) {}

  async appTitle(title: string): Promise<void> {
    return Promise.resolve(null /*this.gameState.setAppTitle(title)*/);
  }

  async commandLine(): Promise<void> {
    return null;
  }

  async debugLog(message: string): Promise<void> {
    console.log(message);
  }

  async getEnv(): Promise<any> {}

  async runtimeError(): Promise<void> {}

  async runtimeStats(): Promise<void> {}

  async setEnv(): Promise<void> {}

  async systemProperty(): Promise<void> {}
}
