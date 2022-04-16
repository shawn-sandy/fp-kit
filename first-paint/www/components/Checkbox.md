# Checkbox <span role="note" style="--note: var(--beta)">Beta</span>

> Create and the checkbox element(s).

### Default Checkbox

```html preview
<label for="checkbox1">
  <input type="checkbox" id="checkbox1" value="" />
  Checkbox Label
</label>
```

## Checkbox Variables

### Custom variables

```css
  --chk-bdr-w: thick;
  --chk-bdr-cl: transparent;
  --chk-accent: green;
  --chk-bg: darkgray;
  --chk-size: 1.2rem;
  --chk-appearance: none;
  --chk-rds: var(--rds);
  --lbl-me: 1rem;
  --lbl-dsp: flex;
```


### Custom properties (rules)

#### Label props/rules

```css
  // label
    --lbl-me: 1rem;
  --lbl-dsp: flex;
  --lbl-fs: 1rem;
  --lbl-align: normal;
  --lbl-gap: 0.5rem;
  --lbl-color: currentColor;
  --lbl-cursor: pointer;
  --lbl-height: auto;
  display: var(--lbl-dsp);
  flex-direction: var(--lbl-direction, row);
  align-items: var(--lbl-align);
  margin-inline-end: var(--lbl-me);
  gap: 0.3rem;
  cursor: pointer;
  height: auto;
  font-size: var(--lbl-fs, var(--fs));
```

#### Input props/rules

```css
--fs: var(--chk-size);
  display: var(--lbl-dsp);
  flex-direction: var(--lbl-direction, row);
  place-items: end normal;
  margin-inline-end: var(--lbl-me);
  gap: 0.3rem;
  cursor: pointer;
  max-height: var(--chk-size);
  font-size: var(var(--chk-fs), var(--fs));

  :where([id][type="checkbox"]) {
    appearance: var(--chk-appearance);
    -webkit-appearance: var(--chk-appearance);
    -moz-appearance: var(--chk-appearance);
    line-height: 1;

    &::before {
      --chk-bdr-cl: darkgreen;
      --check-bdr-w: thick;
      --chk-bdr: none;
      --chk-rds: var(--rds);
      content: "";
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--chk-size);
      height: var(--chk-size);
      border-style: var(--chk-bdr);
      border-width: var(--chk-bdr-w);
      border-color: var(--chk-bdr-cl);
      background-color: var(--chk-bg);
      border-radius: var(--chk-rds);
      transition: var(--tran-all);
    }

    &:checked {
      --chk-appearance: none;
      &::before {
      --chk-bdr: solid;
       border-color: var(--chk-bdr-cl);
       border-width: var(--chk-bdr-w);
       border-style: --chk-bdr-style;
       --chk-bg: yellowgreen;
      }
    }
  }
```

## Examples


----
## References/Additional info


[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox ':target="_blank"')

[ACCESSIBILITY GUIDE](https://webaim.org/techniques/forms/advanced ':target="_blank"')

----
