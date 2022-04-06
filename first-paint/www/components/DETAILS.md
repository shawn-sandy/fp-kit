# Dropdowns/Details <span role="note" style="--note: var(--beta)">Beta</note>

> Create and style dropdowns, accordions or details components using the native `<details>` element.

### Default

```html preview
<details title="Element Title">
  <summary>
    Summary Title
  </summary>
  <p>In ullamco consequat magna laboris cillum. Nisi cillum pariatur nostrud dolore incididunt duis adipisicing minim mollit voluptate minim ut. Qui velit id ex adipisicing adipisicing nisi eu adipisicing proident occaecat aute in. Anim Lorem mollit magna esse anim est nulla.</p>
</details>
```

## DETAILS Variables

### Custom variables

```css
  --details-fs: 1rem;
  --details-pd: 1rem;
  --details-color: currentColor;
  --details-bg: whitesmoke;
  --details-rds: .5rem;
  --details-w:'min(100%, 350px)';
  --detail-cursor: pointer;

  // summary
  --summary-pd: 0 1rem 1rem 1rem;
  --summary-fs: 1.1rem;
  --summary-color: currentColor;
  --summary-ls: none;
```

### Custom properties (rules)

Details element

```css
  font-size: var(--detail-fs, 1rem);
  color: var(--detail-color, currentColor);
  background-color: var(--detail-bg, whitesmoke);
  border: var(--detail-border, none);
  border-radius: 0.5rem;
  width: min(100%, 350px);
```

Summary element

```css
font-size: var(--summary-fs, 1.1rem);
    color: var(--summary-color, currentColor);
    padding: var(--details-pd);
    background-color: var(--summary-bg, transparent);
    list-style: var(--summary-ls, none);
    cursor: var(--detail-cursor, pointer);
    border-bottom: var(--summary-border, solid lightgray);
```

## Examples


----
## See also


[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details ':target="blank"')


----
