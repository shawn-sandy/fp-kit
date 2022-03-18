# Input

?>  _TODO_ add description


### Default Input

```html preview
<input id="input-id" type="text" placeholder="Text input element">
```


## Input Variables

### Custom variables

```css
--input-appearance: none;
```

### Custom properties (rules)

```css
  background-color: var(--input-cl, inherit);
  font-size: var(--input-fs, .9rem);
  font-weight: var(--input-fw, normal);
  border-style: var(--input-bdr-style, solid);
  border-width: var(--input-w, thin);
  border-color: var(--input-bdr-color, lightgray);
  padding-inline: var(--input-px, 1rem);
  padding-block: var(--input-py, .5rem);
  min-width: var(--input-min-w, 100%);
  border-radius: var(--input-bdr-radius, .1rem);
  -webkit-appearance: var(--input-appearance);
  -moz-appearance: var(--input-appearance);
  appearance: var(--input-appearance);
  // * css rules/styles
  &::placeholder {
    font-style: italic;
  }
```

## Examples


----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
