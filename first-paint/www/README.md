# First Paint

 > ## Lightweight, Fast, Accessible, Inclusive

## First Paint is an easy to use CSS/SCSS starter library that contains accessibility focused, classless, semantic HTML elements and components for quickly scaffolding/building modern, lightweight mobile friendly digital products, websites apps and the likes.

----------------------------------------------

## Getting Started

**Install**

* Install `npm i @shawnsandy/first-paint` stable version
* Install `npm i @shawnsandy/first-paint@next` latest version (next)
* Yarn install `yarn add @shawnsandy/first-paint`

## Usage

Copy and add the stylesheet below into the `<head></head>` of you HTML page...

```html

```


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
      <span>Get Started</span></a
```

### Grid (w/list)

```html preview
<section style="max-width: min(80vw, 100vw);">
  <section role="grid">
    <div
      role="row"
      style="display: var(--gird-dsp, grid); grid-template-columns: var(--gird-cols, repeat(auto-fill, calc(100% / 4))); grid-gap: var(--gird-gap, 1em); --grid-count:2;"
    >
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
  <table>
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

## Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contribute

* Clone repo
* Edit code `projects/ideas`
* Submit pull request

## Enjoy

**Wakanda Forever :)**
