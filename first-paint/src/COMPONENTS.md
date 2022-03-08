# Creating/Customizing an HTML5 page with FirstPaint

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

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
/>
```

#### HTML snippets markup

Copy and paste these snippets to build custom templates using fist-paint-CSS

#### Header

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

#### Main

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
  <aside>
    <h4>Sidebar</h4>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error, quas
      at facilis temporibus optio rem, doloremque, modi numquam commodi illum
      cumque. Sit eveniet, quod expedita libero obcaecati a laudantium.
    </p>
  </aside>
</section>
```

#### Navbar

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

#### Page Footer

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

#### Button

```html
<button type="button">Button</button>
```

#### Link Button

```html
  <a
      href="#"
      role="button"
      aria-label="Add word, cta action, to your button title"
    >
      <span>Get Started</span></a

```

#### Grid (w/list)

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

#### Grid Row

```html
<div role="listitem">
  <h3>Feature...</h3>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur
  assumenda, porro repudiandae repellendus placeat iure officia inventore sint
  voluptas et blanditiis facilis voluptate quas accusamus itaque ea, corporis
  odio.
</div>
```

#### Img

```html
<picture>
  <img src="" alt="Image" />
</picture>
```

#### Ordered List

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

#### Unordered List

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### Ordered List (unstyled)

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

#### Unordered List (unstyled)

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

#### Input

```html
<div role="listitem">
  <label for="input">Text Input Component</label>
  <input type="text" id="input" placeholder="Text input placeholder" />
</div>
```

#### Label Required

```html
<label for="input-required">
  <em>Text Required Input Component</em>
</label>
```

#### Email

```html
<label for="email-address">Text Input Component</label>
<input type="email" id="email-address" placeholder="Text input placeholder" />
```

#### Checkbox

```html
<span>
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"><em> Checkbox</em></label>
</span>
```

#### Radio

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

#### Select

```html
<label for="select">Text Input Component</label>
<select id="select">
  <option value="">Select</option>
  <option value="">Options</option>
  <option value="">Options</option>
</select>
```

#### Textarea

```html
<label for="textarea">Textarea Component</label>
<textarea id="textarea" cols="30" rows="10"></textarea>
```
