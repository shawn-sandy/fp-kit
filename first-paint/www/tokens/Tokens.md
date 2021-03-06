# Custom Properties (variables)  <span role="note" style="--note: var(--beta)">Beta</span>

> Custom Properties (CSS Variables) AKA custom props allow developers to create and reuse CSS variables, properties and values in vanilla CSS. FirstPaint leverages CSS variables for all of our components and modules adding a "Dynamic" layer of abstraction and flexibility to CSS.

## Global props

```css
  --fs: 100%;
  --fw: normal;
  --fst: normal;
  --lh: 1.7;
  --spacing: 0.5rem;
  --mg: 0;
  --pd: 1rem;
  --cl: inherit; // font-size
  --bg: #fff;
  --bg-img: initial;
  --bdr: initial;
  --line: initial;
  --rds: initial;

  font-size: var(--fs);
  font-weight: var(--fw);
  font-style: var(--fst);
  font-family: var(--ff);
  color: var(--cl);
  background-color: var(--bg);
  background-image: var(--bg-img);
  border: var(--border);
  outline: var(--line);
  border-radius: var(--rds);
```

## Responsive font sizes

```css
 // * responsive fonts sizes
  // 16px default
  --fs-0: clamp(0.688rem, 4vw - 1.5rem, 1rem);
  // 12px
  --fs-1: clamp(0.32rem, 1.3vw + 0.25rem, 0.75rem);
  // 14px
  --fs-2: clamp(0.5rem, 2vw - 0.5rem, 0.875rem);
  // 18px
  --fs-3: clamp(0.563rem, 2vw - 0.25rem, 1.125rem);
  // 21px
  --fs-4: clamp(0.75rem, 2vw - 0.25rem, 1.313rem);
  // 25px
  --fs-5: clamp(0.938rem, 2vw - 0.25rem, 1.563rem);
  // 32px
  --fs-6: clamp(1.1rem, 2vw + 0.75rem, 2rem);
  // 38px
  --fs-7: clamp(1.5rem, 4vw - 0.25rem, 2.375rem);
  // 48px
  --fs-8: clamp(1.75rem, 4vw + 0.25rem, 3rem);
  // 64px
  --fs-9: clamp(2rem, 4vw + 1.25rem, 4rem);
  // 72px
  --fs-10: clamp(4rem, 5vw + 2rem, 4.5rem);
  // 81px
  --fs-11: clamp(3.75rem, 5vw + 1.75rem, 5.063rem);
  // 101px
  --fs-12: clamp(5.063rem, 5vw + 3rem, 6.375rem);
```

## Heading variables

```css
  // h1
  --h1: var(--fs-10);
  // h2
  --h2: var(--fs-9);
  // h3
  --h3: var(--fs-8);
  // h4
  --h4: var(--fs-7);
  //h5
  --h5: var(--fs-6);
  // h6
  --h6: var(--fs-5);
```


### Usage

Custom properties can be used inside any of your CSS rules or to set dynamically styles the using you `style` attributes.

```css
button {
--fs: 2rem;
--cl: red;
}
// or class
.button {
--fs: 2rem;
--cl: red;
}
```

As a style attribute

```html
<button type="button" style="--fs: 2rem; --cl: red">...</button>

```

Example w/custom button properties

```html preview
<button type="button" style="--btn-fs: 1.5rem; --btn-color: red">Style Attributes</button>

```

----
## See also

[Styling with design tokens (Salesforce)](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/tokens_intro.htm, ':target="_blank"')

[A guide to CSS prpsperties](https://css-tricks.com/a-complete-guide-to-custom-properties/ ':target="_blank"')

[Brakfrost ](https://bradfrost.com/blog/post/atomic-web-design/ ':target="_blank"')

----
