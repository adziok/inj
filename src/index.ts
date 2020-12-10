import { Container } from "../src/container/container";

class Test {
    print() {
        console.log('test');
    }
}

const container = new Container()

container.bind(Test).to(Test)