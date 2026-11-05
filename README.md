# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify` and `wordCount`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).

## Reporting bugs

When you report a bug, please include:

- The version: the `version` field in `package.json` and the commit from `git rev-parse --short HEAD`, plus your Node version (`node --version`).
- Steps to reproduce: the smallest input, the call you made, and the expected and actual behaviour.
