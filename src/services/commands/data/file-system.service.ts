import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BbScriptStream } from 'bbscript/src/classes/in-game/data/stream';

@Injectable()
export class CommandsDataFileSystemService {
  constructor() {}

  async changeDir(path: string): Promise<any> {}

  async closeDir(directory: any): Promise<any> {}

  async closeFile(stream: any): Promise<any> {}

  async copyFile(source: string, target: string): Promise<any> {}

  async createDir(path: string): Promise<any> {}

  async currentDir(): Promise<string> {
    return null;
  }

  async deleteDir(path: string): Promise<any> {}

  async deleteFile(path: string): Promise<any> {}

  async eof(stream: any): Promise<-1 | 0 | 1> {
    return 0;
  }

  async filePos(stream: any): Promise<number> {
    return 0;
  }

  async fileSize(path: string): Promise<number> {
    return 0;
  }

  async fileType(path: string): Promise<0 | 1 | 2> {
    return 0;
  }

  async moreFiles(path: string): Promise<0 | 1> {
    return 0;
  }

  async nextFile(path: string): Promise<string> {
    return null;
  }

  async openFile(path: string): Promise<any> {}

  async readAvail(stream: any): Promise<number> {
    return 0;
  }

  async readByte(stream: any): Promise<number> {
    return 0;
  }

  async readDir(path: string): Promise<any> {}

  async readFile(path: string): Promise<any> {}

  async readFloat(stream: any): Promise<any> {
    return null;
  }

  async readInt(stream: any): Promise<any> {}

  async readLine(stream: any): Promise<any> {}

  async readShort(stream: any): Promise<any> {}

  async readString(stream: any): Promise<any> {}

  async seekFile(stream: any, position: number): Promise<number> {
    return 0;
  }

  async writeByte(stream: any, value: number): Promise<void> {}

  async writeFile(stream: any): Promise<BbScriptStream> {
    // TODO: implement
    return null;
  }

  async writeFloat(stream: any, value: number): Promise<void> {}

  async writeInt(stream: any, value: number): Promise<void> {}

  async writeLine(stream: any, value: number): Promise<void> {}

  async writeShort(stream: any, value: number): Promise<void> {}

  async writeString(stream: any, value: number): Promise<void> {}
}
