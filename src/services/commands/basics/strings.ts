import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class CommandsBasicsStrings {
  constructor() {

  }

  asc(string: string): Observable<number> {
    return of(string.charCodeAt(0));
  }

  chr(value: number): Observable<string> {
    return of(String.fromCharCode(value));
  }

  instr(text: string, search: string, start: number): Observable<number> {
    //remember, BlitzBasic indexes start at 1, not 0
    if (!start) {
      start = 1;
    }
    let posIndex0 = text.indexOf(search, start - 1);
    return of(posIndex0 + 1);
  }

  left(text: string, count: number): Observable<string> {
    return of(text.substr(0, count));
  }

  len(text: string): Observable<number> {
    return of(text.length);
  }

  lower(text: string): Observable<string> {
    return of(text.toLowerCase());
  }

  lset(text: string, count: number): Observable<string> {
    let len = text.length;
    if (len > count) {
      //strip text to the given count
      return of(text.substr(0, count));
    } else {
      //fill string with space characters until it has the count length
      return of(text + Array(count - len).join(' '));
    }
  }

  mid(text: string, start: number, count: number): Observable<string> {
    if (count) {
      return of(text.substr(start, count));
    } else {
      return of(text.substr(start));
    }
  }

  replace(text: string, search: string, replace: string): Observable<string> {
    return of(text.replace(new RegExp(search, 'g'), replace));
  }

  right(text: string, count: number): Observable<string> {
    return of(text.substr(-count));
  }

  rset(text: string, count: number): Observable<string> {
    let len = text.length;
    if (len > count) {
      //strip text to the given count
      return of(text.substr(-count));
    } else {
      //fill string with space characters until it has the count length
      return of(Array(count - len).join(' ') + text);
    }
  }

  str(value: number): Observable<string> {
    return of(value.toString());
  }

  string(text: string, count: number): Observable<string> {
    return of(Array(count).join(text));
  }

  trim(text: string): Observable<string> {
    return of(text.trim());
  }

  upper(text: string): Observable<string> {
    return of(text.toUpperCase());
  }
}
