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

  constructor(width: number, height: number, name: string, element: HTMLImageElement) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.element = element;
  }

  public getWidth(): number {
    return this.width;
  }
  public setWidth(width: number): void {
    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }
  public setHeight(height: number): void {
    this.height = height;
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
  public setRotation(angle: number): void {
    this.rotation = angle;
  }

  public setMaskColor(red: number, green: number, blue: number): void {
    this.maskColor = { red, green, blue };
  }
}
