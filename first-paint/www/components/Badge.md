# Badge/Notes <span role="note" aria-label="status">Alpha</span>

?&gt;  _TODO_ add description

### Default Badge

```html preview
<div>
A simple badge <span role="note">Badge</span>
</div>
```

###  Default Note

```html preview
<p role="note">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

## Badge Variables

### Custom variables

```css
  --pd: 0;
  --py: .2rem;
  --px: .7rem;
  --fs: .7rem;
  --bg: whitesmoke;
  --bdr: none;
  --rds: 99rem;
  --red: ;
  --cl: inherit;
```

### Badge properties (rules)

```css
 // * css rules/styles
  padding-inline: var(--note-px, var(--px));
  color: var(--note-cl, var(--cl));
  padding-block: var(--note-cl, var(--py));
  font-size: var(--note-fs, var(--fs));
  border: var(--note-brd, var(--bdr));
  border-radius: var(--note-rds, var(--rds));
  background-color: var(--note-bg, var(--bg));
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

###  Default Note

Customize the note background/color with the `<span role="note" style="--note: lightyellow">...</span>`

```html preview
<p role="note" style="--note: lightyellow">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

----
## See also



[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/note_role ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
