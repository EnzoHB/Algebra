import Term from "./src/Term.js";
import Equation from "./src/Equation.js";
import Expression from "./src/Expression.js";

const terms = [
    new Term(2, 'x'),
    new Term(5),
    new Term(1, 'y')
];

const exps = [
    new Expression().addNth(terms[0], terms[1]),
    new Expression().add(terms[2])
];

const equations = [
    new Equation(exps[0]).equals(exps[1])
];

const equation = equations[0];

console.dir(equation.parseExpression(), { depth: 10 })

