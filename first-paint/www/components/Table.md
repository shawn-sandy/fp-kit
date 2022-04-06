# Table <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style Table components/elements


### Default Table

```html preview
<section>
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
</section>

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
div[style*="--tbl"] {
    --spc: .5rem;
    --rds: .5rem;
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


----
### See also


[MDN GUIDELINES AND SEPCFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
