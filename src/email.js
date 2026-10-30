/** Return true when the address looks like name@domain.tld. */
function isValidEmail(address) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);
}

/** Build the welcome email for a new user. */
function welcomeEmail(user) {
  return {
    to: user.email,
    subject: `Welcome, ${user.name}`,
    text: `Hi ${user.name},\n\nYour account is ready.\n`,
  };
}

/** Build the weekly digest email from a list of post titles. */
function digestEmail(user, titles) {
  const lines = titles.map((title) => `- ${title}`).join("\n");
  return {
    to: user.email,
    subject: `Your weekly digest (${titles.length} posts)`,
    text: `Hi ${user.name},\n\n${lines}\n`,
  };
}

module.exports = { isValidEmail, welcomeEmail, digestEmail };
