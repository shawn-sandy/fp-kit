# Textarea <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style the textarea element.

### Default Textarea

```html preview
<textarea id="textarea" autocorrect="off">
The text area HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
</textarea>
```

## Textarea Variables

### Custom variables

```css
 --ta-bdr-s: solid;
  --ta-bdr-w: thin;
  --ta-bdr-cl: lightgray;
  --ta-px: .5rem;
  --ta-py: .5rem;
  --ta-fs: var(--fs);
  --ta-min-w: 100%;
  --ta-min-h: calc(120rem / 16);
  --ta-overflow: auto;
  --ta-appearance: none;
```

### Custom properties (rules)

```css
  border-style: var(--ta-bdr-s);
  border-width: var(--ta-bdr-w);
  border-color: var(--ta-bdr-cl);
  padding-inline: var(--ta-px);
  padding-block: var(--ta-py);
  font-size: var(--ta-fs);
  min-width: var(--ta-min-w);
  min-height: var(--ta-min-h);
  overflow-y: var(--overflow-x, var(--ta-overflow));
  overflow-x: var(--overflow, var(--ta-overflow));
  background-clip: padding-box;
  -webkit-appearance: var(--ta-appearance);
  -moz-appearance: var(--ta-appearance);
  appearance: var(--ta-appearance);
```

## Examples

----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea ':target="_blank"')

[ACCESSIBILITY GUIDE]()

----
