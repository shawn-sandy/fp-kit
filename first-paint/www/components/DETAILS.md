# Buttons

?>  Details disclosure element

## DETAILS Variables

### Custom variables

```css
--details-pd: 1rem;
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

### Default

```html preview
<details title="Element Title">
  <summary>
    Element Title
  </summary>
  <p>Add some content here to make it work</p>
</details>
```

