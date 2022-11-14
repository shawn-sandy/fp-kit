# Dialog (Modal) <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style modals using the native dialog element (works in all evergreen browsers), the dialog element required some `javascript` to open and close, there is a sample of the script below.

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/dialog';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/dialog.scss'
// css
import '@shawnsandy/first-paint/src/v3/components/dialog.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/dialog.min.css"
/>
```

### Default Dialog

```html preview
<div>
  <button type="button" onclick="openDialog('#dialog-elm',this)">
    Open Dialog
  </button>
  <dialog id="dialog-elm">
    <header>Example modal</header>
    <p>
      Native HTML5 Modals (Dialogs) are finally here and available across all
      ever green browsers and they are fun!
    </p>

    <button type="button" class="btn btn-close" onclick="closeDialog(this)">
      Close
    </button>
  </dialog>
</div>
```

#### Example `javascript` for opening and closing the dialog

```javascript
// eslint-disable-next-line no-unused-vars
function openDialog(target, elm) {
  console.log(target, elm)
  document.querySelector(target).showModal()
}

// eslint-disable-next-line no-unused-vars
function closeDialog(elm) {
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
background-color: var(--diag-bg);
background-image: var(--diag-bg-img);
padding-inline: var(--diag-x);
padding-block: var(--diag-y);
&::backdrop {
  background-color: var(--bk-drop-bg, rgba(0, 0, 0, 0.7));
}
```

## Examples

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog ':_target="_blank"')

[HTML SPECIFICATIONS](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element ':_target="_blank"')

[ACCESSIBILITY GUIDE](<[https://](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal)> ':_target="_blank"')

---
