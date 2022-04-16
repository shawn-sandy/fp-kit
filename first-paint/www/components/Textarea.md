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
  --txa-bdr-s: solid;
  --txa-bdr-w: thin;
  --txa-bdr-cl: lightgray;
  --txa-px: .5rem;
  --txa-py: .5rem;
  --txa-fs: var(--fs);
  --txa-min-w: var(--min-w-800);
  --txa-min-h: calc(120rem / 16);
  --txa-overflow: auto;
  --txa-appearance: none;

```

### Custom properties (rules)

```css
  border-style: var(--txa-bdr-s);
  border-width: var(--txa-bdr-w);
  border-color: var(--txa-bdr-cl);
  padding-inline: var(--txa-px);
  padding-block: var(--txa-py);
  font-size: var(--txa-fs);
  min-width: var(--txa-min-w);
  min-height: var(--txa-min-h);
  overflow-y: var(--overflow-x, var(--txa-overflow));
  overflow-x: var(--overflow, var(--txa-overflow));
  background-clip: padding-box;
  -webkit-appearance: var(--txa-appearance);
  -moz-appearance: var(--txa-appearance);
  appearance: var(--txa-appearance);
```

## Examples

----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea ':target="_blank"')

[ACCESSIBILITY GUIDE]()

----
