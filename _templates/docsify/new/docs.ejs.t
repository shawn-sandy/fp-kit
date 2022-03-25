---
to: <%= absPath %>/<%= name %>.md
---

# <%= name %>

<%= description ? description : "?>  _TODO_ add description" %>

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
## References/Additional info



[MDN GUIDELINES AND SPECFICATIONS](https: ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
