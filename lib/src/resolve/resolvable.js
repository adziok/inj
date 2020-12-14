"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolvable = void 0;
var Resolvable = (function () {
    function Resolvable(identifier) {
        this.exported = false;
        this.identifier = identifier;
    }
    Resolvable.prototype.resolve = function () {
        throw new Error("Method not implemented.");
    };
    Resolvable.prototype.setValue = function (value) {
        this.value = value;
    };
    Resolvable.prototype.setParentId = function (parentId) {
        if (this.parentId !== undefined) {
            throw new Error('Resolvable already has a parent');
        }
        this.parentId = parentId;
    };
    return Resolvable;
}());
exports.Resolvable = Resolvable;
//# sourceMappingURL=resolvable.js.map