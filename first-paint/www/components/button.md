# Buttons <span role="note" style="--note: var(--beta)">Beta</span>

> Quickly, customize and style buttons for forms, modals, menus and more. Buttons styles are activated with the `[type]` attribute, each button `type` displays a different style.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/button';
```

- React

```jsx
@import '@shawnsandy/first-paint/src/v3/components/button'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/button.min.css"
/>
```

### Default Button

```html preview
<button type="button">Default Button</button>
```

## Button Variables

### Custom variables

```css
--btn-sm: calc(12rem / 16); // 12px button
--btn-md: calc(16rem / 16);
--btn-lg: calc(21rem / 16);
--btn-pill: 99rem;
```

### Custom properties (rules)

```css
color: var(--btn-color, currentColor);
background-color: var(--btn-bg, lightgray);
font-size: var(--btn-fs, calc(14rem / 16));
display: var(--btn-dsp, inline-flex);
gap: var(--btn-gap, 1rem);
min-height: calc(40rem / 16);
place-items: var(--btn-place, center);
padding-inline: var(--btn-px, 1.4rem);
padding-block: var(--btn-py, 0.8rem);
border: var(--btn-border, none);
border-radius: var(--btn-radius, 0.15rem);
text-decoration: var(--btn-deco, none);
transition: all 0.2s ease !important;
```

## Button Examples

### Default Buttons

```html preview
<button type="button">Default Button</button>
```

```html preview
<button type="submit">Submit Button</button>
```

```html preview
<button type="reset">Reset Button</button>
```

### Button vanilla

Remove the `type` attribute to create a button without border or background color, **styleless buttons**--useful for creating/styling buttons that look like links using or vice-versa. For creating button links `<a>` you use `style="--btn:*"` or the `[role="button"] attribute.

```html preview
<button>Default Button</button>
```

### Disabled Button

For disabled buttons add a disabled attribute `[disabled]`

```html preview
<button type="button" disabled>Disabled Button</button>
```

### Pill Button

Button with a pill style/shape `--btn-pll`

```html
style="--btn-rds:var(--btn-pill);"
```

```html preview
<button type="button" style="--btn-rds: var(--btn-pill);">Pill button</button>
```

## Variants

```html preview
<button type="button" data-variant="dark">Dark Variant</button>
```

```html preview
<button type="button" data-variant="light">Light Variant</button>
```

```html preview
<button type="button" data-variant="primary">Primary Variant</button>
```

```html preview
<button type="button" data-variant="secondary">Secondary Variant</button>
```

```html preview
<button type="button" data-variant="tertiary">Tertiary Variant</button>
```

```html preview
<button type="button" data-variant="success">Success Variant</button>
```

```html preview
<button type="button" data-variant="warning">Warning Variant</button>
```

---

## See also

[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

[Button Specs](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)

[Button patterns](https://w3c.github.io/aria-practices/examples/button/button.html)

[ACCESSIBILITY GUIDE](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)

[Hiding content/button](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)

---
