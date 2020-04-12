import { Injectable } from '@angular/core';
import { CommandsDataBankService } from './data/bank.service';
import { CommandsDataFileSystemService } from './data/file-system.service';

@Injectable()
export class CommandsDataService {
  constructor(private bank: CommandsDataBankService, private fileSystem: CommandsDataFileSystemService) {}

  // BANK
  async bankSize(bank: any): Promise<number> {
    return this.bank.bankSize(bank);
  }

  async copyBank(
    sourceBank: any,
    sourcePos: number,
    targetBank: any,
    targetPos: number,
    length?: number
  ): Promise<any> {
    return this.bank.copyBank(sourceBank, sourcePos, targetBank, targetPos, length);
  }

  async createBank(bytes?: number): Promise<any> {
    return this.bank.createBank(bytes);
  }

  async freeBank(bank: any): Promise<any> {
    return this.bank.freeBank(bank);
  }

  async peekByte(bank: any, pos: number): Promise<any> {
    return this.bank.peekByte(bank, pos);
  }

  async peekFloat(bank: any, pos: number): Promise<any> {
    return this.bank.peekFloat(bank, pos);
  }

  async peekInt(bank: any, pos: number): Promise<any> {
    return this.bank.peekInt(bank, pos);
  }

  async peekShort(bank: any, pos: number): Promise<any> {
    return this.bank.peekShort(bank, pos);
  }

  async pokeByte(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeByte(bank, pos, value);
  }

  async pokeFloat(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeFloat(bank, pos, value);
  }

  async pokeInt(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeInt(bank, pos, value);
  }

  async pokeShort(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeShort(bank, pos, value);
  }

  async readBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return this.bank.readBytes(bank, stream, startPos, length);
  }

  async resizeBank(bank: any, bytes?: number): Promise<any> {
    return this.bank.resizeBank(bank, bytes);
  }

  async writeBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return this.bank.writeBytes(bank, stream, startPos, length);
  }

  // FILE SYSTEM
  async changeDir(): Promise<any> {
    return this.fileSystem.changeDir();
  }

  async closeDir(): Promise<any> {
    return this.fileSystem.closeDir();
  }

  async closeFile(): Promise<any> {
    return this.fileSystem.closeFile();
  }

  async copyFile(): Promise<any> {
    return this.fileSystem.copyFile();
  }

  async createDir(): Promise<any> {
    return this.fileSystem.createDir();
  }

  async currentDir(): Promise<any> {
    return this.fileSystem.currentDir();
  }

  async deleteDir(): Promise<any> {
    return this.fileSystem.deleteDir();
  }

  async deleteFile(): Promise<any> {
    return this.fileSystem.deleteFile();
  }

  async eof(): Promise<any> {
    return this.fileSystem.eof();
  }

  async filePos(): Promise<any> {
    return this.fileSystem.filePos();
  }

  async fileSize(): Promise<any> {
    return this.fileSystem.fileSize();
  }

  async fileType(): Promise<any> {
    return this.fileSystem.fileType();
  }

  async moreFiles(): Promise<any> {
    return this.fileSystem.moreFiles();
  }

  async nextFile(): Promise<any> {
    return this.fileSystem.nextFile();
  }

  async openFile(): Promise<any> {
    return this.fileSystem.openFile();
  }

  async readAvail(): Promise<any> {
    return this.fileSystem.readAvail();
  }

  async readByte(): Promise<any> {
    return this.fileSystem.readByte();
  }

  async readDir(): Promise<any> {
    return this.fileSystem.readDir();
  }

  async readFile(): Promise<any> {
    return this.fileSystem.readFile();
  }

  async readFloat(): Promise<any> {
    return this.fileSystem.readFloat();
  }

  async readInt(): Promise<any> {
    return this.fileSystem.readInt();
  }

  async readLine(): Promise<any> {
    return this.fileSystem.readLine();
  }

  async readShort(): Promise<any> {
    return this.fileSystem.readShort();
  }

  async readString(): Promise<any> {
    return this.fileSystem.readString();
  }

  async seekFile(): Promise<any> {
    return this.fileSystem.seekFile();
  }

  async writeByte(): Promise<any> {
    return this.fileSystem.writeByte();
  }

  async writeFile(): Promise<any> {
    return this.fileSystem.writeFile();
  }

  async writeFloat(): Promise<any> {
    return this.fileSystem.writeFloat();
  }

  async writeInt(): Promise<any> {
    return this.fileSystem.writeInt();
  }

  async writeLine(): Promise<any> {
    return this.fileSystem.writeLine();
  }

  async writeShort(): Promise<any> {
    return this.fileSystem.writeShort();
  }

  async writeString(): Promise<any> {
    return this.fileSystem.writeString();
  }
}
