# Radio

?&gt;  _TODO_ add description

### Default Radio

```html preview
<div>
<label for="radio1">
  <input type="radio" id="radio1" name="radio" value="" />
  Radio label
</label>
<label for="radio2">
  <input type="radio" id="radio2" name="radio"  value="" />
  Radio2 label
</label>
</div>
```

## Radio Variables

### Custom variables

```css
  --rdo-bdr: none;
  --rdo-bdr-w: medium;
  --rdo-bdr-cl: transparent;
  --rdo-bg: darkgray;
  --rdo-appearance: none;
  --rdo-rds: 99rem;
```

### Custom properties (rules)

```css
  appearance: var(--rdo-appearance);
  -webkit-appearance: var(--rdo-appearance);
  -moz-appearance: var(--rdo-appearance);
  border-radius: var(--check-rds);
  cursor: pointer;
  margin: 0;

  &::before {
  --rdo-bdr-cl: lightgray;
  --rdo-bdr-w: initial;
  --rdo-size: 1.2rem;
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--rdo-size);
  min-height: var(--rdo-size);
  margin: 0;
  border: var(--rdo-bdr, none);
  border-style: var(--rdo-bdr);
  border-width: var(--rdo-bdr-w);
  border-color: var(--rdo-bdr-cl);
  background-color: var(--rdo-bg);
  border-radius: var(--rdo-rds);
```

## Examples

----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
