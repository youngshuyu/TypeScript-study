export {};
// 1.ECMA Number Date Error RegExp XMLHttpRequest
// 跟new的时候写法一样
const n: Number = new Number(1);
const s: String = new String(123);
const date: Date = new Date();

// 2.Dom querySelect MouseEvent
// `HTML${元素名称}Element`
// 一些普通的标签例如header、footer归类于HTMLElement
const div = document.querySelector("div"); // HTMLDivElement
// 获取元素集合
const nodes1: NodeList = document.querySelectorAll("div");
// 获取不同的元素集合
const nodes2: NodeListOf<HTMLDivElement | HTMLElement> =
  document.querySelectorAll("div header");

// 3.Bom cookie localStorage location
const ls: Storage = localStorage;
const lo: Location = location;
// promise可以定义接受返回值的类型
const promise: Promise<number> = new Promise((resolve) => resolve(666));
promise.then((res) => res.toString);
//document.cookie返回的是一个字符串
const ck: String = document.cookie;
