# Links <span role="note" aria-label="status">Alpha</span>

> Links styles

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/links';
```

- React

```jsx
@import '@shawnsandy/first-paint/src/v3/components/links'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/links.min.css"
/>
```

### Default Form

### Default Links

```html preview
<div>
  <a href="https://google.com">Search Google</a>
</div>
```

## Links Variables

### Custom variables

```css
--color: #000;
```

### Links properties (rules)

```css
Links {
  color: var(--color, currentColor);
}
```

## Examples

### Button Styled Links `[data-fp-btn]`

Default button style link

```html preview
<a href="https://google.com" data-fp-btn style="--link-bg: lightgray;"
  >Search Google</a
>
```

### Link buttons pill(rounded) `[data-fp-btn="pill"]`

Create rounded or pill styled buttons using `pill` attribute.

```html preview
<a href="https://google.com" data-fp-btn="pill" style="--link-bg: lightgray"
  >Search Google</a
>
```

Create rounded or pill styled link button using `style` attribute using the `--btn-rds` custom property.

```html preview
<a
  href="https://google.com"
  data-fp-btn
  style="--link-bg: lightgray; --btn-rds: 99rem;"
  >Search Google</a
>
```

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https: ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

---
