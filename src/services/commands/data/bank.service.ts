import { Injectable } from '@angular/core';

@Injectable()
export class CommandsDataBankService {
  constructor() {
    return null;
  }

  bankSize(bank: any): Promise<number> {
    return Promise.resolve(0);
  }

  copyBank(sourceBank: any, sourcePos: number, targetBank: any, targetPos: number, length?: number): Promise<any> {
    return null;
  }

  createBank(bytes?: number): Promise<any> {
    return null;
  }

  freeBank(bank: any): Promise<any> {
    return null;
  }

  peekByte(bank: any, pos: number): Promise<any> {
    return null;
  }

  peekFloat(bank: any, pos: number): Promise<any> {
    return null;
  }

  peekInt(bank: any, pos: number): Promise<any> {
    return null;
  }

  peekShort(bank: any, pos: number): Promise<any> {
    return null;
  }

  pokeByte(bank: any, pos: number, value: number): Promise<any> {
    return null;
  }

  pokeFloat(bank: any, pos: number, value: number): Promise<any> {
    return null;
  }

  pokeInt(bank: any, pos: number, value: number): Promise<any> {
    return null;
  }

  pokeShort(bank: any, pos: number, value: number): Promise<any> {
    return null;
  }

  readBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return null;
  }

  resizeBank(bank: any, bytes?: number): Promise<any> {
    return null;
  }

  writeBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return null;
  }
}
