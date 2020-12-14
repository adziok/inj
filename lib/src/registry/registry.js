"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
var Registry = (function () {
    function Registry() {
        this._map = new Map();
    }
    Registry.prototype.hasKey = function (key) {
        return this._map.has(key);
    };
    Registry.prototype.add = function (key, target) {
        this._map.set(key, target);
    };
    Registry.prototype.get = function (key) {
        var value = this._map.get(key);
        if (!value) {
            throw new Error('Key not found');
        }
        return value;
    };
    Registry.prototype.getExported = function () {
        var exported = [];
        this._map.forEach(function (idenitfier, value) {
            if (idenitfier.exported) {
                exported.push(idenitfier);
            }
        });
        return exported;
    };
    return Registry;
}());
exports.Registry = Registry;
//# sourceMappingURL=registry.js.map