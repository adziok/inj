"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = exports.Inject = exports.Container = void 0;
var container_1 = require("../src/container/container");
Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return container_1.Container; } });
var inject_1 = require("./decorators/inject");
Object.defineProperty(exports, "Inject", { enumerable: true, get: function () { return inject_1.Inject; } });
var injectable_1 = require("./decorators/injectable");
Object.defineProperty(exports, "Injectable", { enumerable: true, get: function () { return injectable_1.Injectable; } });
//# sourceMappingURL=index.js.map