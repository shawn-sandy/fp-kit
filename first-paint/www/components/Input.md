# Input <span role="note">Alpha</span>

> Create and style the form input elements.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/input';
```

- React

```jsx
@import '@shawnsandy/first-paint/src/v3/components/input'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/input.min.css"
/>
```

### Default Input

```html preview
<input id="input-id" type="text" placeholder="Text input element" />
```

## Input Variables

### Custom variables

```css
--input-appearance: none;
--input-min-w: min(150px, 100%);
--input-fw: normal;
--input-bdr-style: solid;
--input-bdr-color: lightgray;
--input-px: 1rem;
--input-py: 0.5rem;
--input-bdr-radius: 0.1rem;
```

### Custom properties (rules)

```css
background-color: var(--input-cl);
font-size: var(--input-fs);
font-weight: var(--input-fw);
border-width: var(--input-min-w);
border-style: var(--input-bdr-style);
border-color: var(--input-bdr-color);
padding-inline: var(--input-px);
padding-block: var(--input-py);
min-width: var(--input-min-w);
border-radius: var(--input-bdr-radius);
-webkit-appearance: var(--input-appearance);
-moz-appearance: var(--input-appearance);
appearance: var(--input-appearance);
// * css rules/styles
&::placeholder {
  font-style: italic;
}
```

## Examples

---

## References/Additional info

[MDN GUIDELINES AND SPECFICATIONS]()

[ACCESSIBILITY GUIDE]()

---
