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

#### Example `javascript` for opening and closing the dialog

```javascript
// eslint-disable-next-line no-unused-vars
function openDialog (target, elm) {
  console.log(target, elm)
  document.querySelector(target).showModal()
}

// eslint-disable-next-line no-unused-vars
function closeDialog (elm) {
  elm.closest('dialog').close()
}

```

## Dialog Variables

### Custom variables

```css
  --diag-bg: whitesmoke;
  --diag-bg-img: none;
  --diag-x: 1.5rem;
  --diag-y: 1.5rem;
```

### Dialog properties (rules)

```css
Dialog {

  background-color: var(--diag-bg);
  background-image: var(--diag-bg-img);
  padding-inline: var(--diag-x);
  padding-block: var(--diag-y);
  &::backdrop {
    background-color: var(--bk-drop-bg, rgba(0, 0, 0, 0.7));
  }
}
```

## Examples

----
## References/Additional info


[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog ':_target="_blank"')

[HTML SPECIFICATIONS](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
