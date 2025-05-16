import { describe, expect, it } from 'vitest'

function add(a: number, b: number) {
  return a +b
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})


function minus(a: number, b: number) {
    return a - b;
}

describe('minus', () => {
  it('subtracts two numbers', () => {
    expect(minus(5, 3)).toBe(2);
    expect(minus(10, 4)).toBe(6);
    expect(minus(0, 0)).toBe(0);
    expect(minus(-1, -1)).toBe(0);
    expect(minus(-5, -3)).toBe(-2);
  });
});




function multiple(a: number, b: number) {
    return a * b;
}

describe('multiple', () => {
    it('multiplies two nummbers', () => {
        expect(multiple(2,3)).toBe(6)
    })
})




function divide(a: number, b: number) {
    return a/b
}


describe('divide', () => {
    it('divides two numbers', () => {
        expect(divide(6,3)).toBe(2)
    })
})


function power(a: number, b: number) {
    return a ** b
}

describe('power', () => {
    it('raises a number to the power of another number', () => {
        expect(power(2,3)).toBe(8)
        expect(power(3,2)).toBe(9)
        expect(power(5,0)).toBe(1)
        expect(power(0,5)).toBe(0)
    })
})