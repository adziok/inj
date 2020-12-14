import { interfaces } from "../interfaces";

export class Resolvable implements interfaces.Resolvable {
    constructor(
        identifier: interfaces.BindIdentifier<any>
    ){
        this.identifier = identifier;
    }

    identifier: interfaces.BindIdentifier<any>;
    type: interfaces.ResolvableTypes;
    scope: interfaces.BindingScopes;
    value: any;
    parentId: number;
    exported: boolean = false;

    resolve() {
        throw new Error("Method not implemented.");
    }

    setValue(value: any) {
        this.value = value;
    }

    setParentId(parentId: number) {
        if (this.parentId !== undefined) {
            throw new Error('Resolvable already has a parent');
        }
        this.parentId = parentId;
    }
}