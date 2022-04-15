# Features <span role="note" style="--note: var(--beta)">Beta</span>

----------------
## Easy to use

Grab our styles from the CDN `https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css` and drop into any semantic HTML5 page. FP was designed for use out of box with any semantic HTML5 markup, check out the docs for more info.


```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@2.8.8/dist/v3/css/index.min.css">

```

```html
https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/v3/css/index.min.css
```

## Dynamic CSS Styles (Custom Properties)

CSS variables can be used to dynamically change the look and feel of components/elements, whats more when you assign a CSS variable to a property you can now use the variable assigned as a property name in you rules. For example lets create a `color` and `background-color` variable for a button `--btn-cl` and `--btn-bg`. Now we can us the new variables to replace the name of the CSS properties and assign it a new value, creating `inherited properties` or what we call *css custom-props* [read more about css variables on increment](https://increment.com/frontend/a-users-guide-to-css-variables/). [FirstPaint default custom properties](/tokens)

## No Classes (optional)

While not as popular as traditional CSS frameworks that use `.classes` in markup to define page styles/layout. FirstPaint and libraries like it that leverage semantic `HTML5`, `CSS props` and the `style` attributes allowing us add a layer of `dynamic styling` to HTML/CSS with minimal effort redefining how we layout/style web applications.

We understand that this is an unconventional approach and some will frown on the approach, the beauty of it is that you are welcomed to create and use classes.


### Examples


```css
.btn {
  // lets assign a variable to the `button` element
  color: var(--btn-color: currentColor);
  background-color: var(--btn-bg: lightgray);
}
```

Now we can change the button color/background color using the style attribute `style="--btn-bg:red; --btn-color:white;"`, click view source below to see the code.


```html preview
<button
  type="button"
  style="--btn-bg:red; --btn-color:white;"
>
  Red Custom Style
</button>

```

!> *CSS classes can override CSS custom-props when used with inline styles, unless set globally. If you are not a fan of style attributes you can do the same thing in a class*

----

## Accessible

Accessibility matters to us and we think it should to you too so we made it a core part of our style system by adding aria attributes (`aria-role, aria-labels`, etc.) and semantic markup to CSS rules and markup to encourage developers to write accessible apps.


## Lightweight and performant

We have adopted a performance first approach to our style system and opted to use CSS custom-properties to define how we build modules and write markup. Allowing us to build a library that is less than 15kb/7kb gzip) yet flexible and and fast.


## Modular

 Grab the entire library less under 8kb(gzip)/20kb(min) or use only the components you need and extend as you wish.

Brab all the components

```scss
// https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/src/v3/
@use "@shawnsandy/src/v3/tokens/modules/reset.scss";
@use "@shawnsandy/src/v3/tokens/colors-scales.scss";
@use "@shawnsandy/src/v3/tokens/colors.scss";
@use "@shawnsandy/src/v3/components/props";
@use "@shawnsandy/src/v3/components/global.scss";
@use '@shawnsandy/src/v3/components/_button.scss';
@use "@shawnsandy/src/v3/components/header.scss";
@use "@shawnsandy/src/v3/components/container.scss";
@use "@shawnsandy/src/v3/components/checkbox.scss";
@use "@shawnsandy/src/v3/components/img.scss";
@use "@shawnsandy/src/v3/components/details-summary.scss";
@use "@shawnsandy/src/v3/components/nav.scss";
@use "@shawnsandy/src/v3/components/table.scss";
@use "@shawnsandy/src/v3/components/grid.scss";
@use "@shawnsandy/src/v3/components/cards.scss";
@use "@shawnsandy/src/v3/components/dialog.scss";
@use "@shawnsandy/src/v3/components/type.scss";
```

Optionally load the components you need.

```scss
// Custom properties
@use "@shawnsandy/src/v3/components/props";
// global styles
@use "@shawnsandy/src/v3/components/global.scss";
// button component/styles
@use '@shawnsandy/src/v3/components/_button.scss';
// header component/styles
@use "@shawnsandy/src/v3/components/header.scss";
```


## Examples

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

<button type="button">
  Default Button
</button>

```

### Checkbox

```html preview
<label for="checkbox1">
  <input type="checkbox" id="checkbox1" value="" />
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
  src="https://source.unsplash.com/random/1200x680"
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

### Dropdown

```html preview
<details
  title="Element Title">
  <summary>
    Element Title
  </summary>
  <p>Officia excepteur sint aute labore duis tempor fugiat exercitation non elit voluptate aliquip mollit velit. Magna minim nisi dolore dolor proident nulla magna. Non nisi sint voluptate reprehenderit. Do ut incididunt aliquip aliquip commodo voluptate. Anim velit reprehenderit ad deserunt labore fugiat deserunt ipsum. Laborum reprehenderit quis labore magna exercitation commodo non nostrud id exercitation aliqua.</p>
</details>
```
