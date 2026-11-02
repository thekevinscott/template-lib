# Docs — agent contract

The site is the home page (`index.md`), `motivation.md`, `getting-started.md`, one page per feature (`feature.md`), `guides/` (`guide.md`) and `api/` (`config.md`, `cli.md`).
Don't add pages unless asked.

API pages put options in tables. Config keys are headings, each with Type and Default bullets.

`internals/`, `changelog.d/`, `migrations.d/`, `migrations.md` and `AGENTS.md`
are contributor and agent material, kept out of the build by `srcExclude` in
`.vitepress/config.ts`. `migrations.md` stays as a pointer stub at the
conventional path (see `internals/repo.md`).
