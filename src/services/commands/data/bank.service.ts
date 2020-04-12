import { Injectable } from '@angular/core';

@Injectable()
export class CommandsDataBankService {
  constructor() {}

  async bankSize(bank: any): Promise<number> {
    return 0;
  }

  async copyBank(
    sourceBank: any,
    sourcePos: number,
    targetBank: any,
    targetPos: number,
    length?: number
  ): Promise<any> {}

  async createBank(bytes?: number): Promise<any> {}

  async freeBank(bank: any): Promise<any> {}

  async peekByte(bank: any, pos: number): Promise<any> {}

  async peekFloat(bank: any, pos: number): Promise<any> {}

  async peekInt(bank: any, pos: number): Promise<any> {}

  async peekShort(bank: any, pos: number): Promise<any> {}

  async pokeByte(bank: any, pos: number, value: number): Promise<any> {}

  async pokeFloat(bank: any, pos: number, value: number): Promise<any> {}

  async pokeInt(bank: any, pos: number, value: number): Promise<any> {}

  async pokeShort(bank: any, pos: number, value: number): Promise<any> {}

  async readBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {}

  async resizeBank(bank: any, bytes?: number): Promise<any> {}

  async writeBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {}
}
