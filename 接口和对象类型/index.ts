export {};
// interface
// 重名的interface会自动合并
// ？非必需属性 readonly 只读属性
// 继承 extends

// 索引签名
interface DataItem {
  id: number;
  name: string;
  [propName: string]: any; // 定义其他的任意属性
}
// interface 定义函数类型
interface Fn {
  (value: number): number[];
}
const fn: Fn = (value) => {
  return [value];
};
