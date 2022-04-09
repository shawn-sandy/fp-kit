# Features <span role="note" style="--note: var(--beta)">Beta</span>

----------------
## Easy to use

Grab our styles from the CDN `https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css` and drop into any semantic HTML5 page. FP was designed for use out of box with any semantic HTML5 markup, check out the docs for more info.

```html
https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@2.8.8/dist/v3/css/index.min.css">

```

## Dynamic CSS

CSS variables can be used to dynamically change the look and feel of components/elements, whats more when you assign a CSS variable to a property you can now use the variable assigned as a property name in you rules. For example lets create a `color` and `background-color` variable for a button `--btn-cl` and `--btn-bg`. Now we can us the new variables to replace the name of the CSS properties and assign it a new value, creating `inherited properties` or what we call *css custom-props* [read more about css variables on increment](https://increment.com/frontend/a-users-guide-to-css-variables/).

[FirstPaint default custom properties](/tokens)

```css
button {
  // lets assign a variable to the `button` element
  color: var(--btn-color: currentColor);
  background-color: var(--btn-bg: lightgray);
}
```

Now we can change the button color/background color using the style attribute `style="--btn-bg:red; --btn-color:white;"`, click view source below to see the code.


```html preview
<button
  type="button"
  style="--btn-bg:red; --btn-color:white;"
>
  Red Custom Style
</button>

```

!> *CSS classes can override CSS custom-props when used with inline styles, unless set globally. If you are not a fan of style attributes you can do the same thing in a class*


## Accessible


## Modular

* Grab the entire library less under 8kb(gzip)/20kb(min)*
* Use only the components you need.

All components

```scss
// https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/src/v3/
@use "@shawnsandy/src/v3/tokens/modules/reset.scss";
@use "@shawnsandy/src/v3/tokens/colors-scales.scss";
@use "@shawnsandy/src/v3/tokens/colors.scss";
@use "@shawnsandy/src/v3/components/props";
@use "@shawnsandy/src/v3/components/global.scss";
@use '@shawnsandy/src/v3/components/_button.scss';
@use "@shawnsandy/src/v3/components/header.scss";
@use "@shawnsandy/src/v3/components/container.scss";
@use "@shawnsandy/src/v3/components/checkbox.scss";
@use "@shawnsandy/src/v3/components/img.scss";
@use "@shawnsandy/src/v3/components/details-summary.scss";
@use "@shawnsandy/src/v3/components/nav.scss";
@use "@shawnsandy/src/v3/components/table.scss";
@use "@shawnsandy/src/v3/components/grid.scss";
@use "@shawnsandy/src/v3/components/cards.scss";
@use "@shawnsandy/src/v3/components/dialog.scss";
@use "@shawnsandy/src/v3/components/type.scss";
```

Optionally load the components you need.

```scss
// named colors variables
@use "@shawnsandy/src/v3/tokens/colors.scss";
// Custom properties
@use "@shawnsandy/src/v3/components/props";
// global styles
@use "@shawnsandy/src/v3/components/global.scss";
// button component/styles
@use '@shawnsandy/src/v3/components/_button.scss';
// header component/styles
@use "@shawnsandy/src/v3/components/header.scss";
// checkbox container/styles
@use "@shawnsandy/src/v3/components/checkbox";
```
