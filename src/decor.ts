function AutoIdent<T extends {new(...args:any[]):{}}>(constructor:T) {
    let counter = 0;
    return class extends constructor {
        id = counter++;
    }
}

function sealed(constructor: Function) {
    console.log("sealed constructur to immune by properties adding/removing")
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
import "reflect-metadata";
const msgMetadataKey = Symbol("message");

function testDecor(msg:string) {
    return Reflect.metadata(msgMetadataKey, msg);
}

@sealed
@AutoIdent
export class UniqueNumber {
    someMsg: string;
    constructor(m: string) {
        this.someMsg = m;
    }

    @testDecor("hello before")
    testMethod() {
        console.log("Hello from test method");
        console.log(Reflect.getMetadata(msgMetadataKey, this, "testMethod")); // extract value by property name of this object,and key of metadata
    }
}