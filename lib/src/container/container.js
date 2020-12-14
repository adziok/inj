"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
require("reflect-metadata");
var resolvable_types_1 = require("../constants/resolvable-types");
var resolvable_1 = require("../resolve/resolvable");
var bind_to_1 = require("../bindings/bind-to");
var registry_1 = require("../registry/registry");
var inject_1 = require("../constants/inject");
var generate_id_1 = require("../utils/generate-id");
var Container = (function () {
    function Container() {
        this.registry = new registry_1.Registry();
        this.cache = new Map();
        this.instances = new Map();
        this.exports = new Map();
        this.imports = [];
        this.id = generate_id_1.generateId();
    }
    Container.prototype.load = function (container) {
        var _this = this;
        var exported = container.registry.getExported();
        exported.map(function (v) { return _this.registry.add(v.identifier, v); });
    };
    Container.prototype.unload = function (container) {
        var _this = this;
        var exported = container.registry.getExported();
        exported.map(function (v) { return _this.registry.add(v.identifier, v); });
    };
    Container.prototype.resolve = function (key) {
        if (!this.registry.hasKey(key))
            throw new Error('Can\'t resolve dependency, key not exist');
        var target = this.registry.get(key);
        var result = this._resolve(target);
        return result;
    };
    Container.prototype.bind = function (key) {
        var resolvable = new resolvable_1.Resolvable(key);
        resolvable.setParentId(this.id);
        this.registry.add(key, resolvable);
        return new bind_to_1.BindTo(resolvable);
    };
    Container.prototype._resolve = function (target) {
        var _a;
        var _this = this;
        if (target.type === resolvable_types_1.ResolvableTypesEnum.CONSTANT || target.type === resolvable_types_1.ResolvableTypesEnum.FUNCTION) {
            return target.value;
        }
        if (target.type === resolvable_types_1.ResolvableTypesEnum.CONSTRUCTOR) {
            var requiredParams = Reflect.getMetadata(inject_1.ReflectKeys.CLASS_CONSTRUCTOR_PARAMS, target.value) || [];
            var args = requiredParams.map(function (param) { return _this.resolve(param); });
            return new ((_a = target.value).bind.apply(_a, __spreadArrays([void 0], args)))();
        }
        throw new Error('Invalid resolvable type');
    };
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map