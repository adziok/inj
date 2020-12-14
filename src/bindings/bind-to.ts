import { ResolvableTypesEnum } from "../constants/resolvable-types";
import { interfaces } from "../interfaces";

export class BindTo<T> implements interfaces.BindTo<T> {
    constructor(private resolvable: interfaces.Resolvable) {}

    to(target: interfaces.Newable<T>, exported?: boolean): void {
        this.resolvable.type = ResolvableTypesEnum.CONSTRUCTOR;
        this.resolvable.value = target;
        this.resolvable.exported = exported && exported || this.resolvable.exported
    }

    toValue(target: any, exported?: boolean): void {
        this.resolvable.type = ResolvableTypesEnum.CONSTANT;
        this.resolvable.value = target;
        this.resolvable.exported = exported && exported || this.resolvable.exported
    }
}