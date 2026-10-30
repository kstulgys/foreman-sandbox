/** Turn a title into a URL slug: lower case, words joined by "-". */
function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Count the words in a text. */
function wordCount(text) {
  const words = text.trim().split(/\s+/);
  return words[0] === "" ? 0 : words.length;
}

/** Count the characters (Unicode code points) in a text. With `spaces: false`, whitespace is left out. */
function charCount(text, { spaces = true } = {}) {
  return Array.from(spaces ? text : text.replace(/\s/g, "")).length;
}

module.exports = { slugify, wordCount, charCount };
