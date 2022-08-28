# Cards <span role="note" style="--note: var(--beta)">Beta</span>

> Create cards to display and showcase content like news, articles, grid-boxes, etc.

### Default Cards

To style a card we use the `data-card` style attribute or  repurpose `role="presentation` attribute on a `div` element.

```html preview

<div data-card>
  <h3>Card Title</h3>
    <p>
      Cupidatat consequat enim est et ad laboris pariatur occaecat duis esse culpa. Et reprehenderit do in Lorem do magna excepteur amet tempor laborum nisi voluptate consectetur. Qui nisi nisi cupidatat anim velit fugiat esse in.
    </p>
  <div role="footer">
    <a href="#">Read More</a>
  </div>

</div>

```

```html preview

<div role="presentation">
  <h3>Card Title</h3>
    <p>
      Cupidatat consequat enim est et ad laboris pariatur occaecat duis esse culpa. Et reprehenderit do in Lorem do magna excepteur amet tempor laborum nisi voluptate consectetur. Qui nisi nisi cupidatat anim velit fugiat esse in.
    </p>
  <div role="footer">
    <a href="#">Read More</a>
  </div>

</div>

```
## Cards Variables

### Custom variables

```css
--cd-sm: 1rem;
--cd-md: 1.5rem;
--cd-lg: 2rem;
--cd-xl: 3rem;
// TODO: decide which variable name works best
--card-sm: 1rem;
--card-md: 1.5rem;
--card-lg: 2rem;
--card-xl: 3rem;
--cd-shadow-sm: 0 0.1rem 0.15rem rgba(0, 0, 0, 0.1);
--cd-shadow-md: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
--cd-shadow-lg: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
```

### Custom properties (rules)

```css
  display: var(--card-dsp, flex);
  flex-direction: var(--card-direction, column);
  padding: var(--card, var(--card-sm));
  border-radius: var(--card-radius, 0.2rem);
  background-color: var(--card-bg, var(--bg, #fff));
  box-shadow: var(--cd-shadow);
  border: var(--card-border, thin solid whitesmoke);
```

## Examples


### Shadow Card

Add shadows to your cards with `style="--card:var(--cd-lg)` use the following custom properties `--card-lg; --card-md; --card-sm;` to add shadows to your cards.

```html preview
<div role="presentation" style="--card:var(--cd-lg); --card-shadow:var(--cd-shadow-lg);">
  <h3>Shadow Large</h3>
  <p>
    Cupidatat consequat enim est et ad laboris pariatur occaecat duis esse culpa. Et reprehenderit do in Lorem do magna excepteur amet tempor laborum nisi voluptate consectetur. Qui nisi nisi cupidatat anim velit fugiat esse in.
  </p>
  <div role="footer">
    <a href="#">Read More</a>
  </div>
</div>
```

### Shadow small w/Button

```html preview
<div role="presentation" style="--card:var(--cd-md); --card-shadow:var(--cd-shadow-sm);">
  <h3>Shadow Small</h3>
  <p>
    Cupidatat consequat enim est et ad laboris pariatur occaecat duis esse culpa. Et reprehenderit do in Lorem do magna excepteur amet tempor laborum nisi voluptate consectetur. Qui nisi nisi cupidatat anim velit fugiat esse in.
  </p>

  <div role="footer">
    <a href="#" style="--btn: lightgray; --btn-rds: 99rem">Read More</a>
  </div>
</div>
```

----
## See also

[Using the role presenation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role ':target="_blank"')

----
