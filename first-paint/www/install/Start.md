# Quick Start <span role="note" aria-label="status">Alpha</span>

> Here some quick start examples to get you started with FirstPaint. Grab `copy & paste` any of the snippets below to get you started

## Full Page

Full Semantic HTML5 page snippet w/css of the components/modules used, you can copy and paste to get started.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Example page</title>
    <meta name="description" content="title" />
    <meta name="author" content="author" />
    <link rel="stylesheet" href="/css/libs/all.css" />
  </head>

  <body>
    <!-- Page content here -->
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Page</a></li>
      </ul>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <header>
      <section>
        <h2 style="--fs: var(--fs-10)">Header Section</h2>
        <p>
          Labore est esse et nulla anim labore consequat veniam cupidatat
          laborum adipisicing.
        </p>
        <p>
          <button type="button" style="--btn-rds: 99rem">Default Button</button>
        </p>
      </section>
    </header>
    <main>
      <section>
        <section role="grid">
          <div role="row">
            <div role="gridcell">
              <h3>Grid col</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                nulla totam dolorem nemo facere ex expedita illum laboriosam
                sit. Ea laboriosam rem omnis sit autem temporibus ipsum maxime
                dignissimos id.
              </p>
              <p><button type="button">Default Button</button></p>
            </div>
            <div role="gridcell">
              <h3>Grid col</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                nulla totam dolorem nemo facere ex expedita illum laboriosam
                sit. Ea laboriosam rem omnis sit autem temporibus ipsum maxime
                dignissimos id.
              </p>
              <p><button type="button">Default Button</button></p>
            </div>
            <div role="gridcell">
              <h3>Grid col</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                nulla totam dolorem nemo facere ex expedita illum laboriosam
                sit. Ea laboriosam rem omnis sit autem temporibus ipsum maxime
                dignissimos id.
              </p>
              <p><button type="button">Default Button</button></p>
            </div>
            <div role="gridcell">
              <h3>Grid col</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                nulla totam dolorem nemo facere ex expedita illum laboriosam
                sit. Ea laboriosam rem omnis sit autem temporibus ipsum maxime
                dignissimos id.
              </p>
              <p><button type="button">Default Button</button></p>
            </div>
          </div>
        </section>
        <hr />
        <article id="articles">
          <h3 style="--fs: var(--fs-8)">Sample Article 1</h3>
          <img
            class="fp-img"
            src="https://source.unsplash.com/random/1200x480"
            loading="lazy"
            width="1280"
            height="480"
            alt="Placeholder Image"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam
            dolorum distinctio repellendus vero natus explicabo mollitia ea,
            nemo sunt voluptatibus eaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam
            dolorum distinctio repellendus vero natus explicabo mollitia ea,
            nemo sunt voluptatibus eaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam
            dolorum distinctio repellendus vero natus explicabo mollitia ea,
            nemo sunt voluptatibus eaque!
          </p>
        </article>
        <hr />
        <h2 role="presentation">Sample Table</h2>
        <section style="--tbl:*">
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
        </section>
        <hr />
        <section>
          <h2 role="presentation">Sample Form</h2>
          <form>
            <div>
              <label for="input-id">Input label</label>
              <input
                id="input-id"
                type="text"
                placeholder="Text input element"
              />
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
                <input type="radio" id="radio2" name="radio" value="" />
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
              <label for="textarea-id">Textarea label</label>
              <textarea class="fp-textarea" id="textarea-id" autocorrect="off">
The text area HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
            </textarea
              >
            </div>
          </form>
        </section>
      </section>
    </main>
    <hr />
    <footer>
      <section role="grid" style="--grid-cols: 2">
        <div role="row">
          <div role="gridcell">
            <h4>Grid col</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              nulla totam dolorem nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus ipsum maxime
              dignissimos id.
            </p>
          </div>
          <div role="gridcell">
            <h4>Grid col</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              nulla totam dolorem nemo facere ex expedita illum laboriosam sit.
              Ea laboriosam rem omnis sit autem temporibus ipsum maxime
              dignissimos id.
            </p>
          </div>
        </div>
      </section>

      <section>Copyright &copy; 2022</section>
    </footer>
  </body>
</html>
```

## CSS links

CSS link to add to your HTML file:

HTML stylesheet link

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/libs/all.min.css"
/>
```

CSS stylesheet link

```html
https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/libs/all.min.css
```
