import { defineConfig } from 'vitepress'

// Per-project value: a clone renames this along with the identical
// `repository` URLs in packages/{node/package.json,python/pyproject.toml,rust/Cargo.toml}
// (a find-and-replace of the URL covers all of them) and `base` below.
const repository = 'https://github.com/thekevinscott/template-lib'

export default defineConfig({
  title: '',
  description: '',
  base: '/template-lib/',
  cleanUrls: true,
  // AGENTS.md is an agent-facing contract, not site content — keep it out of
  // the build. The changelog/migration fragment folders are the raw record
  // (one file per PR, see docs/internals/repo.md); they never publish either.
  // internals/ is contributor/agent-facing material, also excluded.
  // migrations.md is a pointer stub at the conventional path.
  srcExclude: ['**/AGENTS.md', 'changelog.d/**', 'migrations.d/**', 'internals/**', 'migrations.md'],
  themeConfig: {
    sidebar: [
      {
        items: [
          { text: 'Motivation', link: '/motivation' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Feature', link: '/feature' },
        ],
      },
      {
        text: 'Guides',
        items: [{ text: 'Guide', link: '/guides/guide' }],
      },
      {
        text: 'API',
        items: [
          { text: 'Config', link: '/api/config' },
          { text: 'CLI', link: '/api/cli' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: repository }],
    search: { provider: 'local' },
    outline: [2, 3],
  },
})
