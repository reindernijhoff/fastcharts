import Vector2 from "./Vector2.js";

export default class Rect {
  public min: Vector2;
  public max: Vector2;

  constructor(min: Vector2, max: Vector2) {
    this.min = min;
    this.max = max;
  }

  public get width() {
    return this.max.x - this.min.x;
  }

  public get height() {
    return this.max.y - this.min.y;
  }

  public intersection(r: Rect): Rect {
    const min = this.min.max(r.min);
    const max = this.max.min(r.max);
    return new Rect(min, max);
  }
}