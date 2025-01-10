import Node from "./core/Node.js";
import Data from "./core/Data.js";

export class Fastcharts {
  public root: Node = new Node(this);
  public data: Data;

  private container: HTMLElement;
  private resizeObserver: ResizeObserver;

  constructor(container: HTMLElement, config: any) {
    this.container = container;
    this.resizeObserver = new ResizeObserver((entries) => {
      this.root.resize(entries[0].contentRect.width, entries[0].contentRect.height);
    });
    this.resizeObserver.observe(this.container);


    this.data = new Data();
  }

  public destroy() {
    this.resizeObserver.disconnect();
  }
}