import Term from "./Term.js";

class Expression {
    constructor() {
        this.terms = new Set;
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
        for (var term of terms.flat(1)) 
        this.add(term);
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

        for (const term of terms)   
            all.push(term.square());
        
        for (let i = 0, n = i + 1; i < array.length; i++, n++) {
            n = n !== array.length? n : 0;

            const term = array[i];
            const next = array[n];

            console.log(term, next)
            
            // Simple Trinominal Expression
            if (array.length === 2) break;
        };
    };

    static array(array) {
        return new Expression().addNth(...array);
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
    new Term(1, 'x'),
    new Term(5),
    new Term(1, 'y')
]

const enzo = new Expression().addNth(terms);

enzo.square();

export default Expression;