import { Dependencies } from "ada-types";
class Base {
    load = true;
    setLoad(load) {
        this.load = load;
    }
    getPrototype() {
        return Base.prototype;
    }
    vars = Dependencies.vars;
}
export default Base;
