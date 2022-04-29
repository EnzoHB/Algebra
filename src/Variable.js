class Variable {
    constructor(lit, exp) {
        this.var = lit || '1';
        this.exp = exp || 1;
    };

    multiply(n) {
        return new Variable(this.var, this.exp + 1);
    };

    divide(n) {
        return new Variable(this.var, this.exp - 1);
    };

    exponentiate(n) {
        return new Variable(this.var, this.exp * n);
    };

    square() {
        return new Variable(this.var, this.exp * 2);
    };

    same(b) {
        return Variable.same(this, b);
    };

    static same(a, b) {
        return a.var === b.var && a.exp === b.exp
    };

    static is(obj) {
        return obj instanceof Variable; 
    };

    static group(...variables) {
        let ref = new Map;

        for (let vrb of variables) {

            ref.has(vrb.var) ?
            ref.get(vrb.var).exp += 1 :

            ref.set(vrb.var, 
            ref.get(vrb.var) || new Variable(vrb.var, vrb.exp));
        };

        ref.size > 1 ?
        ref.delete('1') : 
        ref;

        return [ ...ref.values() ];
    };

    // ------------------------------ // 

    static x = new Variable('x');
    static y = new Variable('y');
    static 1 = new Variable('1');
};

const vars = [
    new Variable('x'),
    new Variable('x'),
    new Variable('y'),
    new Variable('y'),
    new Variable('y'),
    new Variable('a'),
    new Variable('a')
];

const enzo = new Variable('x', 2);
const top = new Variable('x', 2);



//console.log(Variable.group(...vars))


export default Variable;