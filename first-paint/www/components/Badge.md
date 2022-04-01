# Badge

?&gt;  _TODO_ add description

### Default Badge

```html preview
<div>
A simple badge <span role="note">Badge</span>
</div>
```

## Badge Variables

### Custom variables

```css
--color: #000;
```

### Badge properties (rules)

```css
Badge {
  color: var(--color, currentColor);
}
```

## Examples

### Red Badge

Customize the badge background/color with the `<span role="note" style="--bg: red">Badge</span>`

or use CSS a class

```css
.red-badge {
--bg: red;
--color: $fff;
}
```

```html preview
<div>
A simple badge <span role="note" style="--bg: red; --cl: white">Badge</span>
</div>
```

----
## See also



[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/note_role ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
