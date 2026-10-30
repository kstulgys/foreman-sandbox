/** Turn a title into a URL slug: lower case, words joined by "-". */
export function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Count the words in a text. */
export function wordCount(text) {
  const words = text.trim().split(/\s+/);
  return words[0] === "" ? 0 : words.length;
}
