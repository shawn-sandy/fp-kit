# List <span role="note" style="--note: var(--beta)">Beta</span>

> Add and style and list elements to your pages.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/list';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/list.scss'
// or scss
import '@shawnsandy/first-paint@next/dist/css/components/links.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/list.min.css"
/>
```

### Default Form

### Default List (unordered)

```html preview
Sample List
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

## List Variables

### Custom variables

```css
--list-none: ; // turn off list features
--list-s: inside;
--list-fs: 0.95rem;
--list-lh: 1.5;
--list-pxs: 1.5rem;
```

### List properties (rules)

```css
list-style: var(--list-s);
font-size: var(--list-fs);
line-height: var(--list-lh);
padding-inline-start: var(--list-pxs);
// turn off list features
list-style: var(--list-none, none);
padding-inline-start: var(--list-none, 0);
```

## Examples

### Unstyled list

Use `--listNone` to turn off specified list features `<ul style="--listNone: var(--yes)">`. In this example we turn off `list-style`
and set `padding-inline-start` to `0`.

```html preview
Sample List
<ul style="--listOff: var(--yes)">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

### Style list using `data-list` attribute

Sample List

```html preview
<ul data-fp-list="unstyled">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

### Inline list using `data-list` attribute

Sample List

```html preview
<ul data-fp-list="unstyled inline">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

## See also

[MDN GUIDELINES AND SPECFICATIONS](<[https](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul):> ':_target="_blank"')

---
