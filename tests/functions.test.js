import { test, expect } from "@jest/globals";
import { capitalize, reverseString } from "../src/functions.js"

test("capitalize hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse World to dlroW", () => {
    expect(reverseString("World")).toBe("dlroW")
});