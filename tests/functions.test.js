import { test, expect } from "@jest/globals";
import { capitalize } from "../src/functions.js"

test("capitalize hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});