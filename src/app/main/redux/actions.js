import types from "./types";

const appendDigit = (digit) => ({
    type: types.NEW_DIGIT,
    value: digit
});

/*
const add = () => ({
    type: types.ADD
});

const subtract = () => ({
    type: types.SUBTRACT
});

const divide = () => ({
    type: types.DIVIDE
});

const multiply = () => ({
    type: types.MULTIPLY
});
*/

const operator = (operationFunc) => ({
    type: types.OPERATION,
    func: operationFunc
});

const equal = () => ({
    type: types.EQUAL
});

const dot = () => ({
    type: types.DOT
});

const clear = () => ({
    type: types.CLEAR
});

export default {
    appendDigit,
    operator,
    equal,
    dot,
    clear
}