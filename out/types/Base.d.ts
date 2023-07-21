import { Dependency } from "ada-types";
declare abstract class Base {
    abstract type: Dependency;
    abstract name: string;
    load: boolean;
    abstract init(): Promise<void>;
    abstract getDependencies(): Dependency[];
    setLoad(load: boolean): void;
    getPrototype(): Base;
    vars: [import("ts-modular-bot-file-design/out/types/Base").default, string][];
}
export default Base;
