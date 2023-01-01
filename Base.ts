import { Dependency } from "ts-modular-bot-types";

abstract class Base {
  abstract type: Dependency;
  abstract name: string;
  load: boolean = true;
  abstract init(): void;
  abstract getDependencies(): Dependency[];
  setLoad(load: boolean): void {
    this.load = load;
  }
  getPrototype() {
    return Base.prototype;
  }
}

export default Base;
