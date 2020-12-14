"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("../src/container/container");
var inject_1 = require("../src/decorators/inject");
var injectable_1 = require("../src/decorators/injectable");
var DependTest = (function () {
    function DependTest(x) {
        this.x = x;
    }
    DependTest.prototype.print2 = function () {
        console.log('depended test');
    };
    DependTest = __decorate([
        injectable_1.Injectable(),
        __param(0, inject_1.Inject('o')),
        __metadata("design:paramtypes", [Object])
    ], DependTest);
    return DependTest;
}());
var DependTestValue = (function () {
    function DependTestValue() {
    }
    DependTestValue = __decorate([
        injectable_1.Injectable()
    ], DependTestValue);
    return DependTestValue;
}());
var Test = (function () {
    function Test(a, b) {
        this.a = a;
        this.b = b;
    }
    Test.prototype.print = function () {
        console.log('test');
    };
    Test = __decorate([
        injectable_1.Injectable(),
        __param(1, inject_1.Inject('o')),
        __metadata("design:paramtypes", [DependTest, Object])
    ], Test);
    return Test;
}());
var container = new container_1.Container();
var container2 = new container_1.Container();
container2.bind(DependTest).to(DependTest, true);
container.bind(Test).to(Test);
container.bind('o').toValue({ xd: '2' });
container.load(container2);
var v = container.resolve(Test);
v.print();
v.a.print2();
console.log(v.a.x);
//# sourceMappingURL=index.js.map