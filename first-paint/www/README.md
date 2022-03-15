# First Paint 3.0 (beta)

 > ## Lightweight, Fast, Accessible, Inclusive

<h3> <em>First Paint is an easy to use CSS/SCSS starter library that contains accessibility focused, classless, semantic HTML elements and components for quickly scaffolding/building modern, lightweight mobile friendly digital products, websites apps and the likes.</em></h3>

----------------------------------------------

?> Version 3.0 is currently in beta development. While we don't anticipate many changes, we are constantly adding new features and improving the existing ones. Please be aware that some features may change in the future.
## Features

#### Easy to use

Drop into any semantic HTML5 page and customize global CSS varibles to your liking.

```html
https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@2.8.8/dist/v3/css/index.min.css">

```

#### Classlesss

No need to use classes, just use semantic HTML5 elements and  attributes.

#### Modular

Grab the entire library *(5kb-20kb)* or use only the modules you need.

#### Dynamic CSS Styles

Customize you CSS styles with variables, custom properties, mixins.

----
## Getting Started

**Install**

* Install `npm i @shawnsandy/first-paint` stable version
* Install `npm i @shawnsandy/first-paint@next` latest version (next)
* Yarn install `yarn add @shawnsandy/first-paint`

## Usage

Copy and add the stylesheet below into the `<head></head>` of you HTML page...

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css">
```

!> **Note:** you should consider the @next release as the latest beta(stable) version.


?> Add usage info description
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

## Changelog

View recent changes to this project on [Github](https://github.com/shawn-sandy/fp-kit/blob/main/first-paint/CHANGELOG.md)

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
