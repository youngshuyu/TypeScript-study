export {};
// 自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。
// symbol类型的值是通过Symbol构造函数创建的。
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key

// Symbols是不可改变且唯一的。
let sym3 = Symbol("key");
sym2 === sym3; // false, symbols是唯一的

// 像字符串一样，symbols也可以被用做对象属性的键。
let sym = Symbol();
let obj = {
  [sym]: "value",
};

console.log(obj[sym]); // "value"

// 使用symbol定义的属性，无法通过以下几种方式拿到
const sym4 = Symbol("x");
const sym5 = Symbol("y");
const position = {
  [sym4]: 100,
  [sym5]: 200,
  z: 300,
};
// 1.for in 遍历
for (const key in position) {
  console.log(key);
}
// 2.Object.keys遍历
Object.keys(position);
console.log(Object.keys(position));
// 3.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(position));
// 4.JSON.stringify
console.log(JSON.stringify(position));

// 可以拿到的方式如下
// 1.Object.getOwnPropertySymbols(只能拿到symbol)
console.log(Object.getOwnPropertySymbols(position));
// 2.es6新增的Reflect
console.log(Reflect.ownKeys(position));

// 生成器
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// iterator的语法糖就是for of,for of不能遍历对象就是因为对象是没有iterator的
// 数组解构的原理也是调用迭代器
// 可以自己实现一个迭代器让对象支持for of
const ob = {
  max: 7,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current === this.max) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          return {
            value: this.current++,
            done: false,
          };
        }
      },
    };
  },
};
for (let val of ob) {
  console.log(val);
}
// 以下为这些symbols的列表：

// Symbol.hasInstance
// 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

// Symbol.isConcatSpreadable
// 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

// Symbol.iterator
// 方法，被for-of语句调用。返回对象的默认迭代器。

// Symbol.match
// 方法，被String.prototype.match调用。正则表达式用来匹配字符串。

// Symbol.replace
// 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

// Symbol.search
// 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

// Symbol.species
// 函数值，为一个构造函数。用来创建派生对象。

// Symbol.split
// 方法，被String.prototype.split调用。正则表达式来用分割字符串。

// Symbol.toPrimitive
// 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

// Symbol.toStringTag
// 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

// Symbol.unscopables
// 对象，它自己拥有的属性会被with作用域排除在外。
