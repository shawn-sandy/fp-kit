# Footer   <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style footer footer section of your website

### Default Footer

```html preview
<footer>
  <section role="grid">
    <div
      role="row">
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
    </div>
  </section>
<hr/>
 <div>Copyright &copy; 2022</div>
</footer>
```

## Footer Variables

### Custom variables

```css
  --fs: 0.9rem;
  --footer-fs: 0.9rem;
  // --footer-bg: lightgray;
  --footer-dsp: flex;
  --footer-direction: column;
```

### Footer properties (rules)

```css
  display: var(--footer-dsp);
  flex-direction: var(--footer-direction);
  font-size: var(--footer-fs, var(--fs));

  p {
    --p-fs: var(--footer-fs, var(--fs));
  }
  @content;
```

## Examples

### Footer 2 cols


```html preview
<footer>
  <section role="grid" style="--grid-cols: 2">
    <div
      role="row">
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h5>Grid col</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
    </div>
  </section>
<hr/>
 <div>Copyright &copy; 2022</div>
</footer>
```
----
## See also



[MDN GUIDELINES AND SPECFICATIONS](https: ':_target="_blank"')

[HTML SPECIFICATIONS](https:// ':_target="_blank"')

[ACCESSIBILITY GUIDE](https://, ':_target="_blank"')

----
