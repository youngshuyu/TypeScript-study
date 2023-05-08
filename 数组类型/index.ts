// 定义数组的类型
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
// 多维数组
const arr3: number[][] = [[1], [2], [3]];
const arr4: Array<Array<number>> = [[1], [2], [3]];
// 定义函数里面的数组类型
// 定义函数里剩余参数的类型
function fn(...args: number[]) {
  console.log(...args);
  let a: IArguments = arguments; // 箭头函数没有arguments
}
fn(1, 2);
