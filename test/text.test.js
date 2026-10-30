const { slugify, wordCount, truncate } = require("../src/text.js");

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

test("truncate keeps shorter text unchanged", () => {
  expect(truncate("hello", 10)).toBe("hello");
});

test("truncate keeps text of exactly max characters unchanged", () => {
  expect(truncate("hello", 5)).toBe("hello");
});

test("truncate cuts longer text to max characters with an ellipsis", () => {
  const result = truncate("hello world", 8);
  expect(result).toBe("hello w\u2026");
  expect(result.length).toBe(8);
});

test("truncate uses the U+2026 ellipsis, not three dots", () => {
  const result = truncate("hello world", 8);
  expect(result.endsWith("\u2026")).toBe(true);
  expect(result).not.toContain("...");
});
