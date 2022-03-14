---
to: <%= absPath %>/<%= name %>.md
---

# Buttons

<%= description ? description : '?>  _TODO_ add description' %>

## <%= name %> Variables

### Custom variables

```css
--color: #000;
```

### Custom properties (rules)

```css
  color: var(--color, currentColor);
```

## <%= name %> Examples

### Default <%= name %>

```html preview
...
```
