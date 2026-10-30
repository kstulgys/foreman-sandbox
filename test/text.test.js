const { slugify, wordCount, charCount } = require("../src/text.js");

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

test("charCount counts every character by default", () => {
  expect(charCount("a b\tc\n")).toBe(6);
  expect(charCount("hello world")).toBe(11);
});

test("charCount with spaces: true counts every character", () => {
  expect(charCount("a b\tc\n", { spaces: true })).toBe(6);
  expect(charCount("hello world", { spaces: true })).toBe(11);
});

test("charCount with spaces: false leaves out whitespace", () => {
  expect(charCount("a b\tc\n", { spaces: false })).toBe(3);
  expect(charCount(" one two ", { spaces: false })).toBe(6);
});

test("charCount handles empty and whitespace-only text", () => {
  expect(charCount("")).toBe(0);
  expect(charCount("", { spaces: false })).toBe(0);
  expect(charCount("   ", { spaces: false })).toBe(0);
});

test("charCount counts emoji as one character", () => {
  expect(charCount("hi 😀")).toBe(4);
  expect(charCount("hi 😀", { spaces: false })).toBe(3);
});
