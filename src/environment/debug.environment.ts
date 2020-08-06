import {Injectable} from '@angular/core';

@Injectable()
export class DebugEnvironment {
    private server: string;

    constructor() {
        this.server = 'http://localhost:4242';
    }

    getServer(): string {
        return this.server;
    }
}
