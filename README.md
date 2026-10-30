# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify` and `wordCount`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).

## Reporting bugs

Open an issue at https://github.com/kstulgys/foreman-sandbox/issues and include:

- The version you are using: the `version` field in `package.json`, or the commit (`git rev-parse --short HEAD`) if you work from a clone.
- Steps to reproduce the bug, ideally a minimal code snippet.
- What you expected to happen and what happened instead.
