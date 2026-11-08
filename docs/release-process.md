# Release Process

## Overview

This project uses [git-cliff](https://git-cliff.org) with [Conventional Commits](https://www.conventionalcommits.org). The [release workflow](../.github/workflows/publish.yml) installs git-cliff **2.10.1**, determines release eligibility separately from changelog inclusion, and automates versioning, npm publishing, and GitHub releases. There are no manual version bumps or release-tool dependencies in `package.json`.

The [changelog configuration](../cliff.toml) includes **every commit**, including unconventional commits and non-release types. Commits are grouped once per heading with scoped descriptions and repository-aware commit links. The full changelog is regenerated from Git history at release time; non-release commits wait for the next release rather than being discarded.

## Step-by-Step: Making a Release

### 1. Write Code on a Feature Branch

```sh
git checkout -b feat/my-feature
```

### 2. Commit Using Conventional Commit Messages

Every commit message must follow the format:

```
type(optional-scope): description
```

**Types that trigger a release:**

| Type | Bump | Example |
|---|---|---|
| `feat` | Minor (`1.x.0`) | `feat: add watch mode` |
| `fix` | Patch (`1.0.x`) | `fix: resolve path edge case` |
| `perf` | Patch (`1.0.x`) | `perf: cache module resolution` |
| `revert` | Patch (`1.0.x`) | `revert: undo feature X` |

**Types that do NOT trigger a release:**

| Type | Example |
|---|---|
| `docs` | `docs: update README` |
| `style` | `style: fix formatting` |
| `chore` | `chore: update deps` |
| `refactor` | `refactor: simplify bundler` |
| `test` | `test: add bundler tests` |
| `build` | `build: update esbuild config` |
| `ci` | `ci: fix workflow` |

**Breaking changes** (major bump `x.0.0`):

Any conventional type can trigger a major release: add `!` after the type or scope, or include a `BREAKING CHANGE:` or `BREAKING-CHANGE:` footer:

```
refactor(api)!: remove the deprecated option

BREAKING CHANGE: The deprecated option is no longer accepted.
```

### 3. Push and Open a Pull Request

```sh
git push -u origin feat/my-feature
```

Open a PR targeting `main`. The [CI workflow](../.github/workflows/ci.yml) runs lint and the TypeScript build (which also type-checks) across Node.js 20, 22, and 24. All checks must pass. There is currently no implemented test suite or separate audit gate; the placeholder `test` script is not a release gate.

### 4. Merge to `main`

Merge the PR (squash or merge commit — both work). The commit message(s) on `main` determine release eligibility and what git-cliff reads, so:

- **Squash merge**: Edit the squash commit message to use the correct conventional commit format.
- **Merge commit**: Each individual commit on the branch is analyzed, so they should all follow the format.

### 5. Automated Release (Hands-Off)

After the merge, the `publish.yml` workflow triggers automatically and does everything:

1. Serializes publishing runs without cancelling an in-progress release and checks out the current `main` with full history and tags
2. Checks commits since the latest reachable `vMAJOR.MINOR.PATCH` release tag (or all history if no release tag exists; the initial tag is `v0.1.0`)
3. Skips non-release-only histories; otherwise uses `git-cliff --bumped-version`, safely skipping empty, unchanged, or "There is nothing to bump" results and failing on other errors
4. Generates separate release notes with `--unreleased --strip header` and regenerates the **full** `CHANGELOG.md`, both using `--github-repo "$GITHUB_REPOSITORY"` and `--use-branch-tags` so unmerged branch tags do not affect main's releases
5. Strips the `v` prefix and updates `package.json` with `npm version --no-git-tag-version`
6. Runs `pnpm lint`, `pnpm -s build`, and `pnpm pack`
7. Publishes the packed artifact to npm with provenance attestation via Trusted Publishing
8. Commits `CHANGELOG.md` and `package.json` back to `main` with `[skip ci]`, creates the release tag, and pushes only that tag and the release commit
9. Creates a GitHub Release with the separate release notes and the `esbuild-plugin-swc-minify` package artifact

### 6. Verify

- Check the [Actions tab](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/actions) for the workflow run
- Check [npm](https://www.npmjs.com/package/esbuild-plugin-swc-minify) for the published version
- Check [Releases](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/releases) for the GitHub release

## Dry Run (Local Testing)

Install git-cliff 2.10.1 locally, then preview without updating tracked files, publishing, committing, or tagging:

```sh
git-cliff --github-repo D1g1talEntr0py/esbuild-plugin-swc-minify --use-branch-tags --bumped-version
git-cliff --github-repo D1g1talEntr0py/esbuild-plugin-swc-minify --use-branch-tags --unreleased --strip header
git-cliff --github-repo D1g1talEntr0py/esbuild-plugin-swc-minify --use-branch-tags
```

Local history and tags must be complete. These commands do not require a token for basic commit links. A bumped-version preview alone is **not** a release eligibility check: the workflow first checks conventional commit headers and breaking-change footers. Non-release commits remain visible in the preview.

## Troubleshooting

**No release was created after merging:**
- The commits on `main` don't include any release-worthy types. Only `feat`, `fix`, `perf`, and `revert` independently trigger releases; any conventional breaking change triggers a major release.
- Non-release types, including `refactor`, still appear in the next release's regenerated changelog.

**Wrong version bump:**
- Check the commit messages. A `feat` always bumps minor, `fix`/`perf`/`revert` bump patch, and `!`, `BREAKING CHANGE:`, or `BREAKING-CHANGE:` on a conventional commit bump major.

**npm publish failed:**
- Verify the `npm` environment exists in the repo's GitHub Settings → Environments.
- Verify Trusted Publishing is configured on npmjs.com for this repo and the `publish.yml` workflow.
- If publishing succeeds but a later Git push or GitHub release step fails, inspect npm, tags, and workflow logs before retrying; the npm version cannot be republished.

## Rolling Back the Migration

Before the first git-cliff release, restore the previous release workflow, configuration, and documentation together if a rollback is needed. Do not reset unrelated changes. After a version has been published, retain its tag and npm version; fix the automation forward rather than attempting to republish or reuse the version.
