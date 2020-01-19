import { Injectable } from "@angular/core";
import { CommandsDataBankService } from './data/bank.service';
import { CommandsDataFileSystemService } from './data/file-system.service';
import { Observable } from 'rxjs';

@Injectable()
export class CommandsDataService {
  constructor(private bank: CommandsDataBankService,
    private fileSystem: CommandsDataFileSystemService
  ) { }

  // BANK
  bankSize(bank: any): Observable<number> {
    return this.bank.bankSize(bank);
  }

  copyBank(sourceBank: any, sourcePos: number, targetBank: any, targetPos: number, length?: number) {
    return this.bank.copyBank(sourceBank, sourcePos, targetBank, targetPos, length);
  }

  createBank(bytes?: number) {
    return this.bank.createBank(bytes);
  }

  freeBank(bank: any) {
    return this.bank.freeBank(bank);
  }

  peekByte(bank: any, pos: number) {
    return this.bank.peekByte(bank, pos);
  }

  peekFloat(bank: any, pos: number) {
    return this.bank.peekFloat(bank, pos);
  }

  peekInt(bank: any, pos: number) {
    return this.bank.peekInt(bank, pos);
  }

  peekShort(bank: any, pos: number) {
    return this.bank.peekShort(bank, pos);
  }

  pokeByte(bank: any, pos: number, value: number) {
    return this.bank.pokeByte(bank, pos, value);
  }

  pokeFloat(bank: any, pos: number, value: number) {
    return this.bank.pokeFloat(bank, pos, value);
  }

  pokeInt(bank: any, pos: number, value: number) {
    return this.bank.pokeInt(bank, pos, value);
  }

  pokeShort(bank: any, pos: number, value: number) {
    return this.bank.pokeShort(bank, pos, value);
  }

  readBytes(bank: any, stream: any, startPos: number, length: number) {
    return this.bank.readBytes(bank, stream, startPos, length);
  }

  resizeBank(bank: any, bytes?: number) {
    return this.bank.resizeBank(bank, bytes);
  }

  writeBytes(bank: any, stream: any, startPos: number, length: number) {
    return this.bank.writeBytes(bank, stream, startPos, length);
  }

  // FILE SYSTEM
  changeDir() {
    return this.fileSystem.changeDir();
  }

  closeDir() {
    return this.fileSystem.closeDir();
  }

  closeFile() {
    return this.fileSystem.closeFile();
  }

  copyFile() {
    return this.fileSystem.copyFile();
  }

  createDir() {
    return this.fileSystem.createDir();
  }

  currentDir() {
    return this.fileSystem.currentDir();
  }

  deleteDir() {
    return this.fileSystem.deleteDir();
  }

  deleteFile() {
    return this.fileSystem.deleteFile();
  }

  eof() {
    return this.fileSystem.eof();
  }

  filePos() {
    return this.fileSystem.filePos();
  }

  fileSize() {
    return this.fileSystem.fileSize();
  }

  fileType() {
    return this.fileSystem.fileType();
  }

  moreFiles() {
    return this.fileSystem.moreFiles();
  }

  nextFile() {
    return this.fileSystem.nextFile();
  }

  openFile() {
    return this.fileSystem.openFile();
  }

  readAvail() {
    return this.fileSystem.readAvail();
  }

  readByte() {
    return this.fileSystem.readByte();
  }

  readDir() {
    return this.fileSystem.readDir();
  }

  readFile() {
    return this.fileSystem.readFile();
  }

  readFloat() {
    return this.fileSystem.readFloat();
  }

  readInt() {
    return this.fileSystem.readInt();
  }

  readLine() {
    return this.fileSystem.readLine();
  }

  readShort() {
    return this.fileSystem.readShort();
  }

  readString() {
    return this.fileSystem.readString();
  }

  seekFile() {
    return this.fileSystem.seekFile();
  }

  writeByte() {
    return this.fileSystem.writeByte();
  }

  writeFile() {
    return this.fileSystem.writeFile();
  }

  writeFloat() {
    return this.fileSystem.writeFloat();
  }

  writeInt() {
    return this.fileSystem.writeInt();
  }

  writeLine() {
    return this.fileSystem.writeLine();
  }

  writeShort() {
    return this.fileSystem.writeShort();
  }

  writeString() {
    return this.fileSystem.writeString();
  }
}
