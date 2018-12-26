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

  debugLog(message: string): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      console.log(message);

      observer.next();
      observer.complete();
    });
  }

  runtimeError() {

  }
}
