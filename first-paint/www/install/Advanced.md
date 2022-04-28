# Advanced <span role="note" aria-label="status">Alpha</span>

> Docmentation, examples and info for using Advanced component

##  Advance Usage

Use the advanced version to build your own custom version of FirstPaint.

The example is similar to the default version.

```css
/* install the core modules */
@use '@shawnsandy/first-paint@next/src/v3/libs/fp-base.scss';
/* add components from v3/components */
@use '@shawnsandy/first-paint@next/src/v3/libs/fp-components.scss';
/* add extended components/modules */
@use '@shawnsandy/first-paint@next/src/v3/libs/fp-extensions.scss';

@include 'fp-extensions.tooltip.module()';

```

## Custom Version


The example allows you to build a totally custom verson of `FP`.

```css
/* install the core modules */
@use '@shawnsandy/first-paint@next/src/v3/libs/fp-base.scss';
/* import the modules */
@use '@shawnsandy/first-paint@next/src/v3/modules/modules';

/* only include the modules you need */
@include modules.header-module();
@include modules.grid-module();
@include modules.container-module();
@include modules.img-module();
@include modules.nav-module();

```


