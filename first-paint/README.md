# First Paint

> Lightweight, Fast, Accessible, Inclusive

First Paint is an easy to use CSS/SCSS starter library that contains accessibility focused, classless, semantic HTML elements and components for quickly scaffolding/building modern, lightweight mobile friendly digital products, websites apps and the likes.

- [First Paint](#first-paint)
  - [Quick Start](#quick-start)
  - [Customized Build](#customized-build)
  - [Creating/Customizing an HTML5 page with FirstPaint](#creatingcustomizing-an-html5-page-with-firstpaint)
    - [HTML5 Page](#html5-page)
    - [HTML snippets markup](#html-snippets-markup)
    - [Header](#header)
    - [Main](#main)
    - [Navbar](#navbar)
    - [Page Footer](#page-footer)
    - [Button](#button)
    - [Link Button](#link-button)
    - [Grid (w/list)](#grid-wlist)
    - [Grid Row](#grid-row)
    - [Img](#img)
    - [Ordered List](#ordered-list)
    - [Unordered List](#unordered-list)
    - [Ordered List (unstyled)](#ordered-list-unstyled)
    - [Unordered List (unstyled)](#unordered-list-unstyled)
    - [Input](#input)
    - [Label Required](#label-required)
    - [Email](#email)
    - [Checkbox](#checkbox)
    - [Radio](#radio)
    - [Select](#select)
    - [Textarea](#textarea)
    - [Textarea for code](#textarea-for-code)
    - [Table](#table)
  - [Licence (MIT)](#licence-mit)
  - [Contribute](#contribute)
  - [Enjoy](#enjoy)

## Quick Start

**Install**

- Install `npm i @shawnsandy/first-paint` stable version

- Install `npm i @shawnsandy/first-paint@next` latest version (next)
- Yarn install `yarn add @shawnsandy/first-paint`

**Simple & Easy copy paste option**

- Create an empty html page
- Copy and paste the code from [Gist](https://gist.githubusercontent.com/shawn-sandy/8460e6e400d3206c8a073367855ae381/raw/5309ceec672aa8a5332f2a8a52ed1efa6d63f63c/sample.html) this gist into your new HTML page
- Edit/customize your page `markup and content`
- Launch you page in your browser
- Edit some more
- Publish to the web :)

## Customized Build

- Copy and add the stylesheet below into the `<head></head>` of you HTML page

```html
<link
  rel="stylesheet"
  src="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint/dist/css/index.css"
/>
```

<script src="https://gist.github.com/shawn-sandy/bcc3739439954599280f6acd6432c127.js"></script>

## Creating/Customizing an HTML5 page with FirstPaint

Copy and add the stylesheet below into the `<head></head>` of you HTML page

```html
<link
  rel="stylesheet"
  src="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint/dist/css/index.css"
/>
```

**Minified version**

```html
<link
  rel="stylesheet"
  src="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@0.2.1/dist/css/index.css"
/>
```

Add Normalize CSS (CDN) copy and insert the snippet below into between the `<head></head>` of your page

> Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
/>
```

### HTML5 Page

Or you can just copy and create your page using the snippet below.

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>title</title>
    <meta name="description" content="title" />
    <meta name="author" content="author" />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
    />
    <link
      rel="stylesheet"
      src="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint/dist/css/index.css"
    />
  </head>

  <body>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quos
      blanditiis reiciendis facilis eum. Repellendus qui eius debitis, fugit
      aspernatur a molestiae ducimus nemo deleniti tempora exercitationem esse
      at.
    </p>
    <!-- <script src="index.js"></script> -->
  </body>
</html>
```

```html<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" />

```

### HTML snippets markup

Copy and paste these snippets to build custom templates using fist-paint-CSS

### Header

```html
<header>
  <section>
    <img src="img/fp.svg" alt="" />
    <h2>Lightweight, Fast, Accessible, Inclusive</h2>
    <p>
      <span
        >First Paint is lightweight easy to use CSS/SCSS starter library for
        quickly scaffolding/building modern, mobile friendly websites.</span
      >
    </p>
    <a
      href="#"
      role="button"
      aria-label="Add word, cta action, to your button title"
    >
      <span>Get Started</span></a
    >
  </section>
</header>
```

### Main

```html
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

    <footer>
      <p>
        <a href="" role="button">Read more</a>
      </p>
    </footer>
  </article>
</section>
<aside>
  <h4>Sidebar</h4>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error, quas
    at facilis temporibus optio rem, doloremque, modi numquam commodi illum
    cumque. Sit eveniet, quod expedita libero obcaecati a laudantium.
  </p>
</aside>
```

### Navbar

```html
<nav role="navigation" aria-label="Main navigation">
  <section id="navigation">
    <h1>
      <a href="#" aria-label="Site logo">
        <img src="/img/fp.svg" alt="" />
        <span aria-label="logo text">FirstPaint</span>
      </a>
    </h1>
  </section>
  <ul>
    <li>
      <a href="#">Navbar Items</a>
    </li>
    <li>
      <a href="#">Navbar Items</a>
    </li>
    <li>
      <a href="#">Navbar Items</a>
    </li>
  </ul>
  <section>
    <div>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <a href="http://">Documentation</a>
      <a href="http://">Repository</a>
      <a href="#">Contact Us</a>
      <button type="button">Button</button>
    </div>
  </section>
</nav>
```

### Page Footer

```html
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

```html
<button type="button">Button</button>
```

### Link Button

```html
  <a href="#" role="button" aria-label="Add word, cta action, to your button title">
      <span>Get Started</span></a
```

### Grid (w/list)

```html
<div role="list">
  <div role="listitem">
    <h3>Feature...</h3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    consectetur assumenda, porro repudiandae repellendus placeat iure officia
    inventore sint voluptas et blanditiis facilis voluptate quas accusamus
    itaque ea, corporis odio.
  </div>
  <div role="listitem">
    <h3>Feature...</h3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    consectetur assumenda, porro repudiandae repellendus placeat iure officia
    inventore sint voluptas et blanditiis facilis voluptate quas accusamus
    itaque ea, corporis odio.
  </div>
</div>
```

### Grid Row

```html
<div role="listitem">
  <h3>Feature...</h3>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur
  assumenda, porro repudiandae repellendus placeat iure officia inventore sint
  voluptas et blanditiis facilis voluptate quas accusamus itaque ea, corporis
  odio.
</div>
```

### Img

```html
<picture>
  <img src="" alt="Image" />
</picture>
```

### Ordered List

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

### Unordered List

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### Ordered List (unstyled)

```html
<span>
  <ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ol>
</span>
```

### Unordered List (unstyled)

```html
<span>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ul>
</span>
```

### Input

```html
<div role="listitem">
  <label for="input">Text Input Component</label>
  <input type="text" id="input" placeholder="Text input placeholder" />
</div>
```

### Label Required

```html
<label for="input-required">
  <em>Text Required Input Component</em>
</label>
```

### Email

```html
<label for="email-address">Text Input Component</label>
<input type="email" id="email-address" placeholder="Text input placeholder" />
```

### Checkbox

```html
<span>
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"><em> Checkbox</em></label>
</span>
```

### Radio

```html
<span>
  <input id="radio" type="radio" name="radio-button" />
  <label for="radio"><em> Radio</em></label>
</span>
<span>
  <input id="radio-off" type="radio" name="radio-button" />
  <label for="radio-off"><em> Radio</em></label>
</span>
```

### Select

```html
<label for="select">Text Input Component</label>
<select id="select">
  <option value="">Select</option>
  <option value="">Options</option>
  <option value="">Options</option>
</select>
```

### Textarea

```html
<label for="textarea">Textarea Component</label>
<textarea id="textarea" cols="30" rows="10"></textarea>
```

### Textarea for code

```html
<textarea role="presentation" name="" id="" cols="30">
<h3>Subtitle</h3>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis asperiores
    doloremque magnam mollitia fugiat alias explicabo eum! Dolorem obcaecati
    laudantium commodi quis, facere aspernatur sapiente, molestias quidem
    molestiae repellat adipisci?
</p>
  </textarea
>
```

### Table

```html
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
    <tr class="active-row">
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
    <tr class="active-row">
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
    <tr class="active-row">
      <td>Melissa</td>
      <td>5150</td>
      <td>Melissa</td>
      <td>5150</td>
    </tr>
    <!-- and so on... -->
  </tbody>
</table>
```

## Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contribute

- Clone repo
- Edit code `projects/ideas`
- Submit pull request

## Enjoy

**Wakanda Forever :)**
