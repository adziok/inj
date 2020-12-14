import { interfaces } from "../interfaces";
export declare class Resolvable implements interfaces.Resolvable {
    constructor(identifier: interfaces.BindIdentifier<any>);
    identifier: interfaces.BindIdentifier<any>;
    type: interfaces.ResolvableTypes;
    scope: interfaces.BindingScopes;
    value: any;
    parentId: number;
    exported: boolean;
    resolve(): void;
    setValue(value: any): void;
    setParentId(parentId: number): void;
}
