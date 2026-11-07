const { wordCount } = require("./text");

const WORDS_PER_MINUTE = 200;

/** The minutes that a text takes to read, rounded up. */
function readingTime(text) {
  return Math.ceil(wordCount(text) / WORDS_PER_MINUTE);
}

module.exports = { readingTime };
