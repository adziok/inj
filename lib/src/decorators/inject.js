"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
var inject_1 = require("../constants/inject");
var Inject = function (key) { return function (target, propertyKey, parameterIndex) {
    var constructorParams = Reflect.getMetadata('design:paramtypes', target) || [];
    constructorParams[parameterIndex] = key || constructorParams[parameterIndex];
    Reflect.defineMetadata(inject_1.ReflectKeys.CLASS_CONSTRUCTOR_PARAMS, constructorParams, target);
}; };
exports.Inject = Inject;
//# sourceMappingURL=inject.js.map