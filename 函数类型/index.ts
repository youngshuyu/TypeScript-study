// 函数类型的定义
// 1.函数定义参数类型和返回值类型 ｜ 箭头函数定义参数类型和返回值类型
function add1(a: number, b: number): number {
  return a + b;
}
const add2 = (a: number, b: number): number => a + b;
// 2.函数的默认值 = 和可选参数 ？
// 3.参数是一个对象如何定义
interface User {
  name: string;
  age: number;
}
function fn(user: User): User {
  return user;
}
// 4.函数this类型
// interface Obj {
//   arr: number[];
//   add: (num: number) => void;
// }
// const obj: Obj = {
//   arr: [1, 2],
//   add(num: number) {
//     this.arr.push(num);
//   },
// };
// obj.add(3);
// console.log(obj);

//函数重载
// 通过判断入参类型的不同执行不同的代码
// Q：实现一个函数，当传入单个id的时候查询此id相关的数据，
//    当传入的是一个数组时插入初始数据里，
//    当不传参数时返回的是所有数据
const arr: number[] = [1, 2, 3];

function find(ids?: number | number[]) {
  if (typeof ids === "number") {
    return arr.filter((v) => v === ids);
  } else if (Array.isArray(ids)) {
    arr.push(...ids);
    return arr;
  } else {
    return arr;
  }
}
console.log(find());
