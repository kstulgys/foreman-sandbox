const { isValidEmail, welcomeEmail, digestEmail } = require("../src/email.js");

test("isValidEmail accepts a normal address", () => {
  expect(isValidEmail("ana@example.com")).toBe(true);
  expect(isValidEmail("ana@example")).toBe(false);
});

test("welcomeEmail greets the user", () => {
  const email = welcomeEmail({ name: "Ana", email: "ana@example.com" });
  expect(email.subject).toBe("Welcome, Ana");
});

test("digestEmail lists the posts", () => {
  const email = digestEmail({ name: "Ana", email: "ana@example.com" }, ["One", "Two"]);
  expect(email.text).toContain("- Two");
});
