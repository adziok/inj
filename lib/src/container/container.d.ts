import 'reflect-metadata';
import { interfaces } from "../interfaces";
export declare class Container implements interfaces.Container {
    id: number;
    parent: interfaces.Container | null;
    options: any;
    registry: interfaces.Registry;
    private cache;
    private instances;
    private exports;
    private imports;
    constructor();
    load(container: Container): void;
    unload(container: Container): void;
    resolve<T>(key: interfaces.BindIdentifier<T>): T;
    bind<T>(key: interfaces.BindIdentifier<T>): interfaces.BindTo<T>;
    _resolve(target: interfaces.Resolvable): any;
}
