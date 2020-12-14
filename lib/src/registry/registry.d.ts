import { interfaces } from "../interfaces";
export declare class Registry implements interfaces.Registry {
    private _map;
    hasKey(key: interfaces.BindIdentifier<any>): boolean;
    add(key: interfaces.BindIdentifier<any>, target: interfaces.Resolvable): void;
    get(key: interfaces.BindIdentifier<any>): interfaces.Resolvable;
    getExported(): interfaces.Resolvable<any>[];
}
