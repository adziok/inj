import { Container } from "../src/container/container";
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
    constructor(public a: DependTest, public b: DependTestValue) {}

    print() {
        console.log('test');
    }
}

const container = new Container()

container.bind(Test).to(Test)
container.bind(DependTest).to(DependTest)
container.bind(DependTestValue).toValue({ xd: '2' })

const v = container.resolve(Test)
v.print()
v.a.print2()
console.log(v.b)