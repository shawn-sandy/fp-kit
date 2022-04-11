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
  --crumb-gap: 0.5rem;
  --crumb-style: none;
  --crumb-fs: smaller;

```

### Breadcrumb properties (rules)

```css
display: var(--crumb-dsp);
  gap: var(--crumb-gap);
  list-style: var(--crumb-style);
  list-style: none;
  font-size: var(--crumb-fs);

  li + li {
    &::before {
      content: "\002F";
    }
  }
```

## Examples

### Default Breadcrumb

```html preview
<nav>
 <ol aria-label="breadcrumb" style="--crumb-icon: '\27A4'">
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
