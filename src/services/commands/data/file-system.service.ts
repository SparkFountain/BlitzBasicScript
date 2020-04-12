import { Injectable } from '@angular/core';

@Injectable()
export class CommandsDataFileSystemService {
  constructor() {}

  async changeDir(): Promise<any> {}

  async closeDir(): Promise<any> {}

  async closeFile(): Promise<any> {}

  async copyFile(): Promise<any> {}

  async createDir(): Promise<any> {}

  async currentDir(): Promise<any> {}

  async deleteDir(): Promise<any> {}

  async deleteFile(): Promise<any> {}

  async eof(): Promise<any> {}

  async filePos(): Promise<any> {}

  async fileSize(): Promise<any> {}

  async fileType(): Promise<any> {}

  async moreFiles(): Promise<any> {}

  async nextFile(): Promise<any> {}

  async openFile(): Promise<any> {}

  async readAvail(): Promise<any> {}

  async readByte(): Promise<any> {}

  async readDir(): Promise<any> {}

  async readFile(): Promise<any> {}

  async readFloat(): Promise<any> {}

  async readInt(): Promise<any> {}

  async readLine(): Promise<any> {}

  async readShort(): Promise<any> {}

  async readString(): Promise<any> {}

  async seekFile(): Promise<any> {}

  async writeByte(): Promise<void> {}

  async writeFile(): Promise<void> {}

  async writeFloat(): Promise<void> {}

  async writeInt(): Promise<void> {}

  async writeLine(): Promise<void> {}

  async writeShort(): Promise<void> {}

  async writeString(): Promise<void> {}
}
