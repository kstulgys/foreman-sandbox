const { slugify, wordCount } = require("../src/text.js");

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
