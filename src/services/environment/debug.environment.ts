import {Injectable} from '@angular/core';

@Injectable()
export class DebugEnvironment {
  private server: string;

  constructor() {
    this.server = 'https://blitzbasicscript.com';
  }

  getServer(): string {
    return this.server;
  }
}
