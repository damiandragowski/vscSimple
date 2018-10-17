function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

interface A1 {
    kind : "A1";
    size : number;
}

interface A2 {
    kind : "A2"
    length : number;
}

interface A3 {
    kind : "A3"
    depth : number;
}

type A = A1 | A2 | A3

function getDimensionSize( a : A ) {
    switch(a.kind) {
        case "A1": return a.size;
        case "A2": return a.length;
        default: assertNever(a);
    }
}