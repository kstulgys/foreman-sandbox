# foreman-sandbox

A small text and email library. The Foreman factory (`kstulgys/flue-factory`) uses this repo as its factory repo for live checks and evals. Its pull requests and branches come from the factory and from those checks.

- `src/text.js`: `slugify`, `wordCount` and `capitalize`.
- `src/email.js`: `isValidEmail`, and the welcome and weekly digest emails.

Install with `pnpm install`, and run the tests with `pnpm test` (Jest).
