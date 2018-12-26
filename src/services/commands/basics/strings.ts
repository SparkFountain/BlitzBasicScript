import {Injectable} from '@angular/core';

@Injectable()
export class CommandsBasicsStrings {
  constructor() {

  }

  asc(string: string): number {
    return string.charCodeAt(0);
  }

  chr(value: number): string {
    return String.fromCharCode(value);
  }

  instr(text: string, search: string, start: number): number {
    //remember, BlitzBasic indexes start at 1, not 0
    if (!start) {
      start = 1;
    }
    let posIndex0 = text.indexOf(search, start - 1);
    return posIndex0 + 1;
  }

  left(text: string, count: number): string {
    return text.substr(0, count);
  }

  len(text: string): number {
    return text.length;
  }

  lower(text: string): string {
    return text.toLowerCase();
  }

  lset(text: string, count: number): string {
    let len = text.length;
    if (len > count) {
      //strip text to the given count
      return text.substr(0, count);
    } else {
      //fill string with space characters until it has the count length
      return text + Array(count - len).join(' ');
    }
  }

  mid(text: string, start: number, count: number): string {
    if (count) {
      return text.substr(start, count);
    } else {
      return text.substr(start);
    }
  }

  replace(text: string, search: string, replace: string): string {
    return text.replace(new RegExp(search, 'g'), replace);
  }

  right(text: string, count: number): string {
    return text.substr(-count);
  }

  rset(text: string, count: number): string {
    let len = text.length;
    if (len > count) {
      //strip text to the given count
      return text.substr(-count);
    } else {
      //fill string with space characters until it has the count length
      return Array(count - len).join(' ') + text;
    }
  }

  str(value: number): string {
    return value.toString();
  }

  string(text: string, count: number): string {
    return Array(count).join(text);
  }

  trim(text: string): string {
    return text.trim();
  }

  upper(text: string): string {
    return text.toUpperCase();
  }
}
