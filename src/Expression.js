import Term from "./Term.js";
import Variable from "./Variable.js";

class Expression {
    constructor(...terms) {
        this.terms = new Set;
        terms.length && this.addNth(terms);
    };

    get array() {
        return Array.from(this.terms);
    };

    add(term) {
        return (
            this.terms.add(term),
            this
        );
    };

    addNth(...terms) {
        terms = terms.flat();

        terms.map(term => this.
        terms.add(term))

        return this;
    };

    each(callback) {
        return this.terms.forEach(callback)
    };

    multiply(n) {
        return Expression.array(this.array.map(term => term.multiply(n)));
    };

    divide(n) {
        return Expression.array(this.array.map(term => term.divide(n)));
    };

    square() {
        const all = [];

        const { array } = this;
        const { terms } = this;

        const two = new Term(2);

        terms.forEach(term => 
            all.push(term.square()))

        for (let i = 0, n = i + 1; i < array.length; i++, n++) {
            if (n === array.length)
                n = 0;

            const prev = array[i];
            const next = array[n];
            const term = prev.multiply(next).multiply(two);

            all.push(term); 

            // Simple Trinomial Expression
            if (array.length === 2)
            break;
        };

        return new Expression().addNth(all);
    };

    static array(array) {
        return new Expression().addNth(...array);
    };

    get pretty() {
        let string = '';
        let { terms } = this;
        let term;

        for (term of terms) {
            string += '+';

            if (term.coe < 0)
                continue strin
        };
    };

    // ----------- Iteration ----------- //

    [Symbol.iterator]() {
        return this.iterator();
    };

    *iterator() {
        for (var term of this.terms) 
            yield term;
    };
};

const terms = [
    new Term(1, Variable.x),
    new Term(5),
]

const enzo = new Expression().addNth(terms);

//console.dir(enzo, { depth: 10 })
const variable = new Variable('x')
const term = new Term('4', variable);
//console.dir(enzo.square().multiply(term), { depth: 10 });

export default Expression;