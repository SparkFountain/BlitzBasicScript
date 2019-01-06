import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class CommandsDataBank {
    constructor() {

    }

    bankSize(bank: any): Observable<number> {
      return of(0);
    }

    copyBank(sourceBank: any, sourcePos: number, targetBank: any, targetPos: number, length?: number) {
    }

    createBank(bytes?: number) {
    }

    freeBank(bank: any) {
    }

    peekByte(bank: any, pos: number) {
    }

    peekFloat(bank: any, pos: number) {
    }

    peekInt(bank: any, pos: number) {
    }

    peekShort(bank: any, pos: number) {
    }

    pokeByte(bank: any, pos: number, value: number) {
    }

    pokeFloat(bank: any, pos: number, value: number) {
    }

    pokeInt(bank: any, pos: number, value: number) {
    }

    pokeShort(bank: any, pos: number, value: number) {
    }

    readBytes(bank: any, stream: any, startPos: number, length: number) {
    }

    resizeBank(bank: any, bytes?: number) {
    }

    writeBytes(bank: any, stream: any, startPos: number, length: number) {
    }
}
