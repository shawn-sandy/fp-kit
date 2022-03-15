# Img

Responsive and accessible `img` componnent

## Img Variables

### Custom variables

```css
  --img-xs: 10vw;
  --img-sm: 25vw;
  --img-md: 50vw;
  --img-lg: 75vw;
  --img-xl: 90vw;
  --img-100: 100vw;
```

### Custom properties (rules)

```css
  color: var(--color, currentColor);
```

## Examples

### Default Img

```html preview
<img
  src="https://source.unsplash.com/random?w=800"
  loading="lazy"
  alt="Placeholder Image"
/>
...
```

### Error Loading Img

```html preview
<img
  src="https://source.unsplash"
  width="300"
  height="300"
  loading="lazy"
  alt="Image not found"
  style="object-fit: var(--img-fit, fill); aspect-ratio: var(--img-ratio, auto 4 / 3); width: 350px; height: 350px;"
onerror="imgError(event)"
/>
```

Add the following into your `js` scripts

```js
function imgError(event) {
  // console.log("Image loading error" + event.currentTarget.src);
  event.currentTarget.src = "https://via.placeholder.com/800";
 };
```

### Figure Img

Style attributes are applied to the `figure` element.

```html
 <figure
  style="width: var(--pic-w, 500px); height: var(--pic-h, auto);"
>
```

```html preview
<figure
  style="width: var(--pic-w, 500px); height: var(--pic-h, auto);"
>
  <img src="https://source.unsplash.com/random?w=800" alt="" />
  <figcaption>A Caption for my image</figcaption>
</figure>
```

----
### References/Additional info


[MDN GUIDELINES AND SEPCFICATIONS]()

[ACCESSIBILITY GUIDE]()

----
