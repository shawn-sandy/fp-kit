
# Card Component

The Card component is a versatile and reusable React component for creating card-like UI elements. It's part of the FPKit React component library.

## Usage

```tsx
import Card from 'libs/react/fpkit/src/components/cards/card';

<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Content>
    This is the content of the card.
  </Card.Content>
</Card>
```

## Components

### Card

The main container component for the card.

#### Props

- `elm?: 'div' | 'aside' | 'section' | 'article'` - HTML element to render as (default: 'div')
- `title?: React.ReactNode` - Card title
- `footer?: React.ReactNode` - Card footer
- `styles?: React.CSSProperties` - Inline styles
- `classes?: string` - Additional CSS classes
- `id?: string` - Unique ID for the card

All other props are passed through to the underlying UI component.

### Card.Title

A sub-component for rendering the card's title.

#### Props

- `as?: React.ElementType` - HTML element to render as (default: 'h3')
- `className?: string` - Additional CSS classes
- `styles?: React.CSSProperties` - Inline styles

### Card.Content

A sub-component for rendering the card's main content.

#### Props

- `className?: string` - Additional CSS classes
- `styles?: React.CSSProperties` - Inline styles

## Styling

The component uses CSS classes for styling:

- `.card-title` for the title
- `.card-content` for the content

You can override these classes or provide additional styling through the `className` and `styles` props.

## Accessibility

The Card component is designed with accessibility in mind:

- It uses semantic HTML elements (`div`, `aside`, `section`, or `article`) for the main container.
- The Title component defaults to using an `h3` element, which can be changed if needed.
- The Content component uses an `article` element for semantic structure.

## TypeScript

This component is written in TypeScript and provides type definitions for all props and sub-components.

## Contributing

When contributing to this component, please follow the established code style and conventions. Ensure all changes are well-tested and documented.

This README provides an overview of the Card component, its usage, available props, styling information, and accessibility considerations. It also mentions that the component is written in TypeScript and provides guidance for contributors.
