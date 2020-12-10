import { Container } from "../src/container/container";
import { Inject } from "../src/decorators/inject";
import { Injectable } from "../src/decorators/injectable";

@Injectable()
class DependTest {
    print2() {
        console.log('depended test')
    }
}

@Injectable()
class DependTestValue {}

@Injectable()
class Test {
    constructor(public a: DependTest, @Inject('o') public b: any) {}

    print() {
        console.log('test');
    }
}

const container = new Container()

container.bind(Test).to(Test)
container.bind(DependTest).to(DependTest)
container.bind('o').toValue({ xd: '2' })

const v = container.resolve(Test)
v.print()
v.a.print2()
console.log(v.b)