/** The initials of a person's name: the first letters of the first two words. */
function initials(name) {
  const words = name.split(" ");
  return words[0][0] + words[1][0];
}

module.exports = { initials };
