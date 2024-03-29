# Navbar <span role="note" style="--note: var(--alpha)">Alpha</span>

> Create and style responsive navs/navigations

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/nav';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/nav.scss'
// or scss
import '@shawnsandy/first-paint@next/dist/css/components/links.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/nav.min.css"
/>
```

### Default Form

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/nav';
```

- React

```jsx
@import '@shawnsandy/first-paint/src/v3/components/nav'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/nav.min.css"
/>
```

### Default Navbar

```html preview
<nav>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <section>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </section>
</nav>
```

## Navbar Variables

### Custom variables

```css
--nav-dsp: flex;
--nav-direction: row;
--nav-w: 100%;
--nav-h: calc(50rem / 16);
--nav-align: center;
--nav-justify: space-between;
--nav-mx: auto;
--nav-bg: whitesmoke;
```

### Custom properties (rules)

```css
display: var(--nav-dsp, var(--dsp));
flex-direction: var(--nav-direction, var(--direction));
width: var(--nav-w, var(--w));
height: var(--nav-h, var(--h));
align-items: var(--nav-align, var(--align));
justify-content: var(--nav-justify, var(--justify));
margin-inline: var(--nav-mx, var(--mx));
background-color: var(--nav-bg, var(--bg));
```

## Examples

---

## References/Additional info

[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav, ':target="_blank"')

[ACCESSIBILITY GUIDE](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role ':target="_blank"')

---
