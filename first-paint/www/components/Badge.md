# Notes/Badges

<span role="note" aria-label="status" style="--badge: var(--beta)">Beta</span>

> Add badges or note styled elements/components to your apps using the aria `note` role. Badges are created using `<span role="note">`, adding `note` to other elements will create a `regular` note.

?> The note role can be added to parenthetic or ancillary content if no other native element or other role fits the purpose

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/badge';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/badge.scss'
// or css
import '@shawnsandy/first-paint/dist/css/components/badge.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/badge.min.css"
/>
```

## Default Badges

The default badge uses the `<small>` tag/element with its role set to note `role="note"` as shown below.

```html preview
<div>A simple badge <span role="note">Badge</span></div>
```

## Regular Notes

The regular `note` can be used with any `tag/element` (beside `main header footer nav`) with it's role also set to note `role="note"` as shown below with `<p>` tag.

```html preview
<p role="note">
  Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat
  laborum. Laboris velit labore amet in do reprehenderit consectetur commodo
  consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet
  laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui
  cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

## Badge Variables

### CSS variables

```css
--beta: orange;
--stable: green;
--production: blue;
--badge-pd: 0;
--badge-py: 0.2rem;
--badge-px: 0.7rem;
--badge-fs: 0.8rem;
--badge-bg: lightgray;
--badge-bdr: none;
--badge-rds: 99rem;
--badge-cl: inherit;
--badge-tt: capitalize;
--badge-decoration: none;
```

### Badge properties (rules)

```css
padding-inline: var(--badge-px, var(--px));
padding-block: var(--badge-py, var(--py));
color: var(--badge-cl, var(--cl));
font-size: var(--badge-fs, var(--fs));
font-weight: var(--badge-fw, normal);
border: var(--badge-brd, var(--bdr));
border-radius: var(--badge-rds, var(--rds));
background-color: var(--badge, var(--bg));
text-decoration: var(--badge-decoration, var(--decoration));
text-transform: var(--badge-tt, var(--tt));
--badge-bg: var(--badge-beta, var(--beta));

@content;
```

## Creating Badges / Notes

You can create a **Badge** on an inline tag like `span` or `small` using one of the following tags or `attribute` selectors

- With the `aria-role` attribute `note`
- Use a `data` attribute `data-fp-badge`
- With the aria-role `status` for live regions
- For notes you can use a `p` tag with the role `note`

## Examples

### Default badge

Create a basic badge using `role="note"`

```html preview
<h4>A simple badge <span role="note">Badge</span></h4>
```

Create/Customize the note background/color with the `<p role="note" style="--badge: lightyellow">...</p>`

```html preview
<p role="note" style="--badge: lightyellow">
  Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat
  laborum. Laboris velit labore amet in do reprehenderit consectetur commodo
  consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet
  laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui
  cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

### Predefined badge colors

```html preview
<div>
  A simple badge <span role="note" style="--badge: var(--beta);">Beta</span>
</div>
```

```html preview
<div>A simple badge <span data-badge>Stable</span></div>
```

```html preview
<p>A simple badge <span data-badge="production">Production</span></p>
<p>A simple badge <span data-badge="stable">Beta</span></p>
<p>A simple badge <span data-badge="beta">Production</span></p>
```

## Badge Variants (data-variant)

Use our utility variant to style the badge colors

```html preview
<div>
  A simple badge <span role="note" data-variant="primary">Primary</span>
</div>
```

```html preview
<div>
  A simple badge <span role="note" data-variant="secondary">Secondary</span>
</div>
```

```html preview
<div>
  A simple badge <span role="note" data-variant="warning">Warning</span>
</div>
```

```html preview
<div>A simple badge <span role="note" data-variant="light">Light</span></div>
```

## Notes that scale

Create notes that scales with the font size to `75%` of the parent element, default.

```html preview
<h3>A simple badge <span role="note" style="--badge-scale">Badge</span></h3>
```

Use the `data-badge` attribute to set the scale

```html preview
<h3>A simple badge <span role="note" data-badge="scale">Badge</span></h3>
```

```html preview
<p role="note" style="--badge: lightyellow; --badge-scale: var(--on)">
  Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat
  laborum. Laboris velit labore amet in do reprehenderit consectetur commodo
  consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet
  laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui
  cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/note_role ':_target="_blank"')

[ACCESSIBILITY GUIDE]([https://](https://www.w3.org/TR/wai-aria-1.1/#note ':_target="_blank"')

[LIVE REGIONS]([https://](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions ':_target="_blank"')

[Landmark elements](https://web.dev/use-landmarks/ ':target="_blank"')

---
