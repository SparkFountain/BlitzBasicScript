export class BbScriptBuffer {
  private dirty: boolean;

  constructor() {}

  public getDirty(): boolean {
    return this.dirty;
  }
  public setDirty(value: boolean) {
    this.dirty = value;
  }
}
