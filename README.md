# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify` and `wordCount`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).

## Reporting bugs

Open an issue on GitHub and include:

- The version you're using (the `version` field in `package.json`, or the commit).
- Steps to reproduce, with what you expected and what happened instead.
