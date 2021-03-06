---
to: <%= absPath %>/package.json
---
{
  "name": "@shawnsandy/<%= componentName %>",
  "version": "0.0.1",
  "description": "<%= componentDescription || componentName %>",
  "private": false,
  "publishConfig": {
    "access": "public"
  },
  "author": "shawn-sandy <creative@shawnsandy.com>",
  "homepage": "",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": ""
  },
  "dependencies": {
    "@shawnsandy/first-paint": "^2.7.20",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.0",
    "@types/node": "^17.0.18",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.11",
    "np": "^7.6.0",
    "react": "^17.0.2",
    "react-content-loader": "^6.1.0",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "rimraf": "^3.0.2",
    "typescript": "^4.5.5",
    "web-vitals": "^2.1.4"
  },
  "main": "lib/index.js",
  "module": "lib/index.esm.js",
  "types": "lib/index.d.ts",
  "files": [
    "lib/"
  ],
  "scripts": {
    "start": "start-storybook -p 6006 -s public",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "storybook-docs": "start-storybook --docs --no-manager-cache",
    "build-storybook": "build-storybook -o ./www/components",
    "compile": "rollup -c",
    "compile:clean": "rimraf lib && rollup -c",
    "release": "npm publish"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "overrides": [
      {
        "files": [
          "**/*.stories.*"
        ],
        "rules": {
          "import/no-anonymous-default-export": "off"
        }
      }
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@axe-core/react": "^4.4.0",
    "@etchteam/storybook-addon-status": "^4.2.0",
    "@ladle/react": "^0.16.0",
    "@rollup/plugin-commonjs": "^21.0.2",
    "@rollup/plugin-node-resolve": "^13.1.3",
    "@storybook/addon-a11y": "^6.4.19",
    "@storybook/addon-actions": "^6.4.19",
    "@storybook/addon-essentials": "^6.4.19",
    "@storybook/addon-interactions": "^6.4.19",
    "@storybook/addon-links": "^6.4.19",
    "@storybook/addon-storysource": "^6.4.19",
    "@storybook/builder-webpack5": "^6.4.19",
    "@storybook/manager-webpack5": "^6.4.19",
    "@storybook/node-logger": "^6.4.19",
    "@storybook/preset-create-react-app": "^4.0.1",
    "@storybook/react": "^6.4.19",
    "@storybook/testing-library": "0.0.9",
    "@whitespace/storybook-addon-html": "^5.0.0",
    "axe-core": "^4.4.1",
    "chromatic": "^6.4.3",
    "postcss": "^8.4.7",
    "rimraf": "^3.0.2",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-typescript2": "^0.31.2",
    "rollup": "^2.69.0",
    "sass": "^1.49.8",
    "storybook-addon-performance": "^0.16.1",
    "storybook-addon-pseudo-states": "^1.0.0",
    "storybook-design-token": "^1.4.0",
    "webpack": "^5.69.1"
  }
}
