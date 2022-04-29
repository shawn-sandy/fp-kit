# Usage <span role="note" aria-label="status">Alpha</span>

> Docmentation, examples and info for using Usage component


## NPM installation

* Install `npm i @shawnsandy/first-paint@next` latest version (next)
* Install `npm i @shawnsandy/first-paint` stable version
* Yarn install `yarn add @shawnsandy/first-paint@next`


## Default Version

```css
/* my-styles.scss */
/* install the code modules */
@use '@shawnsandy/first-paint@next/src/v3/index.scss';
/* add components from v3/components */
@use '@shawnsandy/first-paint@next/src/v3/components/details-summary.scss';
@use '@shawnsandy/first-paint@next/src/v3/components/dialog.scss';
@use '@shawnsandy/first-paint@next/src/v3/components/header.scss';
@use '@shawnsandy/first-paint@next/src/v3/components/badge.scss';
@use '@shawnsandy/first-paint@next/src/v3/components/table.scss';

```

## Full Version

Install and use the full version (26kb)

```css
/* CSS link */
@use '@shawnsandy/first-paint@next/dist/v3/css/libs/all.css';

/* SCSS version */
@use '@shawnsandy/first-paint@next/dist/v3/libs/all.scss';
```


## Individual Components

Since all our components are self contained you can use them individually.

Button components

```css
@use '@shawnsandy/first-paint@next/src/v3/components/button.scss';
```

Create a modal dialog

```css
@use '@shawnsandy/first-paint@next/src/v3/components/dialog.scss';
```

Add a responsive grid

```css
@use '@shawnsandy/first-paint@next/src/v3/components/grid.scss';
```
