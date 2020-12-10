export namespace interfaces {
    export type BindingScopes = 'SINGLETON' | 'REQUEST' | 'DEFAULT';

    export interface BindingScopesEnum {
        SINGLETON: BindingScopes
        REQUEST: BindingScopes
        DEFAULT: BindingScopes
    }

    export type ResolvableTypes = 'FUNCTION' | 'CONSTANT' | 'CONSTRUCTOR';

    export interface ResolvableTypesEnum {
        FUNCTION: ResolvableTypes
        CONSTANT: ResolvableTypes
        CONSTRUCTOR: ResolvableTypes
    }

    export interface Container {
        id: number;
        parent: Container | null;
        options: any;
        registry: Registry;
        resolve<T>(key: interfaces.BindIdentifier<T>): T;
        bind<T>(key: interfaces.BindIdentifier<T>): BindTo<T>;
    }

    export type Newable<T> = new (...args: any[]) => T;

    export interface BindTo<T> {
        to(target: Newable<T>): void;
        toValue(target: any): void;
    }

    export interface BindOptions<T> {
        identifier: BindIdentifier<T>;
        scope: BindingScopes;
    }

    export type BindIdentifier<T> = (string | symbol | Newable<T>);

    export interface Resolvable<T = any> {
        identifier: BindIdentifier<T>;
        type: ResolvableTypes;
        scope: BindingScopes;
        value: any;
        resolve(): T;
    }

    export interface Registry {
        hasKey<K extends BindIdentifier<any>>(key: K): boolean;
        add<T, K extends BindIdentifier<T>>(key: K, target: Resolvable): void;
        get<T, K extends BindIdentifier<T>>(key: K): Resolvable;
    }
}