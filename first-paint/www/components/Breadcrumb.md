# Breadcrumb <span role="note" style="--note: var(--beta)">Beta</span>

> Docmentation, examples and info for using Breadcrumb component

### Default Breadcrumb

```html preview
<nav>
 <ol aria-label="breadcrumb">
    <li><a href="#">Home</a></li>
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
  --crumb-icon: "\002F";
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
        content: var(--crumb-icon, "\002F");
        color: currentColor;
      }
    }
  }

```

## Examples

### Custom Breadcrumb

Here we customize the breadcrumb by adding a custom-props `style="--crumb-icon: '\27A4'; --crumb-cl: lightgray"` to the breadcrumb.

```html preview
<nav>
 <ol aria-label="breadcrumb" style="--crumb-icon: '\27A4'; --crumb-cl: lightgray">
    <li><a href="#">Home</a></li>
    <li><a href="#">Step 1</a></li>
    <li><a href="#">Step 2</a></li>
 </ol>
</nav>
```

----
## See also

...

----
