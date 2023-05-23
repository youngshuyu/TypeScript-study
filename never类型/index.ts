export {};
// never类型
// never类型表示的是那些永不存在的值（或者说不应该存在的状态）的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
// never在联合类型中会被自动忽略
type A = string | boolean | never;

// never类型的应用场景
type Direction = "up" | "down" | "left" | "right";
function getDirection(value: Direction) {
  switch (value) {
    case "up":
      break;
    case "down":
      break;
    case "left":
      break;
    case "right":
      break;
    default:
      // 适用于场景兜底逻辑
      const error: never = value;
      return error;
  }
}
// 由于任何类型都不能赋给never类型的变量，所以当存在进入default分支的可能性时，TS的类型检查会帮助我们及时发现这个问题
