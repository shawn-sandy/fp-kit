---
to: <%= absPath %>/package.json
---
{
  "name": "@shawnsandy/<%= component_name %>",
  "version": "0.0.1",
  "description": "FP-Datable a simple react data-table use standalone or with react-datable",
  "private": true,
  "keywords": [
    "datatable",
    "react-datatable",
    "react",
    "first-paint"
  ],
  "author": "Shawn Sandy <creative@shawnsandy.design>",
  "homepage": "https://github.com/shawn-sandy/fp-kit#readme",
  "license": "MIT",
  "main": "lib/index.js",
  "module": "lib/index.esm.js",
  "types": "lib/index.d.ts",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shawn-sandy/fp-kit.git"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "build": "rollup -c"
  },
  "bugs": {
    "url": "https://github.com/shawn-sandy/fp-kit/issues"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^21.0.2",
    "@rollup/plugin-node-resolve": "^13.1.3",
    "@rollup/plugin-typescript": "^8.3.1",
    "@storybook/react": "^6.4.19",
    "@types/react": "^17.0.39",
    "react": "^17.0.2",
    "rollup": "^2.70.0",
    "rollup-plugin-dts": "^4.2.0",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.31.2",
    "sass": "^1.49.8",
    "typescript": "^4.6.2"
  }
}
