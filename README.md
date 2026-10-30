# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify` and `wordCount`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).

## Reporting bugs

Open an issue on this repo and include:

- Your version: the `version` field in `package.json`, and the commit you're on (`git rev-parse --short HEAD`).
- Your Node version (`node --version`).
- Steps to reproduce: the smallest input or code that shows the bug, what you expected, and what happened instead.
