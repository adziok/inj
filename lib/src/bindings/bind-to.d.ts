import { interfaces } from "../interfaces";
export declare class BindTo<T> implements interfaces.BindTo<T> {
    private resolvable;
    constructor(resolvable: interfaces.Resolvable);
    to(target: interfaces.Newable<T>, exported?: boolean): void;
    toValue(target: any, exported?: boolean): void;
}
