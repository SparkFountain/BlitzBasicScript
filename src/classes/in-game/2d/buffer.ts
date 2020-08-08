export class BbScriptBuffer {
  private _context: CanvasRenderingContext2D;
  private _dirty: boolean;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this._context = renderingContext;
    this._dirty = false;
  }

  get context(): CanvasRenderingContext2D {
    return this._context;
  }

  get dirty(): boolean {
    return this._dirty;
  }
  set dirty(value: boolean) {
    this._dirty = value;
  }
}
