class Variable {
    constructor(lit, exp) {
        this.var = lit || 1;
        this.exp = exp || 1;
    };
};

class Term {
    constructor(coe, ...variables) {
        this.coe = coe || 1;
        this.lit = {};

        variables.
    };

    /*
    set lit(c) {
        c = String(c);

        if (typeof c !== 'string') 
        throw new Error(`Cannot assign not strings to literal part: [ ${c} ] ${typeof c}`,);

        this.var = new Set(c.split(''));
    };

    get lit() {
        return Array.from(this.var).join('');
    };
    */

    multiply(n) {
        return new Term(this.coe * n, this.var, this.exp);
    };

    divide(n) {
        return new Term(this.coe / n, this.literal, this.exp);
    };

    exponentiate(n) {
        return new Term(this.coe ** n, this.lit, this.exp * n);
    };

    square() {
        return this.exponentiate(2); 
    };

    get pretty() {

        if (this.lit === 1)
            return `${this.coe}`;

        if (this.exp === 1)
            return `${this.coe}${this.var}`;
            return `${this.coe}${this.var}${this.exp}`;
    };

    union(...sets) {
        const union = new Set;

        for (const set of sets)
            for (const variable of set)
                union.add(variable);

        return union;
    };

    static literal(...sets) {
        return Array.from(Term.union(...sets)).join('');
    };
};

export default Term;

Term.lit.x.exp