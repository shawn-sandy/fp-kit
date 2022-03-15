# Buttons

?> _TODO_ add description

## Button Variables

### Custom variables

```css
--btn-sm: calc(12rem / 16); // 12px button
--btn-md: calc(16rem / 16);
--btn-lg: calc(21rem / 16);
--btn-pill: 99rem;
```

### Custom properties (rules)

```css
  color: var(--btn-color, currentColor);
  background-color: var(--btn-bg, lightgray);
  font-size: var(--btn-fs, calc(14rem / 16));
  display: var(--btn-dsp, inline-flex);
  gap: var(--btn-gap, 1rem);
  min-height: calc(40rem / 16);
  place-items: var(--btn-place, center);
  padding-inline: var(--btn-px, 1.4rem);
  padding-block: var(--btn-py, 0.8rem);
  border: var(--btn-border, none);
  border-radius: var(--btn-radius, 0.15rem);
  text-decoration: var(--btn-deco, none);
  transition: all 0.2s ease !important;
```

## Button Examples

### Default Button

```html preview
<button
  type="button"
>
  Default Button
</button>
```

### Disabled Button

```html preview
<button
  type="button"
  disabled
>
  Disabled Button
</button>
```

### Red Button

Change the button color using the style attribute.

```html
style="--btn-bg:red; --btn-color:white;"
```

```html preview
<button
  type="button"
  style="--btn-bg:red; --btn-color:white;"
>
  Red Custom Style
</button>
```

#### Red Button (Disabled)

```html preview
<button
  type="button"
  disabled
  style="--btn-bg:red; --btn-color:white;"
>
  Red Disabled
</button>
```

### Large Button

```html
style="--btn-fs:var(--btn-lg);"
```

```html preview
<button
  type="button"
  style="--btn-fs:var(--btn-lg);"
>
  Large Button
</button>
```

### Pill Button

```html
style="--btn-rds:var(--btn-pill);"
```

```html preview
<button
  type="button"
  style="--btn-radius: var(--btn-pill);"
>
  Large Button
</button>
```


----
## References/Additional info


[MDN GUIDELINES AND SEPCFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
