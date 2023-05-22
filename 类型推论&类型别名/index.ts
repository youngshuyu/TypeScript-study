// 类型推论
// 1.在有些没有明确指出类型的地方，类型推论会帮助提供类型
let x = 3;
// 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。
// 2.如果声明变量没有定义类型也没用赋值时，ts会推断为any类型
let zs;
zs = "123";
zs = 0;
zs = undefined;

// 类型别名
// type关键字（可以给一个类型定义一个名字）多用于复合类型
// 定义类型别名
type str = string;
let s: str = "123";
// 定义函数别名
type num = () => number;
let n = () => 123;
// 定义联合类型别名 type xxx = string | number
// 定义值的别名 type xxx = 123 | boolean | '123'

// type 和 interface的区别
// 1.interface可以继承，而type只能通过&交叉类型合并
// 2.type可以定义联合类型和使用一些操作符，interface不行
// 3.interface遇到重名的会自动合并，type不行
