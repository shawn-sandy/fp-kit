# Img <span role="note" style="--note: var(--beta)">Beta</span>

> Create responsive and accessible `img` components/elements for your apps.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/img';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/img.scss'
// or scss
import '@shawnsandy/first-paint@next/dist/css/components/img.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/img.min.css"
/>
```

### Default Form

### Default Img

```html preview
<img
  src="https://source.unsplash.com/random?h=500w=500"
  loading="lazy"
  alt="Placeholder Image"
/>
...
```

## Img Variables

### Custom variables

```css
--img-xs: 10vw;
--img-sm: 25vw;
--img-md: 50vw;
--img-lg: 75vw;
--img-xl: 90vw;
--img-100: 100vw;
```

### Custom properties (rules)

```css
max-width: 100%;
width: var(--img-w, auto);
object-fit: var(--img-obj-fit);
object-position: var(--img-position);
aspect-ratio: var(--img-ratio);

&[width] {
  width: var(--img-w, auto);
}

&[width][height] {
  height: var(--img-h, auto);
}

&[src$='.svg'] {
  // width: 100%;
  height: auto;
  width: auto;
}

+ * {
  margin-block: 1rem 0;
}
```

## Examples

### Error Loading Img

```html preview
<img
  src="https://source.unsplash"
  width="300"
  height="300"
  loading="lazy"
  alt="Image not found"
  style="object-fit: var(--img-fit, fill); aspect-ratio: var(--img-ratio, auto 4 / 3); width: 350px; height: 350px;"
  onerror="imgError(event)"
/>
```

Add the following into your `js` scripts

```js
function imgError(event) {
  // console.log("Image loading error" + event.currentTarget.src);
  event.currentTarget.src = 'https://via.placeholder.com/800'
}
```

### Figure Img

Style attributes are applied to the `figure` element.

```html
<figure
  style="width: var(--pic-w, 500px); height: var(--pic-h, auto);"
></figure>
```

```html preview
<figure style="width: var(--pic-w, 500px); height: var(--pic-h, auto);">
  <img src="https://source.unsplash.com/random?w=800" alt="" />
  <figcaption>A Caption for my image</figcaption>
</figure>
```

---

## References/Additional info

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img, ':target="_blank"')

[Web Dev](https://web.dev/learn/design/responsive-images/, ':target="_blank"')

[BEST PRACTICES](https://www.w3.org/TR/wai-aria-practices/#aria_ex ':target="_blank"')

---
