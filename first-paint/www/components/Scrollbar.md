# Scrollbar <span role="note" style="--note: var(--beta)">Beta</span>

> Docmentation, examples and info for using Scrollbar component

## Module usage

Import `css` or `sass` to use in your project.

- SASS

```scss
@use '@shawnsandy/first-paint/src/components/scrollbar';
```

- React

```jsx
import '@shawnsandy/first-paint/src/v3/components/scrollbar'
import '@shawnsandy/first-paint@next/dist/css/components/scrollbar.min.css'
```

- HTML

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shawnsandy/first-paint@next/dist/css/components/scrollbar.min.css"
/>
```

### Default Form

!> This scrollbar is may be compatible with all browsers, [you can read more about browser support here](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility ':target="_blank"')

### Default Scrollbar

```html preview
<div style="--scroll: 40vh; border: solid thin lightgray">
  <div>
    <h3>Scrollbar</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id
      repellendus nemo perspiciatis dignissimos neque velit qui necessitatibus!
      Ad voluptas porro consequatur quam ipsam blanditiis voluptatibus at
      obcaecati enim laborum.
    </p>

    <p>
      Perferendis autem deleniti natus atque, eius exercitationem voluptatum
      quas? Impedit doloribus omnis quaerat placeat error iste labore autem
      quibusdam in itaque, officia architecto odio consequuntur aperiam
      consectetur neque repellat quod.
    </p>

    <p>
      Nostrum, maxime ad et qui delectus dolore veniam dolorum est! Voluptates
      numquam doloremque repellat ratione! Quas, dolorum mollitia, doloribus,
      veritatis vitae consequuntur facilis ratione commodi nobis tempore cumque
      voluptatum distinctio.
    </p>

    <p>
      Asperiores, mollitia ipsam fugit aut inventore enim non corporis
      molestias. Repellat, praesentium earum? Aperiam eum neque totam commodi
      expedita, facilis amet beatae ea molestiae iste vel eos esse eligendi et!
    </p>

    <p>
      Quia dolorum pariatur laboriosam ab rem hic, ipsam doloribus! Est veniam
      fugiat illo ratione vitae ut maxime reiciendis cum accusantium modi.
      Obcaecati, ab rem culpa quis ad eos doloremque labore?
    </p>
  </div>
</div>
```

## Scrollbar Variables

### Custom variables

```css
--scroll-w: 0.5rem;
--scroll-h: 0.5rem;
--scroll-size: thin;
--scroll-bg: lightgray;
--scroll-track-bg: gray;
--overflow-x: auto;
--overflow-y: auto;
```

### Scrollbar properties (rules)

```css
height: var(--scroll, 40vh);
overflow-y: var(--overflow-y);
overflow-x: var(--overflow-x);
scrollbar-width: var(--scroll-size);

> * {
  padding: 10px;
}

&::-webkit-scrollbar {
  width: var(--scroll-w);
  height: var(--scroll-h);
  transition: opacity 500ms ease;
}
&::-webkit-scrollbar-thumb {
  /* Foreground */
  background: var(--scroll-bg);
}
&::-webkit-scrollbar-track {
  /* Background */
  background: var(--scroll-track-bg);
}
```

## Examples

---

## See also

[MDN GUIDELINES AND SPECFICATIONS](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar ':_target="_blank"')

[Styling scrollbars](https://webkit.org/blog/363/styling-scrollbars/ ':_target="_blank"')

---
