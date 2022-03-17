---
to: <%= absPath %>/_<%= name %>.scss
---
/*
 ***************************************
 FirsPaint
 Author: Shawn Sandy
 Date: 2021-04-01
 ***************************************
*/

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

@mixin module {
  <%= elementName ? elementName : name %> {
    @include rules;
  }
  @include styles;
}
