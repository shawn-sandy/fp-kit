# Guides and Tutorials  <span role="note" style="--note: var(--beta)">Beta</span>

> Use these guides to help you build and use components FP components in you apps/sites.

## Page Example


<img src="/images/fp-page-example.jpg" alt="Snippet Landing page">


A simple HTML5 example page with snippets of the components used you can copy and paste to build your own.

<p>
<a role="button" style="--link-bg: lightgray; --btn-rds: 99rem;" href="/basic-sample.html" target="_blank">View Sample Page Layout</a>
<p>



### Snippet Page Source

### HTML5 Snippet

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <title>title</title>
    <meta name="description" content="title" />
    <meta name="author" content="author" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css">
  </head>

  <body>
    <!-- Page content here -->
  </body>
</html>
```

### Header Snippet

```html
<header>
<section>
<h2>Header Section</h2>
<p>Labore est esse et nulla anim labore consequat veniam cupidatat laborum adipisicing.</p>
<p>
<button type="button" style="--btn-rds: 99rem">
  Default Button
</button>
</p>
</section>
</header>
```

### Grid Snippet

```html
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
<p><button type="button"
>
  Default Button
</button>
</p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
<p><button type="button"
>
  Default Button
</button>
</p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
<p><button type="button"
>
  Default Button
</button>
</p>
      </div>
      <div role="gridcell">
        <h3>Grid col</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          totam dolorem nemo facere ex expedita illum laboriosam sit. Ea
          laboriosam rem omnis sit autem temporibus ipsum maxime dignissimos id.
        </p>
<p><button type="button"
>
  Default Button
</button>
</p>
      </div>
    </div>
  </section>
```

### Article Section Snippet

```html
  <article id="articles">
    <h2>Sample Article 1</h2>
   <img src="https://source.unsplash.com/random/1200x480" loading="lazy"
  alt="Placeholder Image"/>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam dolorum
      distinctio repellendus vero natus explicabo mollitia ea, nemo sunt
      voluptatibus eaque!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam dolorum
      distinctio repellendus vero natus explicabo mollitia ea, nemo sunt
      voluptatibus eaque!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam dolorum
      distinctio repellendus vero natus explicabo mollitia ea, nemo sunt
      voluptatibus eaque!
    </p>
</article>
```

### Table Snippet

```html
<div style="--tbl:*">
          <table>
            <caption>Table Caption</caption>
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
        </div>
```

### Form Snippet

```html
<h2 role="presentation">

          </h2>
          <form>

            <div>
              <label for="input-id">Input label</label>
              <input id="input-id"
                type="text"
                placeholder="Text input element">
            </div>


            <div>
              <label for="checkbox1">
                <input type="checkbox"
                  id="checkbox1"
                  value="" />
                Checkbox Label
              </label>
            </div>


            <div>
              <label for="radio1">
                <input type="radio"
                  id="radio1"
                  name="radio"
                  value="" />
                Radio label
              </label>
              <label for="radio2">
                <input type="radio"
                  id="radio2"
                  name="radio"
                  value="" />
                Radio2 label
              </label>
            </div>

            <div>
              <label for="select-1">Select Label</label>
              <select id="select-1">
                <option>This is a native select element</option>
                <option value="">Apples</option>
                <option value="">Bananas</option>
                <option value="">Grapes</option>
                <option value="">Oranges</option>
              </select>
            </div>



            <div>
              <label for="input-id">Textarea label</label>
              <textarea id="textarea"
                autocorrect="off">The text area HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
            </textarea>
            </div>

          </form>

```

### Footer Snippet

```html
<footer>
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
    </div>
  </section>
<hr/>
 <div>Copyright &copy; 2022</div>
</footer>
```

## FP STYLES

FP-Styles is an optional version of FP that provides a set of classes that can be used to style your components.

<a role="button" style="--link-bg: lightgray; --btn-rds: 99rem;" href="/basic-sample.html" target="_blank">View Sample Page Layout (classes)</a>
