# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.2.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.2.0...v2.2.1) - 2026-11-08



### Bug Fixes

* **ci:** update Node.js version matrix to remove 20 and include 26 ([94371c1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/94371c17aad6ac65accbab0f02d13bd298213607))




## [2.2.0](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.3...v2.2.0) - 2026-11-08



### Features

* **minify:** target ECMAScript 2022 by default ([b8dcd60](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/b8dcd60935fca986ff3e1c37780d8597355235dd))


### Chores

* **tooling:** modernize TypeScript and ESLint tooling ([bafe7bd](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/bafe7bdec4d31270a92436266d2746da7c2c7155))

* **lint:** update ESLint config for native TypeScript tooling ([f996c55](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/f996c5559a821b7b505e0098d167f92a79fe8b92))

* **release:** 2.2.0 [skip ci] ([f7c3e60](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/f7c3e606dc4849731bfec7c860a3a32eae572f64))


### Continuous Integration

* **release:** migrate publishing to git-cliff ([f20185c](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/f20185c7d8004a5615363c63ad4220947582da02))




## [2.1.3](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.2...v2.1.3) - 2026-03-18



### Bug Fixes

* **deps:** address CVE-2026-32141 ([8426884](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/8426884eb1b5cc568dcd3ed88582f75f6cdca214))


### Documentation

* update license to MIT and add README badges ([802196b](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/802196b9cde6aac95d91180f87c314d14339912e))


### Chores

* update CI workflows and release configuration ([6a223f9](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/6a223f934db7df5e01cd8881687b51665094317c))

* **release:** 2.1.3 [skip ci] ([c729521](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/c72952177bdfc92223e1b87849058d2279ed270f))




## [2.1.2](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.1...v2.1.2) - 2026-03-07



### Bug Fixes

* **release:** updated config to use pnpm and create the build prior to publishing ([3ce942a](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/3ce942a5fe20bef886b8e6b456296df238b07447))


### Chores

* **release:** 2.1.2 [skip ci] ([f805a0a](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/f805a0aca388f6d7851d0ecdeb06909056f9e2e1))




## [2.1.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.0...v2.1.1) - 2026-03-07



### Bug Fixes

* update all dev dependencies to latest versions ([1a4bffb](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/1a4bffbe0689f267152845ad818902dae0c11a21))


### Chores

* update package metadata, tighten tsconfig, and refactor source ([a1e95b5](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/a1e95b56ddecab292e6b28dc39feb7dc6af2a575))

* **release:** 2.1.1 [skip ci] ([8c5065c](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/8c5065cb8a5a1e0856806456b76edc5c11cb3130))


### Continuous Integration

* add GitHub Actions workflows, semantic-release config, and docs ([95f8684](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/95f86840131a26c13f225dae7ea1942b60fc4408))




## [2.1.0](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.0.1...v2.1.0) - 2025-07-31



### Other Changes

* Maintenance release. Updated dependencies. ([ad39236](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/ad392368518d2eed1bc1b42771355dec7162565f))

* Updated the ESLint configuration and package scripts
- Added `lint` and `prepublish` scripts to package.json.
- Migrated to the new flat configuration format for ESLint.
- Updated dependencies.
- Moved all the dependencies to the `devDependencies` section in package.json.
- Added SWC as a peer dependency in package.json. ([b8ec1ce](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/b8ec1ceba5c4f359c1229863d37912faf058c5ce))




## [2.0.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.7...v2.0.1) - 2024-07-04



### Other Changes

* Maintenance Release ([27bc90a](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/27bc90ae19c3aa3ef807a6c0079e2b31eb9f37e3))

* Increment version ([0ad9251](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/0ad925183f54f980d61363217d312e62f4fc37e9))

* Maitenance release. @swc udpated to v1.4.2 ([ee4d02a](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/ee4d02ad641aec29387694b19f96ddab7377abed))

* Maintenace Release: Dependency Updates and convert eslint config to YAML ([796e920](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/796e920e0e69c901ee97d65b15a65de9c6100872))

* Maintenance release. Dependency updates. ([507a5cf](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/507a5cfeb96c9d740c228017be4ffe6632081ab4))

* Converted Source to TypeScript
- BREAKING CHANGE - Changed the default import to named import.
- Converted project to TypeScript.
- Updated dependencies. ([e844636](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/e84463611b524d39da74716716c3011744e76a51))

* Maintenance release. Updated dependencies. ([0f33000](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/0f3300010000f80575cb5a9d10bf087137878c7a))




## [1.0.7](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.6...v1.0.7) - 2024-01-28



### Other Changes

* Maintenance release. Updated dependencies ([d4eeb60](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/d4eeb60dc13dca959d1fa178bca77f57c88937e9))




## [1.0.6](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.5...v1.0.6) - 2024-01-01



### Other Changes

* Maintenance Release - Dependencies Updated ([8d86311](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/8d863111c3fb2b709483387561999053ccc057c3))




## [1.0.5](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.4...v1.0.5) - 2023-12-18



### Other Changes

* Maintenance update ([5a23bbb](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/5a23bbb71a20ca68100b2bea41808f0810c3c628))




## [1.0.4](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.2...v1.0.4) - 2023-12-03



### Other Changes

* Maintenance update. Updated Dependecies ([25b0a88](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/25b0a88728cdbc89f66e7098aa70828a8c2d043a))

* Maintenance release ([e15c756](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/e15c756b5cac10830dc996814f300b892fa2c416))




## [1.0.2](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.1...v1.0.2) - 2023-11-06



### Other Changes

* Maitenance release. Updated dependencies. ([e166142](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/e1661427f497f1710218b770fbcea78e03d727cd))




## [1.0.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.0...v1.0.1) - 2023-10-05



### Other Changes

* Updated readme file to fix wrong package name ([951b744](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/951b74496b474e4e3af65ffb998d53af93aaf276))




## [1.0.0](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/tree/v1.0.0) - 2023-10-05



### Other Changes

* Initial commit ([e6d041d](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/e6d041d64c75177b7dee40a27ae609df1254e041))

* Initial commit ([1a24276](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/commit/1a242762e7f1fe05425553f20bc9080aa8f54223))


