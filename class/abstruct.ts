// 抽象类
// 用abstract关键字定义抽象类, 抽象类无法被实例化
// 抽象类里才能定义抽象的方法，抽象方法只能描述不能去实现
abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract init(name: string): void;
  getName() {
    return this.name;
  }
}
class Man extends Person {
  constructor(name: string) {
    super(name);
  }
  init(name: string): void {}
  setName(name: string) {
    this.name = name;
  }
}
const zhangsan = new Man("zhangsan");
zhangsan.getName();
