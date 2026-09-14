import { test, expect } from "@jest/globals";
import { capitalize, reverseString, calculator } from "../src/functions.js"

test("capitalize hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse World to dlroW", () => {
    expect(reverseString("World")).toBe("dlroW")
});

test("calculator add 1 + 2", () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test("calculator subtract 2 - 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1)
})

test("calculator divide 4 / 2", () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

test("calculator multiply 2 * 2", () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})
