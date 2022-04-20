import Term from "./Term.js";
import Equation from "./Equation.js";
import Expression from "./Expression.js";

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

