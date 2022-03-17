# CSS Tokens (variables)

?>  _TODO_ add description

## Custom properties

Here is a list of the default custom properties we use in FirstPaint.


```css

font-size: var(--fs, 100%);
font-weight: var(--fw, normal);
font-style: var(--fst, normal);
font-family: var(--ff, sans-serif);
color: var(--cl, initial);
background-color: var(--bg, initial);
background-image: var(--bg-img, initial);
border: var(--border, initial);
outline: var(--line, initial);

// prefix rules
--clip-path: initial;
-webkit-clip-path: var(--clip-path);
clip-path: var(--clip-path);
```

#### Usage

Custom properties can be used inside any of your CSS rules or to set dynamically styles the using you `style` attributes.

```css
button {
--fs: 2rem;
--cl: red;
}
// or class
.button {
--fs: 2rem;
--cl: red;
}
```

As a style attribute

```html
<button style="--fs: 2rem; --cl: red">...</button>

```

Example w/custom button properties

```html preview
<button style="--btn-fs: 1.5rem; --btn-color: red">Style Attributes</button>

```



----
## References/Additional info

[MDN GUIDELINES AND SEPCFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
