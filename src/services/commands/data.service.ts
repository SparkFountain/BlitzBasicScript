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
  async changeDir(path: string): Promise<any> {
    return this.fileSystem.changeDir(path);
  }

  async closeDir(directory: any): Promise<any> {
    return this.fileSystem.closeDir(directory);
  }

  async closeFile(stream: any): Promise<any> {
    return this.fileSystem.closeFile(stream);
  }

  async copyFile(source: string, target: string): Promise<any> {
    return this.fileSystem.copyFile(source, target);
  }

  async createDir(path: string): Promise<any> {
    return this.fileSystem.createDir(path);
  }

  async currentDir(): Promise<string> {
    return this.fileSystem.currentDir();
  }

  async deleteDir(path: string): Promise<any> {
    return this.fileSystem.deleteDir(path);
  }

  async deleteFile(path: string): Promise<any> {
    return this.fileSystem.deleteFile(path);
  }

  async eof(stream: any): Promise<-1 | 0 | 1> {
    return this.fileSystem.eof(stream);
  }

  async filePos(stream: any): Promise<number> {
    return this.fileSystem.filePos(stream);
  }

  async fileSize(path: string): Promise<number> {
    return this.fileSystem.fileSize(path);
  }

  async fileType(path: string): Promise<0 | 1 | 2> {
    return this.fileSystem.fileType(path);
  }

  async moreFiles(path: string): Promise<0 | 1> {
    return this.fileSystem.moreFiles(path);
  }

  async nextFile(path: string): Promise<string> {
    return this.fileSystem.nextFile(path);
  }

  async openFile(path: string): Promise<any> {
    return this.fileSystem.openFile(path);
  }

  async readAvail(stream: any): Promise<number> {
    return this.fileSystem.readAvail(stream);
  }

  async readByte(stream: any): Promise<number> {
    return this.fileSystem.readByte(stream);
  }

  async readDir(path: string): Promise<any> {
    return this.fileSystem.readDir(path);
  }

  async readFile(path: string): Promise<any> {
    return this.fileSystem.readFile(path);
  }

  async readFloat(stream: any): Promise<any> {
    return this.fileSystem.readFloat(stream);
  }

  async readInt(stream: any): Promise<any> {
    return this.fileSystem.readInt(stream);
  }

  async readLine(stream: any): Promise<any> {
    return this.fileSystem.readLine(stream);
  }

  async readShort(stream: any): Promise<any> {
    return this.fileSystem.readShort(stream);
  }

  async readString(stream: any): Promise<any> {
    return this.fileSystem.readString(stream);
  }

  async seekFile(stream: any, position: number): Promise<number> {
    return this.fileSystem.seekFile(stream, position);
  }

  async writeByte(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeByte(stream, value);
  }

  async writeFile(stream: any): Promise<any> {
    return this.fileSystem.writeFile(stream);
  }

  async writeFloat(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeFloat(stream, value);
  }

  async writeInt(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeInt(stream, value);
  }

  async writeLine(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeLine(stream, value);
  }

  async writeShort(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeShort(stream, value);
  }

  async writeString(stream: any, value: number): Promise<any> {
    return this.fileSystem.writeString(stream, value);
  }
}
