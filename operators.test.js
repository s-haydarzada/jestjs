const {add,subst,divide,multiply} = require('./operators');

describe("Sum function:", () => {
    test('adds 1 + 2 to be 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 1 + 0 to be 1', () => {
        expect(add(1, 0)).toBe(1);
    });

    test('adds 0 + 1 to be 1', () => {
        expect(add(0, 1)).toBe(1);
    });

    test('adds 0 + -1 to be -1', () => {
        expect(add(0, -1)).toBe(-1);
    });

    test('adds -1 + 0 to be -1', () => {
        expect(add(-1, 0)).toBe(-1);
    });

    test('adds -1 + 1 to be 0', () => {
        expect(add(-1, 1)).toBe(0);
    });

    test('adds 1 + -1 to be 0', () => {
        expect(add(1, -1)).toBe(0);
    });

    test('adds -1 + -2 to be -3', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('adds 0.1 + 0.2 toBeCloseTo 0.3', () => {
        expect(add(0.1,0.2)).toBeCloseTo(0.3);
    });

    test('adds 0.1 + 0.2 to be less than 0.3', () => {
        expect(add(0.1,0.2)).toBeGreaterThan(0.3);
    });
})

describe("Subst function:", () => {
    test('subst 3 - 2 to be 1', () => {
        expect(subst(3, 2)).toBe(1);
    });
    test('subst 1 - 1 to be 0', () => {
        expect(subst(1, 1)).toBe(0);
    });

    test('subst 1 - -1 to be 2', () => {
        expect(subst(1, -1)).toBe(2);
    });

    test('subst -1 - 1 to be -2', () => {
        expect(subst(-1, 1)).toBe(-2);
    });

    test('subst -1 - -1 to be 0', () => {
        expect(subst(-1, -1)).toBe(0);
    });

    test('subst -1 - 0 to be -1', () => {
        expect(subst(-1, 0)).toBe(-1);
    });

    test('subst 0 - 1 to be -1', () => {
        expect(subst(0, 1)).toBe(-1);
    });

    test('subst 1 - 0 to be 1', () => {
        expect(subst(1, 0)).toBe(1);
    });

    test('subst 0.4 - 0.2 to be 0.2', () => {
        expect(subst(0.4, 0.2)).toBe(0.2);
    });

    test('subst 5 - 2 to be less than or equal 3', () => {
        expect(subst(5, 2)).toBeLessThanOrEqual(3);
    });
})

describe("Divide function:", () => {
    test('divide 4 / 2 to be 2', () => {
        expect(divide(4,2)).toBe(2);
    });

    test('divide 4 /0  to be error', () => {
        expect(()=>divide(4,0)).toThrow(new Error("Cannot divide by zero"))
    });
})

describe("Multiply function:", () => {
    test('multiply 0.1 * 0.2 to be 0.02', () => {
        expect(multiply(0.1,0.2)).toBeCloseTo(0.02);
    });

    test('multiply 2 * 4 to be 8', () => {
        expect(multiply(2,4)).toBe(8);
    });

    test('multiply 0 * 1 to be 0', () => {
        expect(multiply(0,1)).toBe(0);
    });

    test('multiply 2 * 0 to be 0', () => {
        expect(multiply(2,0)).toBe(0);
    });

    test('multiply 0 * 0 to be 0', () => {
        expect(multiply(0,0)).toBe(0);
    });

    test('multiply 0 * -1 to be 0', () => {
        expect(multiply(0,-1)).toBeCloseTo(0);
    });

    test('multiply -1 * 0 to be 0', () => {
        expect(multiply(-1,0)).toBeCloseTo(0);
    });

    test('multiply -1 * -5 to be 5', () => {
        expect(multiply(-1,-5)).toBe(5);
    });
})


