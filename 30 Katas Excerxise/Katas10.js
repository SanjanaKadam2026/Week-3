function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid Operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));