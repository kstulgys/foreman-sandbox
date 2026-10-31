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

/** Return the text with its first character in upper case. */
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = { slugify, wordCount, capitalize };
