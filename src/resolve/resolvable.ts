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

    resolve() {
        throw new Error("Method not implemented.");
    }

    setValue(value: any) {
        this.value = value;
    }
}