# Features

### Easy to use

Drop into any semantic HTML5 page and customize global CSS varibles to your liking.

```html
https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@2.8.8/dist/v3/css/index.min.css">

```

### Classlesss

No need to use classes, just use semantic HTML5 elements and  attributes.

### Modular

Grab the entire library *(5kb-20kb)* or use only the modules you need.

### Dynamic CSS Styles

Customize you CSS styles with variables, custom properties, mixins.

----

## Modules

### Header

```html preview
<header>
Header Section
</header>
```

### Section

```html preview
<section id="articles">
  <article>
    <h2>Sample Article 1</h2>
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
</section>
```

### Navbar

```html preview
<nav>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
  <section>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </section>
</nav>

```

### Page Footer

```html preview
<footer>
    <section>
        <p>
            <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odit expedita aliquam commodi incidunt nam
                maiores eum sunt minima corrupti dolore, fugiat veritatis sit, nobis harum ducimus repudiandae quos
                laboriosam?
            </small>
        </p>
    </section>
</footer>
</body>

</html>
```

### Button

```html preview

<button>
  Default Button
</button>

```

### Link Button

```html preview
  <a href="#" role="button" aria-label="Add word, cta action, to your button title">
  <span>Get Started</span></a>
```

### Checkbox

```html preview
<label for="checkbox">
  <input type="checkbox" id="checkbox" value="" />
  Checkbox Label
</label>
```

### Grid (w/list)

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


### Img

```html preview
<img
  src="https://source.unsplash.com/random?w=800"
  loading="lazy"
  alt="Placeholder Image"
/>
```

### Table

```html preview
  <table style="display: table">
    <thead style="background-color: var(--tbl-head-bg, #f5f5f5);">
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Hannock</td>
        <td>2000</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Hannock</td>
        <td>1900</td>
      </tr>
    </tbody>
  </table>
</section>

```

### Details Disclosure

```html preview
<details
  title="Element Title">
  <summary>
    Element Title
  </summary>
  <p>Add some content here to make it work</p>
</details>
```
