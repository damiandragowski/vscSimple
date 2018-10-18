declare namespace JSX {
    interface IntrinsicElements {
        someNewTag: any
    }
}

class CC {
    name :string;
    constructor({name:string = "abc"}) { this.name = name;}
}

function Cfactory() {
    return { some: () => {}}
} 

<someNewTag/>;
<CC name="fff"></CC>;
<Cfactory />;

