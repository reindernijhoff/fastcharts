import type {Fastcharts} from "../fastcharts.js";

export default class Node {
  public children: Node[] = [];

  private _parent: Node | null = null;
  private _context: Fastcharts;

  constructor(context: Fastcharts) {
    this._context = context;
  }

  public get parent() {
    return this._parent;
  }

  public set parent(node: Node | null) {
    if (this._parent !== node) {
      this._parent = node;
      node?.appendChild(this);
    }
  }

  public appendChild(node: Node) {
    // check if node is already a child
    if (this.children.indexOf(node) !== -1) {
      return;
    } else {
      this.children.push(node);
      node.parent = this;
    }
  }

  public removeChild(node: Node) {
    const index = this.children.indexOf(node);
    if (index !== -1) {
      this.children.splice(index, 1);
      node.parent = null;
    }
  }

  public resize(width: number, height: number) {
    // override this method
    console.log('resize', width, height);
  }

  public render() {
    // override this method
    console.log('render');
  }
}