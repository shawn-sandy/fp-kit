# Header <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style Header/Cover (hero) Element for pages, using the `<header>` or `banner` role.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/header';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/header.scss'
// or scss
import '@shawnsandy/first-paint@next/dist/css/components/header.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/header.min.css"
/>
```

### Default Header

```html preview
<header>
  <section>
    <h2>Header Section</h2>
    <p>
      Labore est esse et nulla anim labore consequat veniam cupidatat laborum
      adipisicing.
    </p>
  </section>
</header>
```

## Header Variables

### Custom variables

```css
--hdr-bg: whitesmoke;
--hdr-bd: none;
--hdr-min-h: 40vh;
--hdr-w: 100%;
--hdr-dsp: flex;
--hdr-justify: center;
--hdr-py: 1rem;
--hdr-px: 1rem;
--hdr-place-x: center;
--hdr-place-y: center;
--hdr-px: 1rem;
```

### Custom properties (rules)

```css
--hdr-bg: whitesmoke;
--hdr-bd: none;
--hdr-min-h: 40vh;
--hdr-w: 100%;
--hdr-dsp: flex;
--hdr-justify: center;
--hdr-py: 1rem;
--hdr-px: 1rem;
--hdr-place-x: center;
--hdr-place-y: center;
--hdr-align: center;
--hdr-px: 1rem;
--hdr-m: 0;
--hdr-fs-sm: calc(28rem / 16);
--hdr-fs-md: calc(36rem / 16);
--hdr-fs-lg: calc(68rem / 16);
--hdr-fs-xl: calc(80rem / 16);
```

## Examples

### Header Title (h2)

```html preview
<header>
  <section>
    <h2>Header with title(h2)</h2>
    <p>Consectetur et in deserunt est ad tempor consequat officia ex.</p>
  </section>
</header>
```

### Header Custom Style (h2)

- Set the title (h2) to `"--hdr-min-h: 60vh"`

```html preview
<header style="--hdr-min-h: 60vh">
  <section>
    <h2>Header with title(h2)</h2>
    <p>Consectetur et in deserunt est ad tempor consequat officia ex.</p>
  </section>
</header>
```

---

## References/Additional info

[MDN HEADER GUIDELINES AND SPECIFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)

<!-- [ACCESSIBILITY BEST PRACTICES](https://www.w3.org/TR/wai-aria-practices-1.2/examples/landmarks/banner.html) -->

---
