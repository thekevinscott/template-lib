import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';
import { options } from '../../src/bin';

const pkgRoot = fileURLToPath(new URL('../../', import.meta.url));
const binary = fileURLToPath(new URL('../../../rust/target/release/mynewproduct', import.meta.url));

// Stage the locally built binary where the published platform package would
// put it, as node.yml's smoke step does.
beforeAll(() => {
  const triple = options.triples[`${process.platform}-${process.arch}` as keyof typeof options.triples];
  const name = `@${options.scope}/${triple}`;
  const dir = `${pkgRoot}node_modules/${name}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/package.json`, JSON.stringify({ name, version: '0.0.1' }));
  copyFileSync(binary, `${dir}/${options.binaryName}`);
});

describe('mynewproduct', () => {
  it('prints its version', () => {
    const out = execFileSync('node', [`${pkgRoot}dist/bin.js`, '--version'], { encoding: 'utf8' });
    expect(out).toMatch(/^mynewproduct /);
  });
});
