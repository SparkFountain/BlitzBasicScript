export class BbScriptImage {
  private width: number;
  private height: number;
  private name: string;
  private element: HTMLImageElement;
  private maskedElement?: HTMLImageElement;
  private maskColor?: {
    red: number;
    green: number;
    blue: number;
  };
  private handle: {
    x: number;
    y: number;
  };
  private rotation: number;

  constructor() {}

  public getWidth(): number {
    return this.width;
  }
  public getHeight(): number {
    return this.height;
  }
  public getName(): string {
    return this.name;
  }
  public getElement(): HTMLImageElement {
    return this.element;
  }
  public getMaskedElement(): HTMLImageElement {
    return this.maskedElement;
  }
  public getMaskColor(): { red: number; green: number; blue: number } {
    return this.maskColor;
  }
  public getHandle(): { x: number; y: number } {
    return this.handle;
  }
  public getRotation(): number {
    return this.rotation;
  }
}
