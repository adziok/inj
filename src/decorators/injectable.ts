import { interfaces } from '../interfaces';
import { BindingScopesEnum } from '../constants/binding-scopes';
import { ReflectKeys } from '../constants/inject';

export type InjectOptions = {
    scope: interfaces.BindingScopes
}
export const Injectable = (
    injectableOptions: InjectOptions = { scope: BindingScopesEnum.DEFAULT }
) => (target: any) => {
    Reflect.defineMetadata(ReflectKeys.INJECTION_OPTIONS, injectableOptions, target);
};