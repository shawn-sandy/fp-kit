# Table <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style Table components/elements

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/table';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/table.scss'
// or css
import '@shawnsandy/first-paint/dist/css/components/table.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/table.min.css"
/>
```

### Default Table

```html preview
<table>
  <caption>
    Table Caption
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Points</th>
      <th>Name</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dom</td>
      <td>6000</td>
      <td>Dom</td>
      <td>6000</td>
    </tr>
    <tr>
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
    <tr>
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
    <tr>
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
  </tbody>
</table>
```

## Table Variables

### Custom variables

```css
--mx: var(--sm-x);
--my: 0;
--collapse: collapse;
--border-w: thin;
--border-s: solid;
--border-cl: var(--light);
```

### Custom properties (rules)

```css
border-collapse: var(--tbl-collapse);
margin: 25px 0;
font-size: var(--tbl-fs, 0.9em);
font-family: var(--fs, sans-serif);
min-width: var(--tbl-width, 100%);
width: var(--tbl-width, 100%);
border: var(--tbl-border, thin solid lightgray);
display: var(--tbl-dsp, table);
```

## Table Examples

### Custom Table wrapper

In this example, we use a custom table style utility to wrap the table.

```css
div[style*='--tbl'] {
  --spc: 0.5rem;
  --rds: 0.5rem;
  padding: var(--spc);
  overflow: auto;
  width: 100%;
  background-color: whitesmoke;
  border-radius: var(--rds);
}
```

```html preview
<div style="--tbl:*">
  <h3>Table</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th>Name</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
    </tbody>
  </table>
  <footer aria-label>Footer</footer>
</div>
```

### Responsive Table

To create a responsive `table` you wrap you table in a `section, div` with the role `region` or the `style="--scroll: 45vw"` attribute.

```html preview
<div style="--scroll: 40vh; width: 100%">
  <table style="max-height: 300px">
    <caption>
      Table Caption
    </caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th>Name</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### See also

[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table ':target="_blank"')

[ACCESSIBILITY GUIDE](https://www.w3.org/TR/wai-aria-practices/examples/ ':target="_blank"')

---
