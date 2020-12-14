"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
var binding_scopes_1 = require("../constants/binding-scopes");
var inject_1 = require("../constants/inject");
var Injectable = function (injectableOptions) {
    if (injectableOptions === void 0) { injectableOptions = { scope: binding_scopes_1.BindingScopesEnum.DEFAULT }; }
    return function (target) {
        Reflect.defineMetadata(inject_1.ReflectKeys.INJECTION_OPTIONS, injectableOptions, target);
    };
};
exports.Injectable = Injectable;
//# sourceMappingURL=injectable.js.map