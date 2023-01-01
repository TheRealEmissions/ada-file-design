import { Dependency, Dependencies } from "ts-modular-bot-types";

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
  vars: [Dependency, string][] = Dependencies.vars;
}

export default Base;
