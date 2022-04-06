---
to: <%= absPath %>/<%= name %>.md
---

# <%= name %> <span role="note" aria-label="status">Alpha</span>

> <%= description ? description : `Docmentation, examples and info for using ${name} component` %>

### Default <%= name %>

```html preview
<div>
  <%= name %>
</div>
```

## <%= name %> Variables

### Custom variables

```css
--color: #000;
```

### <%= name %> properties (rules)

```css
<%= name %> {
  color: var(--color, currentColor);
}
```

## Examples

----
## See also



[MDN GUIDELINES AND SPECFICATIONS](https: ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
