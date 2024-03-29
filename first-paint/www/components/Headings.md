# Headings

?&gt; _TODO_ add description

### Default Headings

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/headings';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/headings.scss'
//  or css
import '@shawnsandy/first-paint@next/dist/css/components/headings.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/headings.min.css"
/>
```

### Default Form

### H1 Heading

```html preview
<h1 style="font-size: var(--h1)">Sample H1 Heading</h1>
```

## Headings Variables

### Custom variables

```css
--h1: var(--fs-10);
--h2: var(--fs-9);
--h3: var(--fs-8);
--h4: var(--fs-7);
--h5: var(--fs-6);
--h6: var(--fs-5);
```

## Custom properties (rules)

```css
h1,
h1[role='decoration'] {
  font-size: var(--h1);
}

h2,
h2[role='decoration'] {
  font-size: var(--h2);
}

h3,
h3[role='decoration'] {
  font-size: var(--h3);
}

h4,
h4[role='decoration'] {
  font-size: var(--h4);
}

h5,
h5[role='decoration'] {
  font-size: var(--h5);
}

h6,
h6[role='decoration'] {
  font-size: var(--h6);
}
```

## Examples

### H1 Heading

```html preview
<h1 style="font-size: var(--h1)">Sample H1 Header</h1>
```

### H2 Heading

```html preview
<h2 style="font-size: var(--h2)">Sample H2 Header</h2>
```

### H3 Heading

```html preview
<h3 style="font-size: var(--h3)">Sample H3 Header</h3>
```

### H4

```html preview
<h4 style="font-size: var(--h4)">Sample H4 Header</h4>
```

### H5 Heading

```html preview
<h5 style="font-size: var(--h5)">Sample H5 Header</h5>
```

### H6 Heading

```html preview
<h6 style="font-size: var(--h6)">Sample H6 Header</h6>
```

---

## References/Additional info

[MDN GUIDELINES AND SPECFICATIONS]()

[ACCESSIBILITY GUIDE]()

---
