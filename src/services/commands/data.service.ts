import { Injectable } from "@angular/core";
import { CommandsDataBankService } from './data/bank.service';
import { CommandsDataFileSystemService } from './data/file-system.service';

@Injectable()
export class CommandsDataService {
  constructor(private bank: CommandsDataBankService,
    private fileSystem: CommandsDataFileSystemService
  ) { }

  // BANK
  bankSize(bank: any): Promise<number> {
    return this.bank.bankSize(bank);
  }

  copyBank(sourceBank: any, sourcePos: number, targetBank: any, targetPos: number, length?: number): Promise<any> {
    return this.bank.copyBank(sourceBank, sourcePos, targetBank, targetPos, length);
  }

  createBank(bytes?: number): Promise<any> {
    return this.bank.createBank(bytes);
  }

  freeBank(bank: any): Promise<any> {
    return this.bank.freeBank(bank);
  }

  peekByte(bank: any, pos: number): Promise<any> {
    return this.bank.peekByte(bank, pos);
  }

  peekFloat(bank: any, pos: number): Promise<any> {
    return this.bank.peekFloat(bank, pos);
  }

  peekInt(bank: any, pos: number): Promise<any> {
    return this.bank.peekInt(bank, pos);
  }

  peekShort(bank: any, pos: number): Promise<any> {
    return this.bank.peekShort(bank, pos);
  }

  pokeByte(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeByte(bank, pos, value);
  }

  pokeFloat(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeFloat(bank, pos, value);
  }

  pokeInt(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeInt(bank, pos, value);
  }

  pokeShort(bank: any, pos: number, value: number): Promise<any> {
    return this.bank.pokeShort(bank, pos, value);
  }

  readBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return this.bank.readBytes(bank, stream, startPos, length);
  }

  resizeBank(bank: any, bytes?: number): Promise<any> {
    return this.bank.resizeBank(bank, bytes);
  }

  writeBytes(bank: any, stream: any, startPos: number, length: number): Promise<any> {
    return this.bank.writeBytes(bank, stream, startPos, length);
  }

  // FILE SYSTEM
  changeDir(): Promise<any> {
    return this.fileSystem.changeDir();
  }

  closeDir(): Promise<any> {
    return this.fileSystem.closeDir();
  }

  closeFile(): Promise<any> {
    return this.fileSystem.closeFile();
  }

  copyFile(): Promise<any> {
    return this.fileSystem.copyFile();
  }

  createDir(): Promise<any> {
    return this.fileSystem.createDir();
  }

  currentDir(): Promise<any> {
    return this.fileSystem.currentDir();
  }

  deleteDir(): Promise<any> {
    return this.fileSystem.deleteDir();
  }

  deleteFile(): Promise<any> {
    return this.fileSystem.deleteFile();
  }

  eof(): Promise<any> {
    return this.fileSystem.eof();
  }

  filePos(): Promise<any> {
    return this.fileSystem.filePos();
  }

  fileSize(): Promise<any> {
    return this.fileSystem.fileSize();
  }

  fileType(): Promise<any> {
    return this.fileSystem.fileType();
  }

  moreFiles(): Promise<any> {
    return this.fileSystem.moreFiles();
  }

  nextFile(): Promise<any> {
    return this.fileSystem.nextFile();
  }

  openFile(): Promise<any> {
    return this.fileSystem.openFile();
  }

  readAvail(): Promise<any> {
    return this.fileSystem.readAvail();
  }

  readByte(): Promise<any> {
    return this.fileSystem.readByte();
  }

  readDir(): Promise<any> {
    return this.fileSystem.readDir();
  }

  readFile(): Promise<any> {
    return this.fileSystem.readFile();
  }

  readFloat(): Promise<any> {
    return this.fileSystem.readFloat();
  }

  readInt(): Promise<any> {
    return this.fileSystem.readInt();
  }

  readLine(): Promise<any> {
    return this.fileSystem.readLine();
  }

  readShort(): Promise<any> {
    return this.fileSystem.readShort();
  }

  readString(): Promise<any> {
    return this.fileSystem.readString();
  }

  seekFile(): Promise<any> {
    return this.fileSystem.seekFile();
  }

  writeByte(): Promise<any> {
    return this.fileSystem.writeByte();
  }

  writeFile(): Promise<any> {
    return this.fileSystem.writeFile();
  }

  writeFloat(): Promise<any> {
    return this.fileSystem.writeFloat();
  }

  writeInt(): Promise<any> {
    return this.fileSystem.writeInt();
  }

  writeLine(): Promise<any> {
    return this.fileSystem.writeLine();
  }

  writeShort(): Promise<any> {
    return this.fileSystem.writeShort();
  }

  writeString(): Promise<any> {
    return this.fileSystem.writeString();
  }
}
