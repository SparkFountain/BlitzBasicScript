import {Injectable} from '@angular/core';

@Injectable()
export class CommandsBasicsStringsService {
    constructor() {

    }

    asc(string: string): Promise<number> {
        return Promise.resolve(string.charCodeAt(0));
    }

    chr(value: number): Promise<string> {
        return Promise.resolve(String.fromCharCode(value));
    }

    instr(text: string, search: string, start: number): Promise<number> {
        //remember, BlitzBasic indexes start at 1, not 0
        if (!start) {
            start = 1;
        }
        let posIndex0 = text.indexOf(search, start - 1);
        return Promise.resolve(posIndex0 + 1);
    }

    left(text: string, count: number): Promise<string> {
        return Promise.resolve(text.substr(0, count));
    }

    len(text: string): Promise<number> {
        return Promise.resolve(text.length);
    }

    lower(text: string): Promise<string> {
        return Promise.resolve(text.toLowerCase());
    }

    lset(text: string, count: number): Promise<string> {
        let len = text.length;
        if (len > count) {
            //strip text to the given count
            return Promise.resolve(text.substr(0, count));
        } else {
            //fill string with space characters until it has the count length
            return Promise.resolve(text + Array(count - len).join(' '));
        }
    }

    mid(text: string, start: number, count: number): Promise<string> {
        if (count) {
            return Promise.resolve(text.substr(start, count));
        } else {
            return Promise.resolve(text.substr(start));
        }
    }

    replace(text: string, search: string, replace: string): Promise<string> {
        return Promise.resolve(text.replace(new RegExp(search, 'g'), replace));
    }

    right(text: string, count: number): Promise<string> {
        return Promise.resolve(text.substr(-count));
    }

    rset(text: string, count: number): Promise<string> {
        let len = text.length;
        if (len > count) {
            //strip text to the given count
            return Promise.resolve(text.substr(-count));
        } else {
            //fill string with space characters until it has the count length
            return Promise.resolve(Array(count - len).join(' ') + text);
        }
    }

    str(value: number): Promise<string> {
        return Promise.resolve(value.toString());
    }

    string(text: string, count: number): Promise<string> {
        return Promise.resolve(Array(count).join(text));
    }

    trim(text: string): Promise<string> {
        return Promise.resolve(text.trim());
    }

    upper(text: string): Promise<string> {
        return Promise.resolve(text.toUpperCase());
    }
}
