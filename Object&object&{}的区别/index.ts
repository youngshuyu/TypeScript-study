export {};
// Object包含了任意的类型，可以是任何一个值
let a1: Object = 1;
let a2: Object = "1";
let a3: Object = false;
let a4: object = [];
let a5: object = () => 123;
let a6: object = { name: "zs" };
// object常用于泛型约束，代表非原始类型的类型
let b1: object = 1; // 错误，原始类型
let b2: object = "2"; // 错误，原始类型
let b3: object = false; // 错误，原始类型
let b4: object = [];
let b5: object = () => 123;
// 字面量模式 {}(new Object)
let c1: {} = 1;
let c2: {} = "1";
let c3: {} = false;
let c4: {} = [];
let c5: {} = () => 123;
