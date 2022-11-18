# Select <span role="note" style="--note: var(--beta)">Beta</span>

> A simple select component, that restyle the native element without any Javascript.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/select';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/select.scss'
// or css
import '@shawnsandy/first-paint@next/dist/css/components/select.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/select.min.css"
/>
```

### Default Form

### Default Select

```html preview
<select>
  <option>This is a native select element</option>
  <option value="">Apples</option>
  <option value="">Bananas</option>
  <option value="">Grapes</option>
  <option value="">Oranges</option>
</select>
```

## Select Variables

### Custom variables

```css
  --slt-dsp: grid;
  --slt-align: center;
  --slt-justify: space-between;
  --slt-min-w: var(--min-w-800)
  --slt-cl: currentColor;
  --slt-bdr-style: solid;
  --slt-bdr-w: thin;
  --slt-bdr-cl: lightgray;
  --slt-px: 0.5rem;
  --slt-py: 0.1rem;
  --slt-appearance: none;
  --slt-fs: 0.9rem;

```

### SVG variables

```css
--slt-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ctitle%3Eic_keyboard_arrow_down_24px%3C/title%3E%3Cg fill='%23000000'%3E%3Cpath d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
--bg-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ctitle%3Eic_keyboard_arrow_down_24px%3C/title%3E%3Cg fill='%23696969'%3E%3Cpath d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
--bg-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ctitle%3Eic_keyboard_arrow_down_24px%3C/title%3E%3Cg fill='%23f1f1f1'%3E%3Cpath d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
```

!> Custom arrows for selects use `svgs` for background `url()` and fill color. You can use this [svg converter](https://www.svgbackgrounds.com/tools/svg-to-css/) to convert your svgs to css.

### Select rules/properties

```css
select {
  display: var(--slt-dsp);
  place-items: var(--slt-align);
  place-content: var(--slt-justify);
  min-width: var(--slt-min-w);
  min-height: 40px;
  font-size: var(--slt-fs, 1rem);
  color: var(--slt-cl, currentColor);
  background-color: var(--slt-bg, whitesmoke);
  background: var(--slt-bg);
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  background-position: right 0.8rem top 50%;
  border-style: var(--slt-bdr-style);
  border-width: var(--slt-bdr-w);
  border-color: var(--slt-bdr-cl);
  padding-inline: var(--slt-px);
  padding-block: var(--slt-py);
  -moz-appearance: var(--slt-appearance);
  -webkit-appearance: var(--slt-appearance);
  appearance: var(--slt-appearance);
}
```

## Examples

---

## References/Additional info

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#technical_summary ':target="_blank"')

[ACCESSIBILITY GUIDE]()

---
