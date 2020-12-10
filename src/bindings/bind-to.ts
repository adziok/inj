import { ResolvableTypesEnum } from "../constants/resolvable-types";
import { interfaces } from "../interfaces";

export class BindTo<T> implements interfaces.BindTo<T> {
    constructor(private resolvable: interfaces.Resolvable) {}

    to(target: interfaces.Newable<T>): void {
        this.resolvable.type = ResolvableTypesEnum.CONSTRUCTOR;
        this.resolvable.value = target;
    }

    toValue(target: any): void {
        this.resolvable.type = ResolvableTypesEnum.CONSTANT;
        this.resolvable.value = target;
    }
}