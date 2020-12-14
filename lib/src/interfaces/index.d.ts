export declare namespace interfaces {
    type BindingScopes = 'SINGLETON' | 'REQUEST' | 'DEFAULT';
    interface BindingScopesEnum {
        SINGLETON: BindingScopes;
        REQUEST: BindingScopes;
        DEFAULT: BindingScopes;
    }
    type ResolvableTypes = 'FUNCTION' | 'CONSTANT' | 'CONSTRUCTOR';
    interface ResolvableTypesEnum {
        FUNCTION: ResolvableTypes;
        CONSTANT: ResolvableTypes;
        CONSTRUCTOR: ResolvableTypes;
    }
    interface Container {
        id: number;
        parent: Container | null;
        options: any;
        registry: Registry;
        resolve<T>(key: interfaces.BindIdentifier<T>): T;
        bind<T>(key: interfaces.BindIdentifier<T>): BindTo<T>;
    }
    type Newable<T> = new (...args: any[]) => T;
    interface BindTo<T> {
        to(target: Newable<T>, exported?: boolean): void;
        toValue(target: any, exported?: boolean): void;
    }
    interface BindOptions<T> {
        identifier: BindIdentifier<T>;
        scope: BindingScopes;
    }
    type BindIdentifier<T> = (string | symbol | Newable<T>);
    interface Resolvable<T = any> {
        identifier: BindIdentifier<T>;
        type: ResolvableTypes;
        scope: BindingScopes;
        value: any;
        exported: boolean;
        resolve(): T;
        setParentId(parentId: number): void;
    }
    interface Registry {
        hasKey<K extends BindIdentifier<any>>(key: K): boolean;
        add<T, K extends BindIdentifier<T>>(key: K, target: Resolvable): void;
        get<T, K extends BindIdentifier<T>>(key: K): Resolvable;
        getExported(): Resolvable[];
    }
    type InjectKeys = string | Newable<any> | symbol;
}
