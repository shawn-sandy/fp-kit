---
to: <%= absPath %>/<%= name %>.md
---

# <%= name %>

<%= description ? description : "?>  _TODO_ add description" %>

## <%= name %> Variables

### Custom variables

```css
--color: #000;
```

### Custom properties (rules)

```css
  color: var(--color, currentColor);
```

## Examples

### Default <%= name %>

```html preview
<button>
<% name %>
</button>
```


----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
