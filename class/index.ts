// 1.class 的基本用法 继承 和类型约束 implements
// 2.public private protected readonly
// private只能在内部使用
// protected 给子类和内部使用
// 3.super原理 => prototype.constructor.call
// 4.静态方法 => static Promise.all
// 5.get set

interface Options {
  el: string | HTMLElement;
}
interface VueCls {
  options: Options;
  init(): void;
}
interface VNode {
  tag: string; // 标签，div/header/footer
  text?: string;
  children?: VNode[];
}
// 简易版虚拟dom
class Dom {
  private createElement(el: string) {
    return document.createElement(el);
  }
  private setText(el: HTMLElement, text: string | null) {
    el.textContent = text;
  }
  protected render(data: VNode) {
    const root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        const child = this.render(item);
        root.appendChild(child);
      });
    } else {
      this.setText(root, data.text || "");
    }
    return root;
  }
}
class Vue extends Dom implements VueCls {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }
  init(): void {
    const data: VNode = {
      tag: "div",
      children: [
        {
          tag: "div",
          text: "子节点1",
        },
        {
          tag: "section",
          text: "子节点2",
        },
      ],
    };
    const app =
      typeof this.options.el === "string"
        ? document.querySelector(this.options.el)
        : this.options.el;
    app?.appendChild(this.render(data));
  }
}

const vue = new Vue({
  el: "#app",
});
