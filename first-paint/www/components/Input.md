# Input <span role="note">Alpha</span>

> Create and style the form input elements.


### Default Input

```html preview
<input id="input-id" type="text" placeholder="Text input element">
```


## Input Variables

### Custom variables

```css
--input-appearance: none;
--input-min-w: min(150px, 100%);
--input-fw: normal;
--input-bdr-style: solid;
--input-bdr-color: lightgray;
--input-px: 1rem;
--input-py: .5rem;
--input-bdr-radius: .1rem;
```

### Custom properties (rules)

```css
  background-color: var(--input-cl);
  font-size: var(--input-fs);
  font-weight: var(--input-fw);
  border-width: var(--input-min-w);
  border-style: var(--input-bdr-style);
  border-color: var(--input-bdr-color);
  padding-inline: var(--input-px);
  padding-block: var(--input-py);
  min-width: var(--input-min-w);
  border-radius: var(--input-bdr-radius);
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
