import { interfaces } from '../interfaces';
export declare type InjectOptions = {
    scope: interfaces.BindingScopes;
};
export declare const Injectable: (injectableOptions?: InjectOptions) => (target: any) => void;
