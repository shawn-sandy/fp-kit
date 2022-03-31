# Buttons

?> _TODO_ add description

### Default Button

```html preview
<button type="button"
>
  Default Button
</button>
```

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

### Default Buttons

```html preview
<button type="button"
>
  Default Button
</button>

<button type="button"
>
  Default Button
</button>

<button type="button"
>
  Default Button
</button>
```

### Button

You can use the button to create a button without border or background color, **styleless buttons**--useful for creating/styling buttons that look like links using of vice-versa. For links `<a>` you use `style="--btn:*"` or the `[role="button"] attribute.


```html preview
<button>
Default Button
</button>
```

### Disabled Button

Buttons that contain a disabled attribute `[disabled]`

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

Style the button font size `--btn-fs` using the `--btn-lg` variable `--btn-sm`, `--btn-md` variable(s)

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

Button with a pill style/shape `--btn-pll`

```html
style="--btn-rds:var(--btn-pill);"
```

```html preview
<button
  type="button"
  style="--btn-rds: var(--btn-pill);"
>
  Pill button
</button>
```

----
## See also

[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

[Button Specs](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)

[Button patterns](https://w3c.github.io/aria-practices/examples/button/button.html)

[ACCESSIBILITY GUIDE](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)

[Hiding content/button](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)

----
