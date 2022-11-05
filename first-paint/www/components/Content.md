# Content Elements <span role="note" style="--note: var(--beta)">Beta</span>

> Out of the box styles for content elements like paragraphs, headings, lists, italics, bold(strong) etc.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/content';
```

- React

```jsx
@import '@shawnsandy/first-paint/src/v3/components/content'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/content.min.css"
/>
```

#### Default headings (h1-6)

```html preview
<div>
  <h1>Default H1 Heading</h1>
  <h2>Default H2 Heading</h2>
  <h3>Default H3 Heading</h3>
  <h4>Default H4 Heading</h4>
  <h5>Default H5 Heading</h5>
  <h6>Default H6 Heading</h6>
</div>
```

## Horizontal Rule

```html preview
<hr />
```

## Paragraph

```html preview
<p>
  Eiusmod dolor duis cillum cillum consequat incididunt id adipisicing pariatur.
  Minim cillum non amet aliquip ipsum veniam exercitation irure pariatur. Ut
  labore reprehenderit officia aliqua aliquip ad. Labore sunt aute proident sit
  officia aliqua reprehenderit laboris. Magna ullamco incididunt consequat
  occaecat aliquip voluptate qui consectetur voluptate aute elit cillum cillum.
</p>

<p></p>
```

## Links

Simple link example

```html preview
<a href="#">Simple Link</a>
```

#### Button Link

Simple link example

```html preview
<a href="#" role="button">Simple Link</a>
```
