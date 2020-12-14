import { Container } from "../src/container/container";
import { Inject } from "../src/decorators/inject";
import { Injectable } from "../src/decorators/injectable";

@Injectable()
class DependTest {
    constructor(@Inject('o') public x: any) {}

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
const container2 = new Container()

container2.bind(DependTest).to(DependTest, true)

container.bind(Test).to(Test)
container.bind('o').toValue({ xd: '2' })

container.load(container2)
const v = container.resolve(Test)
v.print()
v.a.print2()
console.log(v.a.x)