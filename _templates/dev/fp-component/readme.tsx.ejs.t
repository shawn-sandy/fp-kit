---
to: <%= absPath %>/readme.stories.mdx
---

import { Meta } from "@storybook/addon-docs"

<Meta title="<%= h.inflection.camelize(subFolder) %>/<%= componentName %>/Readme" />

# <%= componentName %>

Browse example stories now by navigating to them in the sidebar.
View their code in the `src/elements/**` directory to learn how they work.
We recommend building UIs with a [**component-driven**](https://componentdriven.org) process starting with atomic components and ending with pages.

<div className="tip-wrapper">
  <span className="tip">Tip</span>Edit the Markdown in{" "}
  <code>src/stories/Introduction.stories.mdx</code>
</div>
