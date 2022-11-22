# Breadcrumb <span role="note" style="--note: var(--beta)">Beta</span>

> Docmentation, examples and info for using Breadcrumb component

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/breadcrumb';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/breadcrumb.scss'
// or scss
import '@shawnsandy/first-paint/dist/css/components/breadcrumb.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/breadcrumb.min.css"
/>
```

### Default Breadcrumb

```html preview
<nav>
  <ol data-fp-breadcrumb>
    <li><a href="#" aria-current>Home</a></li>
    <li><a href="#">Step 1</a></li>
    <li><a href="#">Step 2</a></li>
  </ol>
</nav>
```

## Breadcrumb Variables

### Custom variables

```css
--crumb-dsp: flex;
--crumb-direction: row;
--crumb-gap: 0.5rem;
--crumb-style: none;
--crumb-fs: var(--fs-2);
--crumb-icon: '\002F';
--crumb-cl: currentColor;
```

### Breadcrumb properties (rules)

```css
display: var(--crumb-dsp);
direction: var(--crumb-direction);
gap: var(--crumb-gap);
list-style: var(--crumb-style);
list-style: none;
font-size: var(--crumb-fs);
color: var(--crumb-cl);

li {
  color: var(--crumb-cl);
  + li {
    color: currentColor;
    &::before {
      content: var(--crumb-icon, '\002F');
      color: currentColor;
    }
  }
}
```

## Examples

### Breadcrumb `[data-fp-breadcrumb]`

Here we customize the breadcrumb by adding a custom-props `style="--crumb-icon: '\27A4'; --crumb-cl: lightgray"` to the breadcrumb.

```html preview
<nav>
  <ol data-fp-breadcrumb>
    <li><a href="#">Home</a></li>
    <li><a href="#">Step 1</a></li>
    <li><a href="#">Step 2</a></li>
  </ol>
</nav>
```

### Custom Breadcrumb Icons

Here we customize the breadcrumb by adding a custom-props `style="--crumb-icon: '\27A4'; --crumb-cl: lightgray"` to the breadcrumb.

```html preview
<nav>
  <ol data-fp-breadcrumb style="--crumb-icon: '\27A4'; --crumb-cl: lightgray">
    <li><a href="#">Home</a></li>
    <li><a href="#" aria-current>Step 1</a></li>
    <li><a href="#">Step 2</a></li>
  </ol>
</nav>
```

---

## See also

...

---
