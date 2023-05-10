export {};
// 联合类型 |
let a: number | string = "123";
// 交叉类型 &
interface A {
  name: string;
}
interface B {
  age: number;
}
const man: A & B = {
  name: "zhangsan",
  age: 18,
};
// 类型断言 断言可以欺骗ts不提示报错，但是不能滥用
function fn(params: number | string) {
  // return (params as string).length
  return (<string>params).length;
}
