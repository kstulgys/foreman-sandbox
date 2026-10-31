const { slugify, wordCount, capitalize } = require("../src/text.js");

test("slugify joins words with a dash", () => {
  expect(slugify("Hello, World!")).toBe("hello-world");
});

test("slugify removes accents", () => {
  expect(slugify("Crème brûlée")).toBe("creme-brulee");
});

test("wordCount counts words", () => {
  expect(wordCount("  one two   three ")).toBe(3);
  expect(wordCount("   ")).toBe(0);
});

test("capitalize upper-cases the first character", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalize leaves the rest unchanged", () => {
  expect(capitalize("hELLO")).toBe("HELLO");
  expect(capitalize("Already")).toBe("Already");
});

test("capitalize returns an empty string for an empty string", () => {
  expect(capitalize("")).toBe("");
});
