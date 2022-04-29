import Variable from "./Variable.js";

class Term {
    constructor(coe, ...variables) {
        const lit = new Set;

        this.coe = coe;
        this.lit = lit;

        if (!variables.every(Variable.is))
            throw new Error(Term.mustBeVariable);

        // ----------------------------------- //

        Variable.group(...variables).map(lit.add.bind(lit));

        if (!variables.length)
            lit.add(Variable[1]);

            // Quando adicionar n variáveis fazer a exponenciação
            // Quando só tiver nada, fazer a default var;
            // Poder adicionar vriáveis na forma de string 
    };

    multiply(term) {
        return new Term(this.coe * term.coe, ...this.lit, ...term.lit);
    };

    divide(term) {
        return new Term(this.coe / term.coe, ...this.lit, ...term.lit);
    };

    exponentiate(n) {
        const { lit } = this;
        const { coe } = this;

        const coefficient = coe ** n;
        const variables = [...lit].map(variable => variable.exponentiate(n));

        return new Term(coefficient, ...variables);
    };

    square() {
        return this.exponentiate(2); 
    };

    sameLiteral(b) {
        return Term.sameLiteral(this.lit, b.lit);
    };

    static sameLiteral(a, b) {
        a = [...a];
        b = [...b];
    
        return (
            a.every(c => 
            b.some(d => 
            c.same(d))) && 

            b.every(c => 
            a.some(d => 
            c.same(d))) 
        );
    };

    get pretty() {
        const { coe } = this;
        const { lit } = this;

        let pretty = `${coe}`;

        lit.forEach(vrb => {
            ( pretty += vrb.var ) && vrb.exp > 1 ?
            ( pretty += `^${vrb.exp}` ) : false;
        })

        return pretty;
    };

    // ------------ Error Logs ------------ //

    static mustBeVariable = 'Variables must be instances of Variable';

    // ------------ Error Logs ------------ //

    static minus = new Term(-1);
};

const terms = [
    new Term(5, Variable.x, Variable.y.square()),
    new Term(5, Variable.x, Variable.y)
];

//console.dir(term, { depth: 10 })
export default Term;