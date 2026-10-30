# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify` and `wordCount`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).

## Reporting bugs

When you open an issue, please include:

- The version you're using: the `version` field in `package.json` (and the commit SHA, if you're working from a checkout).
- Steps to reproduce: the code or input you ran, what you expected, and what happened instead.
