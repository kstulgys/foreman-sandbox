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

/** Shorten a text to at most max characters, ending with "…" when cut. */
function truncate(text, max) {
  return text.length <= max ? text : text.slice(0, max - 1) + "…";
}

module.exports = { slugify, wordCount, truncate };
