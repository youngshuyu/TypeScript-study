// 1.class 的基本用法 继承 和类型约束 implements
// 2.public private protected readonly
// private只能在内部使用
// protected 给子类和内部使用
// 3.super原理 => prototype.constructor.call
// 4.静态方法 => static Promise.all
// 5.get set
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 简易版虚拟dom
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text || "");
        }
        return root;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        var data = {
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
        var app = typeof this.options.el === "string"
            ? document.querySelector(this.options.el)
            : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
var vue = new Vue({
    el: "#app",
});
