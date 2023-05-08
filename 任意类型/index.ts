export {};
// let a: any = 123
// let b: number = 321
// a = b
// b = a
let a: unknown = 123;
let b: number = 321;
a = b;
b = a;

let c: unknown = {
  name: "xy",
  run: () => "run",
};
c.name;
// 1.top type: any unknown
// 2.Object
// 3.String Number Boolean
// 4.string number boolean
// 5.'123'   123  true/false
// 6.never
// unknown只能赋给自身或any类型
// unknown类型无法访问任何属性或调用方法
// 因为unknown类型调用错误会直接报错， 所以比any类型更安全
