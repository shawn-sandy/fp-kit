# Grid Component <span role="note" style="--note: var(--beta)">Beta</span>

> Create and style responsive grids using the `grid`, `row`, `grid-cell` roles


### Default Grid

```html preview
<section style="max-width: min(80vw, 100vw);">
  <section role="grid">
    <div
      role="row">
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
    </div>
  </section>
</section>
```

## Grid variables

### Grid rules

```css
/* [role=grid] */
--grid-gap: 1rem;
--grid-count: 4;
--grid-min-width: calc(250rem / 16);
--gap-count: calc(var(--grid-count) - 1);
--total-gap-width: calc(
  var(--gap-count) * var(--grid-gap)
);
--grid-max-width: calc(
  (100% - var(--total-gap-width)) / var(--grid-count)
);

```

### Grid row rules

```css
/* [role=row] */
--grid-cols-tpl: repeat(
auto-fill,
minmax(
  max(var(--grid-min-width), var(--grid-max-width)),
  1fr
)
);
grid-template-columns: var(--grid-cols-tpl);
grid-gap: var(--grid-gap);
```

## Grid Examples


### Two column grid

Change the grid `--grid-cols: 2` to set the number of grid columns.

```html
 style="--grid-cols: 2"
```

```html preview
<section style="max-width: min(80vw, 100vw);">
  <section role="grid" style="--grid-cols: 2">
    <div
      role="row">
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
      </div>
    </div>
  </section>
</section>

```


----
## See also


[MDN GUIDELINES AND SEPCFICATIONS](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role 'target:="_blank"')

[Best Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#grid ':target="_blank"')

----
