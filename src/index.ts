import Sequence  from './sequence'
import * as helper  from './helper'

let c = new Sequence(100);
for (let i of c) console.log(i);

// diff properties of two types
type Diff<T, U> = T extends U ? never : T;
// intersect propreties of two types
type Filter<T, U> = T extends U ? T : never;
// 
//type NonNullable<T> = Diff<T, null | undefined>;

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
        case "A3": return a.depth;

        default: helper.assertNever(a);
    }
}

type Nullable<T> = { [P in keyof T]: T[P] | null }
//type Partial<T> = { [P in keyof T]?: T[P] }

interface keyUnion {
    key1 : "key1";
    key2 : "key2";
    key3 : "key3";
    key4 : "key4";
}
interface keyIntUnion {
    key1 : 1;
    key2 : 2;
    key3 : 3;
    key4 : 4;
}

let key :keyof keyUnion; // union of key1|key2|key3|key4
key = "key3";

// conditional types
type typeToString<T> = 
    T extends string ? "string" : 
    T extends number ? "number" :
    "unknown type";
type checkedType = typeToString<string>;

declare function getKey<T>(x : T): T extends keyUnion ? string : number

function logKey<U> ( x : U) {
    let a = getKey(x);
    let b : string | number = a;
    console.log(b);
}
class keyUnionImpl implements keyUnion {
    key1 : "key1" = "key1";
    key2 : "key2" = "key2";
    key3 : "key3" = "key3";
    key4 : "key4" = "key4";
}
//logKey(new keyUnionImpl)

function tt1():number {
    return 0;
}

type unpacked<T> = 
    T extends (...args: any[]) => infer U ? U : 
    T extends (infer U)[] ? U : 
    T extends Promise<infer U> ? U : 
    T;


type t1 = unpacked<() => number>;
let t2 : t1 = 1;

// infer type in covariant position
type covariantInfer<T> = T extends { a: infer U, b: infer U } ? U : never;
// infer type in cotravariant position
type contraVariantInfer<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;

type contraCoVariantInfer<T, X> = T extends { a: (x: X) => infer U, b: (x: X) => infer U } ? U : never;

type sample1 = covariantInfer< { a: string, b: number} >
type sample2 = contraVariantInfer< { a : (x: number) => void, b: (x: number) => void}>; 
type sample3 = contraCoVariantInfer< { a : (x: number) => void, b: (x: number) => void}, number>; 

let f1 :sample1 = "damian";
console.log(f1)


//let clo = new Time.AnalogClock(12,34);
//console.log(clo.tick());
interface B1 {
    name :string;
}
interface B1 {
    surname: string;
    name :string; // is the same could be merged
}

class B2 implements B1 {
    name :string;
    surname : string;
    constructor(a:string, b:string) { this.name = a; this.surname = b;}
}
let bb8 = new B2("aaa", "bbb");
console.log(bb8);


import {UniqueNumber} from "./decor";
let c1 = new UniqueNumber("world")
console.log(c1);
console.log(new UniqueNumber("world"));
console.log(new UniqueNumber("world"));
c1.testMethod();
