# Form <span role="note" aria-label="status">Alpha</span>

> Docmentation, examples and info for using Form component

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/input';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/input.scss'
// css
import '@shawnsandy/first-paint@next/dist/css/components/input.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/input.min.css"
/>
```

### Default Form

```html preview
<form>

  <div>
    <label for="input-id">Input label</label>
    <input id="input-id" type="text" placeholder="Text input element">
  </div>


  <div>
    <label for="checkbox1">
    <input type="checkbox" id="checkbox1" value="" />
    Checkbox Label
    </label>
  </div>


<div>
  <label for="radio1">
    <input type="radio" id="radio1" name="radio" value="" />
    Radio label
  </label>
  <label for="radio2">
    <input type="radio" id="radio2" name="radio"  value="" />
    Radio2 label
  </label>
</div>

<div>

    <label for="select-1">Select Label</label>

  <select id="select-1>
      <option>This is a native select element</option>
      <option value="">Apples</option>
      <option value="">Bananas</option>
      <option value="">Grapes</option>
      <option value="">Oranges</option>
  </select>
</div>



  <div>
    <label for="textarea-id">Textarea label</label>
     <textarea id="textarea-id" autocorrect="off">
    The text area HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
    </textarea>
  </div>

</form>
```

## Form Variables

### Custom variables

```css
--color: #000;
```

### Form properties (rules)

```css
Form {
  color: var(--color, currentColor);
}
```

## Examples

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element ':_target="_blank"')

[ACCESSIBILITY BEST PRACTICES](https://www.w3.org/TR/wai-aria-practices-1.2/examples ':_target="_blank"')

[ACCESSIBILITY GUIDELINES](https://w3c.github.io/aria-practices/ ':_target="_blank"')

---
