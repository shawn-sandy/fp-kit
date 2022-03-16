---
to: <%= absPath %>/<%= name %>.scss
---


@mixin props() {
  // * css custom properties
  @content;
}

@mixin rules {
  @include props;

  // * css rules/styles
  @content;
}

@mixin styles {
  // * css style utilities
  @content;
}

/**
* tag or classname name nav, .nav
*/
@mixin module {
  @include rules;
  @include styles;
}
