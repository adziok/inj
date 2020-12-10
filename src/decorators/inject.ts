import { ReflectKeys } from "../constants/inject";
import { interfaces } from "../interfaces";

export const Inject = (key: interfaces.InjectKeys): any => (
    target: any,
    propertyKey: string,
    parameterIndex: number
) => {
    const constructorParams = Reflect.getMetadata('design:paramtypes', target) || [];

    constructorParams[parameterIndex] = key || constructorParams[parameterIndex];

    Reflect.defineMetadata(ReflectKeys.CLASS_CONSTRUCTOR_PARAMS, constructorParams, target);
};
