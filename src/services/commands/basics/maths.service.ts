import {Observable, of} from 'rxjs';

export class CommandsBasicsMathsService {
    constructor() {

    }

    abs(number: number): Observable<number> {
        return of(Math.abs(number));
    }

    acos(number): Observable<number> {
        return of(Math.acos(number));
    }

    asin(value): Observable<number> {
        return of(Math.asin(value));
    }

    atan(value): Observable<number> {
        return of(Math.atan(value));
    }

    atan2(y, x): Observable<number> {
        return of(Math.atan2(y, x));
    }

    bin(value): Observable<string> {
        return of(parseInt(value).toString(2));
    }

    ceil(value): Observable<number> {
        return of(Math.ceil(value));
    }

    cos(value): Observable<number> {
        return of(Math.cos(value));
    }

    exp(value): Observable<number> {
        return of(Math.exp(value));
    }

    float(value): Observable<number> {
        return of(parseFloat(value));
    }

    floor(value): Observable<number> {
        return of(Math.floor(value));
    }

    hex(value): Observable<string> {
        return of(parseInt(value).toString(16));
    }

    int(value): Observable<number> {
        return of(parseInt(value));
    }

    log(value): Observable<number> {
        return of(Math.log(value));
    }

    log10(value): Observable<number> {
        return of(Math.log(value) / Math.LN10);
    }

    pi(): Observable<number> {
        return of(Math.PI);
    }

    sar(number, bits): Observable<number> {
        return of(number >> bits);
    }

    sgn(value): Observable<number> {
        return of(Math.sign(value));
    }

    shl(number, bits): Observable<number> {
        return of(number << bits);
    }

    shr(number, bits): Observable<number> {
        return of(number >>> bits);
    }

    sin(value): Observable<number> {
        return of(Math.sin(value));
    }

    sqr(value): Observable<number> {
        return of(Math.sqrt(value));
    }

    tan(value): Observable<number> {
        return of(Math.tan(value));
    }
}
