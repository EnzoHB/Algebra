import Expression from "./Expression.js";
import Term from "./Term.js";
import Variable from "./Variable.js";

class Equation {
    constructor(expression) {
        this.expression = expression;
    };

    equals(equals) {
        const terms = [];
        const { expression } = this;

        const push = term => terms.push(term);

        expression.each(push);
        equals.multiply(Term.minus).each(push);

        return (
            new Equation(
            new Expression().addNth(...terms))
        );
    }; 

    solve(scope) {

    }

    apply(scope) {
        // Scope should vbe a map;
        // Each key should be a variable instance with is defined  value;
    };

    parseExpression(scope) {
        let { expression } = this;

        let parsed = new Map;
        let term;

        for (term of expression) {

            let variables = [...term.lit];
            let terms;
            let info;
            let done;

            for ([ info, terms ] of parsed) {
                if (Term.sameLiteral(info, variables)) {
                    terms.push(term);

                    done = true; 
                    break;
            }};
    
            if (done) continue;

            parsed.set(variables, [ term ]);
        };

        return parsed;
    };
};

const terms = [
    new Term(1, new Variable('x')),
    new Term(1, new Variable('y')),
    new Term(1, new Variable('z'))
];

const exp = new Expression(...terms);
const equation = new Equation(exp.square().square().square());

console.log(equation.parseExpression())

/*
const expression = new Expression(terms[0], terms[1]);
const other = new Expression(terms[2]);

const equation = new Equation(expression).equals(other);

equation.parseExpression()

//console.dir(equation, { depth: 10 })

// term.

// Pegar o mapa
/**
 * [ { value: null, variable: [Variable] }, {   }]
 */

export default Equation;