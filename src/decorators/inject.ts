import { interfaces } from "../interfaces";

export const Inject = (key: interfaces.InjectKeys): any => (
    target: any,
    propertyKey: string,
    parameterIndex: number
) => {
    const constructorParams = Reflect.getMetadata('design:paramtypes', target);

    constructorParams[parameterIndex] = key || constructorParams[parameterIndex];

    Reflect.defineMetadata('design:paramtypes', constructorParams, target);
};
