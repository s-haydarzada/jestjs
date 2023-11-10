function add(a, b) {
    return a + b;
}

function subst(a, b) {
    return a - b;
}

function divide(a, b) {
    if (a !== 0 && b === 0) {
        throw new Error("Cannot divide by zero")
    } else if (a === 0 && b === 0) {
        throw new Error("Invalid format")
    } else {
        return a / b
    }
}

function multiply(a,b){
    return a*b
}

module.exports = { add, subst, divide,multiply };