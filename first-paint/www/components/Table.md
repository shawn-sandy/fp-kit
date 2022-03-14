# Table

?>  _TODO_ add description

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

### Default Table

```html preview
<section style="width: 100%; min-width: 85vw;">
  <table
    style="display: var(--tbl-dsp, table); width: var(--tbl-width, 100%); border-collapse: var(--tbl-collapse, collapse); min-width: var(--tbl-min-w, 100%);"
  >
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
