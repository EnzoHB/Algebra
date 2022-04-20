import Expression from "./Expression.js";

class Equation {
    constructor(expression) {
        this.expression = expression;
    };

    equals(equals) {
        const terms = [];
        const { expression } = this;

        const push = term => terms.push(term);

        expression.each(push);
        equals.multiply(-1).each(push);

        return (
            new Equation(
            new Expression().addNth(...terms))
        );
    }; 

    solve(scope) {}

    parseExpression(scope = {}) {
        const { expression } = this;

        const parsed = new Map;
        const Variable = class { value = null; exp = new Map }; 

        for (const term of expression) {
            const { exp } = 
            
            parsed.set(term.var, 
            parsed.get(term.var) || new Variable).get(term.var);

            exp.set(term.exp,
            exp.get(term.exp) || [])
            
            .get(term.exp)
            .push(term);
        };

        // Add support for expressions scopes;
        for (const [ variable, number ] in scope)
            parsed.get(variable).value = number;

        return parsed;
    };
};

export default Equation;