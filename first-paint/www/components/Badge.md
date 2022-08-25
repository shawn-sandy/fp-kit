# Badges / Notes <span role="note" aria-label="status" style="--note: var(--beta)">Beta</span>

> Add badges or note styled elements/components to your apps using the aria `note` role. Badges are created using `<span role="note">`, adding `note` to other elements will create a `regular` note.

?> The note role can be added to parenthetic or ancillary content if no other native element or other role fits the purpose

## Default Badges

The default badge uses the `<small>` tag/element with it's role set to note `role="note"` as shown below.


```html preview
<div>
A simple badge <span role="note">Badge</span>
</div>
```

##  Regular Notes

The regular `note` can be used with any `tag/element` (beside `main header footer nav`) with it's role also set to note `role="note"` as shown below with `<p>` tag.

```html preview
<p role="note">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

## Creating Badges / Notes

You can create a **Badge** on an inline tag like `span` or `small` using one of the following tags or `attribute` selectors

- With the `aria-role` attribute `note`
- Use a `data` attribute `data-badge`
- With the aria-role `status` for live regions
- For notes you can use a `p` tag with the role `note`

## Badge Variables

### CSS variables

```css
  --beta: orange;
  --stable: green;
  --production: blue;
  --note-pd: 0;
  --note-py: 0.2rem;
  --note-px: 0.7rem;
  --note-fs: 0.8rem;
  --note-bg: lightgray;
  --note-bdr: none;
  --note-rds: 99rem;
  --note-cl: inherit;
  --note-tt: capitalize;
  --note-decoration: none;
```

### Badge properties (rules)

```css
  padding-inline: var(--note-px, var(--px));
  padding-block: var(--note-py, var(--py));
  color: var(--note-cl, var(--cl));
  font-size: var(--note-fs, var(--fs));
  font-weight: var(--note-fw, normal);
  border: var(--note-brd, var(--bdr));
  border-radius: var(--note-rds, var(--rds));
  background-color: var(--note, var(--bg));
  text-decoration: var(
    --note-decoration,
    var(--decoration)
  );
  text-transform: var(--note-tt, var(--tt));
  --note-bg: var(--note-beta, var(--beta));

  @content;
```

## Examples

### Red Badge

Customize the badge background/color with the `<span role="note" style="--bg: red">Badge</span>` or use CSS a class

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

```html preview
<h4>
A simple badge <span role="note">Badge</span>
</h4>
```


Create/Customize the note background/color with the `<p role="note" style="--note: lightyellow">...</p>`


```html preview
<p role="note" style="--note: lightyellow">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```


### Predefined badge colors

```html preview
<div>
A simple badge <span role="note" style="--note: var(--beta);">Beta</span>
</div>
```

```html preview
<div>
A simple badge <span data-badge="stable">Stable</span>
</div>
```

```html preview
<div>
A simple badge <span role="note" style="--note: var(--production);">Production</span>
</div>
```

## Notes that scale

Create notes that scales with the font size to `75%` of the parent element, default.


```html preview
<h3>
A simple badge <span role="note" style="--note-scale">Badge</span>
</h3>
```

```html preview
<p role="note" style="--note: lightyellow; --note-scale: var(--on)">
Incididunt excepteur eu non non quis. Elit non veniam occaecat sint consequat laborum. Laboris velit labore amet in do reprehenderit consectetur commodo consectetur ullamco aliqua. Nulla exercitation sunt id aliquip eiusmod ad amet laboris dolore laborum amet. Ullamco duis ex eiusmod Lorem esse mollit qui cillum laboris. Culpa aliquip quis cillum sit ipsum consectetur ipsum aute.
</p>
```

----
## See also


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/note_role ':_target="_blank"')

[ACCESSIBILITY GUIDE]([https://](https://www.w3.org/TR/wai-aria-1.1/#note ':_target="_blank"')
[LIVE REGIONS]([https://](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions ':_target="_blank"')
[Landmark elements](https://web.dev/use-landmarks/ ':target="_blank"')

----
