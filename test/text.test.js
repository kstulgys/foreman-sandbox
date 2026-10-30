import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify, wordCount } from "../src/text.js";

test("slugify joins words with a dash", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("slugify removes accents", () => {
  assert.equal(slugify("Crème brûlée"), "creme-brulee");
});

test("wordCount counts words", () => {
  assert.equal(wordCount("  one two   three "), 3);
  assert.equal(wordCount("   "), 0);
});
