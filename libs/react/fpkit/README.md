# FP Kit

A lightweight React Headless UI library for building modern and accessible components that leverage CSS custom properties for reactive Styles. [FPKIT component storybook](https://fpkit.netlify.app/?path=/story/guides-introduction--page)

## Install

```bash
npm i @fpkit/react
```

### Usage

```jsx
import { FP, Badge } from @fpkit/fp

export App () {
  return (
    <p>
    <FP as='h3'>FP KIt <Badge elm="span" role="note">Beta</Badge>
    </FP>
    </p>
  )
}

export default App
```

### Components

### License

MIT License

Copyright (c) 2022 Shawn Sandy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
