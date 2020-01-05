import {Observable, of, Subscriber} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CommandsBasicsDiverseService {
    constructor(/*private gameState: GameStateService*/) {

    }

    appTitle(title: string): Observable<void> {
        return of(null/*this.gameState.setAppTitle(title)*/);
    }

    commandLine() {

    }

    debugLog(message: string): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            console.log(message);

            observer.next();
            observer.complete();
        });
    }

    getEnv() {
    }

    runtimeError() {

    }

    runtimeStats() {
    }

    setEnv() {
    }

    systemProperty() {
    }
}
