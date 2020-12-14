import 'reflect-metadata';

import { ResolvableTypesEnum } from '../constants/resolvable-types';
import { Resolvable } from '../resolve/resolvable';
import { BindTo } from '../bindings/bind-to';
import { interfaces } from "../interfaces";
import { Registry } from '../registry/registry';
import { ReflectKeys } from '../constants/inject';
import { generateId } from '../utils/generate-id';

export class Container implements interfaces.Container {
    id: number;
    parent: interfaces.Container | null;
    options: any;
    registry: interfaces.Registry = new Registry();
    private cache = new Map();
    private instances = new Map();
    private exports = new Map();
    private imports = [];

    constructor() {
        this.id = generateId()
    }

    load(container: Container) {
        const exported = container.registry.getExported()

        exported.map(v => this.registry.add(v.identifier, v));
    }

    unload(container: Container) {
        const exported = container.registry.getExported()

        exported.map(v => this.registry.add(v.identifier, v))
    }

    resolve<T>(key: interfaces.BindIdentifier<T>): T {
        if (!this.registry.hasKey(key)) throw new Error('Can\'t resolve dependency, key not exist');

        const target = this.registry.get(key);

        const result = this._resolve(target);

        return result as T;
    }

    bind<T>(key: interfaces.BindIdentifier<T>): interfaces.BindTo<T> {
        const resolvable = new Resolvable(key);
        resolvable.setParentId(this.id);

        this.registry.add(key, resolvable);

        return new BindTo(resolvable);
    }

    _resolve(target: interfaces.Resolvable) {
        if (target.type === ResolvableTypesEnum.CONSTANT || target.type === ResolvableTypesEnum.FUNCTION) {
            return target.value;
        }

        if (target.type === ResolvableTypesEnum.CONSTRUCTOR) {
            const requiredParams = Reflect.getMetadata(ReflectKeys.CLASS_CONSTRUCTOR_PARAMS, target.value) || [];
            const args = requiredParams.map((param: interfaces.BindIdentifier<any>) => this.resolve(param));

            return new target.value(...args);
        }

        throw new Error('Invalid resolvable type');
    }
}
