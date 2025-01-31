export default class Vector2 {
  public x: number;
  public y: number;


  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public min(v: Vector2) {
    return new Vector2(
      Math.min(this.x, v.x),
      Math.min(this.y, v.y)
    );
  }

  public max(v: Vector2) {
    return new Vector2(
      Math.max(this.x, v.x),
      Math.max(this.y, v.y)
    );
  }
}