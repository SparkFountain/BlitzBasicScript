import {Observable, Subscriber} from 'rxjs';

export class CommandsBasicsDiverse {
  constructor() {

  }

  public appTitle(title: string): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      console.info('Setting AppTitle to', title);

      observer.next();
      observer.complete();
    });
  }

  commandLine() {

  }

  debugLog() {

  }

  runtimeError() {

  }
}
