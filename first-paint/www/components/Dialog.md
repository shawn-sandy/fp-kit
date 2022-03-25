# Dialog

?&gt;  _TODO_ add description

### Default Dialog

```html preview
<div>
<button type="button" onclick="openDialog('#dialog-elm',this)">Open Dialog</button>
<dialog id="dialog-elm">
  <header>
    Example modal
  </header>
<p>
  Some basic text inside the modal to demonstrate how it all looks and works.
</p>

    <button class="btn btn-close" onclick="closeDialog(this)">
      Close
    </button>
</dialog>
</div>
```

## Dialog Variables

### Custom variables

```css
--color: #000;
```

### Dialog properties (rules)

```css
Dialog {
  color: var(--color, currentColor);
}
```

## Examples

----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog ':_target="_blank"')

[HTML SPECIFICATIONS](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
