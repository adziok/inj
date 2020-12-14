"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindTo = void 0;
var resolvable_types_1 = require("../constants/resolvable-types");
var BindTo = (function () {
    function BindTo(resolvable) {
        this.resolvable = resolvable;
    }
    BindTo.prototype.to = function (target, exported) {
        this.resolvable.type = resolvable_types_1.ResolvableTypesEnum.CONSTRUCTOR;
        this.resolvable.value = target;
        this.resolvable.exported = exported && exported || this.resolvable.exported;
    };
    BindTo.prototype.toValue = function (target, exported) {
        this.resolvable.type = resolvable_types_1.ResolvableTypesEnum.CONSTANT;
        this.resolvable.value = target;
        this.resolvable.exported = exported && exported || this.resolvable.exported;
    };
    return BindTo;
}());
exports.BindTo = BindTo;
//# sourceMappingURL=bind-to.js.map