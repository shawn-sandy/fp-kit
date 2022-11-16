# Tooltip <span role="note" style="--note: var(--beta)">Beta</span>

> CSS only tooltip components used to provide additional information (tips) to users. It uses the aria-role `tooltip` to display and style tips and the aria-label attributes to provide content for the tooltip.

!> If you cannot use `aria-role` you can use the `style="--tip:*"` attribute to enable a tooltip.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/tooltip';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/tooltip.scss'
// css
import '@shawnsandy/first-paint@next/dist/css/components/tooltip.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/tooltip.min.css"
/>
```

### Default Form

### Default Tooltip

```html preview
<div role="tooltip" aria-label="Sample tooltip">Tooltip</div>
```

## Tooltip Variables

### Custom variables

```css
--tip-bg: black;
--tip-cl: white;
--tip-rds: 0.5rem;
--tip-cubic: cubic-bezier(0.64, 0.09, 0.08, 1);
--tip-cursor: pointer;
--tip-opacity: 0.9;
```

### Tooltip properties (rules)

```css
position: relative;
cursor: var(--tip-cursor);
&:after {
  background: var(--tip-bg);
  color: var(--tip-cl);
  border-radius: var(--tip-rds);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  content: attr(aria-label);
  padding: 6px 10px;
  top: 1.4em;
  left: 50%;
  transform: translateX(-50%) translateY(-2px);
  white-space: nowrap;
  z-index: 2;
  transition: opacity 0.2s var(--tip-cubic), transform 0.2s var(--tip-cubic);
}
&:hover {
  &:after {
    display: block;
    opacity: var(--tip-opacity);
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
}
```

## Examples

### Tooltip Red Background

```html preview
<div role="tooltip" aria-label="A red tooltip sample" style="--tip-bg: red">
  Tooltip with red background
</div>
```

### Style Attribute Option

```html preview
<div
  aria-label="You can also use the style attribute"
  style="--tip-bg: darkblue"
>
  Tooltip using the `style` attribute option.
</div>
```

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

[BEST PRACTICES](https://www.w3.org/TR/wai-aria-practices/#tooltip ':_target="_blank"')

---
