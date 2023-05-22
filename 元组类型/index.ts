export {};
// 元组（Tuple）是数组的变种
// 是 固定 数量的 不同类型 的元素的集合
// 如果一个方法需要返回多个值，可以把这多个值作为元组返回，避免创建额外的类来表示
const arr: [string, number, boolean] = ["123", 1, false];

// 当赋值或访问一个已知索引的类型时，会得到正确的类型
arr[0].length; // success
arr[1].length; // error,因为number是没有length的

// 元组支持自定义名称和可选项
const list: [x: number, y?: string] = [0];

// 越界元素
// 越界的元素的类型被限定为联合类型
list.push(false);
