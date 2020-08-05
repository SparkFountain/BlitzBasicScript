export class BbScriptImage {
  private width: number;
  private height: number;
  private name: string;
  private elements: HTMLImageElement[];

  // private maskColor?: {
  //   red: number;
  //   green: number;
  //   blue: number;
  // };

  private handle: {
    x: number;
    y: number;
  };
  private rotation: number;

  constructor(
    width: number,
    height: number,
    name: string,
    elements: HTMLImageElement[],
    handle: {
      x: number;
      y: number;
    }
  ) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.elements = elements;
    this.handle = handle;
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

  public getElement(frame: number): HTMLImageElement {
    if (frame > this.elements.length - 1) {
      console.error(`[GET IMAGE ELEMENT] Invalid frame ${frame}, image has only ${this.elements.length} frames`);
      frame = 0;
    }

    return this.elements[frame];
  }

  public getElements(): HTMLImageElement[] {
    return this.elements;
  }

  // public getMaskedElement(): HTMLImageElement {
  //   return this.maskedElement;
  // }
  // public getMaskColor(): { red: number; green: number; blue: number } {
  //   return this.maskColor;
  // }

  public getHandle(): { x: number; y: number } {
    return this.handle;
  }
  public setHandle(x: number, y: number) {
    this.handle.x = x;
    this.handle.y = y;
  }

  public getRotation(): number {
    return this.rotation;
  }
  public setRotation(angle: number): void {
    this.rotation = angle;
  }

  // public setMaskColor(red: number, green: number, blue: number): void {
  //   this.maskColor = { red, green, blue };
  // }
}
