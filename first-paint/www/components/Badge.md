# Badge/Notes <span role="note" aria-label="status" style="--note: var(--beta)">Beta</span>

Documentation and examples for using and styling `notes` role to add notes and badges to app/pages.

?> The note role can be added to parenthetic or ancillary content if no other native element or other role fits the purpose

### Default Badge

The default badge uses the `<small>` tag/element with it's role set to note `role="note"` as shown below.


```html preview
<div>
A simple badge <span role="note">Badge</span>
</div>
```

###  Default Note

The default note uses the `<p>` tag/element with it's role also set to note `role="note"` as shown below.

```html preview
<p role="note">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

## Badge Variables

### CSS variables

```css
  --beta: orange;
  --stable: green;
  --production: blue;
  --pd: 0;
  --py: 0.2rem;
  --px: 0.7rem;
  --fs: 0.7rem;
  --bg: lightgray;
  --bdr: none;
  --rds: 99rem;
  --cl: inherit;
  --tt: capitalize;
  --decoration: none;
```

### Badge properties (rules)

```css
    padding-inline: var(--note-px, var(--px));
    padding-block: var(--note-cl, var(--py));
    color: var(--note-cl, var(--cl));
    font-size: var(--note-fs, var(--fs));
    border: var(--note-brd, var(--bdr));
    border-radius: var(--note-rds, var(--rds));
    background-color:  var(--note, var(--bg));
    text-decoration: var(--note-decoration, var(--decoration));
    text-transform: var(--note-tt, var(--tt));

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


Create/Customize the note background/color with the `<p role="note" style="--note: lightyellow">...</p>`

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
