export default class Sequence implements Iterable<number> {
    private counter = 0;
    constructor(readonly maxval:number = 10) {}
    public [Symbol.iterator]() {
        return {
            next: () => {
                return {
                    done: this.counter === this.maxval,
                    value: this.counter++
                }
            }
        }
    }
}


export { Sequence as intSequence };
