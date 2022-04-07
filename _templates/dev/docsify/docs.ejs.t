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


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element ':_target="_blank"')

[ACCESSIBILITY BEST PRACTICES](https://www.w3.org/TR/wai-aria-practices-1.2/examples ':_target="_blank"')

[ACCESSIBILITY GUIDELINES](https://w3c.github.io/aria-practices/ ':_target="_blank"')

----
