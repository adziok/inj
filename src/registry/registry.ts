import { interfaces } from "../interfaces";

export class Registry implements interfaces.Registry {
    private _map = new Map<interfaces.BindIdentifier<any>, interfaces.Resolvable>();

    hasKey(key: interfaces.BindIdentifier<any>): boolean {
        return this._map.has(key);
    }

    add(key: interfaces.BindIdentifier<any>, target: interfaces.Resolvable): void {
        this._map.set(key, target);
    }

    get(key: interfaces.BindIdentifier<any>): interfaces.Resolvable {
        const value = this._map.get(key)
        if (!value) {
            throw new Error('Key not found');
        }

        return value;
    }

    getExported(): interfaces.Resolvable<any>[] {
        const exported: interfaces.Resolvable[] = []
        this._map.forEach((idenitfier, value) => {
            if (idenitfier.exported) {
                exported.push(idenitfier)
            }
        });

        return exported;
    }
}