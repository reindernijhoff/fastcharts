export default class CanvasRenderer {
  private canvas: HTMLCanvasElement;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement("canvas");
    container.appendChild(this.canvas);
    Object.assign(this.canvas.style, {
      backgroundColor: "red",
      width: "100%",
      height: "100%",
      position: "relative",
      margin: "0",
    });
  }
}