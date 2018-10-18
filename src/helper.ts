// use this to check if parameter is some object
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

// extract key from object, check if that object has that key
function extractKey<T, U extends keyof T> ( t : T, key : U ): T[U] {
    return t[key];
}

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export { assertNever };
export { extractKey };
export { FunctionPropertyNames };
export { FunctionProperties };
export { NonFunctionPropertyNames };
export { NonFunctionProperties };