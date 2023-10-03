# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.4](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.3.3...@fpkit/react@0.3.4) (2023-08-17)

**Note:** Version bump only for package @fpkit/react

## [0.3.3](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.3.2...@fpkit/react@0.3.3) (2023-08-17)

### Bug Fixes

- **fp-badge.tsx:** fix import path for FP component to correctly reference the component in the components/fp directory ([f2d5a7a](https://github.com/shawn-sandy/fpkit/commit/f2d5a7a14fc5cdd64862aa9f30eee93f9748b54b))

### Features

- **storybook:** add preview.tsx file to configure Storybook parameters and badges ([016a1fb](https://github.com/shawn-sandy/fpkit/commit/016a1fb5bb81eca4cad1d82e48dc99dc84167130))

## [0.3.2](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.3.1...@fpkit/react@0.3.2) (2023-08-09)

### Bug Fixes

- **arrow-left.tsx:** add strokeColor prop to ArrowLeft component to allow customization of stroke color ([97a4156](https://github.com/shawn-sandy/fpkit/commit/97a415697b93217a4ef2b3681f18c53c1b377da8))
- **arrow-right.tsx:** import Svg component to fix missing import error ([f449b7a](https://github.com/shawn-sandy/fpkit/commit/f449b7ae2c57421582af9da85e8608f7b169a0c1))
- **arrow-up.tsx:** change default size of ArrowUp component from 24 to 16 for better consistency with other icons ([7de0306](https://github.com/shawn-sandy/fpkit/commit/7de03068de5403f308254c3b08831b78b262fd82))
- **button.stories.tsx:** spread Button.styles object to preserve existing styles when adding new styles ([3363766](https://github.com/shawn-sandy/fpkit/commit/33637664f339539c5660051c1173f44ecb00ddf2))
- **button.tsx:** remove unused imports and variables, fix type declaration for eventType ([33532c4](https://github.com/shawn-sandy/fpkit/commit/33532c4c8d41497fdd21b35ffec04186b67caacd))
- **icons:** add role prop to Code component to improve accessibility ([17ed17f](https://github.com/shawn-sandy/fpkit/commit/17ed17f19f4977a5bf26f7c39044029b21ecd95e))
- **icons:** add spread operator to pass down props in Add, Chat, and Code components ([9fa8e11](https://github.com/shawn-sandy/fpkit/commit/9fa8e11c642545c20e279935cb3d2fd656517887))
- **icons:** change default fill color to 'none' and add stroke color to improve icon rendering ([a1df773](https://github.com/shawn-sandy/fpkit/commit/a1df773150feeef968d5db0d98b6c67adbd95d5c))
- **icons:** change default size of Chat and User icons to 16 to improve consistency ([90bd242](https://github.com/shawn-sandy/fpkit/commit/90bd242449639861550d1f30d4a0166c532cde9e))
- **icons:** change size prop type from string to number for Copy and Home icons to improve type safety and consistency ([d804c51](https://github.com/shawn-sandy/fpkit/commit/d804c519ed457530626d1fe841e47ff30886f599))
- **icons:** import Svg component in left, minus, remove, and right icon components to improve code organization and reusability ([8206674](https://github.com/shawn-sandy/fpkit/commit/8206674b85c7362554d9a0e40a0c64ce0f8efbac))
- **icons:** update the 'Add' icon to match the latest design ([9fec44c](https://github.com/shawn-sandy/fpkit/commit/9fec44c2bd6fe28861e7927467621a68bf05fd69))
- **img.tsx:** remove unused renderStyles prop ([f8b4594](https://github.com/shawn-sandy/fpkit/commit/f8b459413121f3bf3c33ef971c2589916eb9bb6e))
- **react/fpkit:** fix import statement in kit.tsx to use single quotes instead of double quotes ([fa9cb98](https://github.com/shawn-sandy/fpkit/commit/fa9cb988699e3d58b264319da6cb8dfb2b2c6128))

### Features

- 🌟 assets/icons ([e2fed2b](https://github.com/shawn-sandy/fpkit/commit/e2fed2be3a043485400750d79be72649be6bba4c))
- **arrow-down.tsx:** add ArrowDown component to the icons library ([94e7bf0](https://github.com/shawn-sandy/fpkit/commit/94e7bf0a4a011bb24fab4fd204804d500c70b688))
- **arrow-up.tsx:** add ArrowUp icon component ([584fdb1](https://github.com/shawn-sandy/fpkit/commit/584fdb1ef56a0d4b351a0325b9586df83482d250))
- **button.test.tsx:** add unit tests for Button component ([37197ee](https://github.com/shawn-sandy/fpkit/commit/37197eefc1e13aa062176a3c2cba3a4ab2264da9))
- **button.tsx:** add 'styles' prop to Button component to allow custom styles to be passed in ([8c4525a](https://github.com/shawn-sandy/fpkit/commit/8c4525a0020cbf230ffc651fa9335acb3e3e9c8e))
- **button.tsx:** add comprehensive JSDoc comments to Button component to improve code documentation ([6d046fc](https://github.com/shawn-sandy/fpkit/commit/6d046fcfc53cca0d9da34958512f3c8ba0db9983))
- **card.stories.tsx:** add Card component story with default props and content ([e7ffe11](https://github.com/shawn-sandy/fpkit/commit/e7ffe1187208b4aa7f6b138c38b43e0adabcc2f5))
- **card:** add Card component with support for custom element, styles, and rendering children ([053bae6](https://github.com/shawn-sandy/fpkit/commit/053bae60b340991d5eb7d91642f0818d4f51dd04))
- **Code.stories.tsx:** add storybook story for Code component in FP.React Components/Icons ([cd82509](https://github.com/shawn-sandy/fpkit/commit/cd825093fbf49aec193907c5b6a8056911d3538b))
- **dropdown-summary.tsx:** expose defaultStyles as a static property on Summary component for easier customization ([b893d2e](https://github.com/shawn-sandy/fpkit/commit/b893d2ed3a08e3438823fe91999807879a42b9df))
- **dropdown.tsx:** add Summary and Details components as properties of Dropdown component for better modularity and reusability ([4cc5bda](https://github.com/shawn-sandy/fpkit/commit/4cc5bdaa4be58ba3d52b2651659b61e8401aabee))
- **fields.tsx:** add styles prop to Field component to allow custom styles to be applied ([8778c38](https://github.com/shawn-sandy/fpkit/commit/8778c388dab0f0e886c824d3ed68d848c53f4834))
- **fp-badge.tsx:** add styles prop to Badge component to allow custom styling ([19d6471](https://github.com/shawn-sandy/fpkit/commit/19d64713470f01907dddce9a67eb8c4a43231878))
- **icon.stories.tsx:** add a new story for the ArrowLeft icon ([0a4080e](https://github.com/shawn-sandy/fpkit/commit/0a4080efef46d7bf36503641e597efb88acc7200))
- **icon.stories.tsx:** add story for ArrowUp icon to showcase the icon in the UI ([4d7688d](https://github.com/shawn-sandy/fpkit/commit/4d7688d620b45401e3b4004036aa7ba1e8d9adac))
- **icons.ts:** add new file to export various icon components for use in the npm ([9cbe5fb](https://github.com/shawn-sandy/fpkit/commit/9cbe5fbb39ab5a9b2b728a4836337b98c39fb6b9))
- **icons:** 🤩 add Code icon component ([d03515c](https://github.com/shawn-sandy/fpkit/commit/d03515cd950eaffd9646ca9d0dd1072e1964d603))
- **icons:** add alt prop to Add and ArrowLeft components for accessibility ([3e8da01](https://github.com/shawn-sandy/fpkit/commit/3e8da01b828bb9c0306c8adc24ece4de6ba433dd))
- **icons:** add ArrowRight icon component ([92d84a9](https://github.com/shawn-sandy/fpkit/commit/92d84a92293b303b9f121233ca2e2bc84ab1cc98))
- **icons:** add Chat icon component ([7c71b8d](https://github.com/shawn-sandy/fpkit/commit/7c71b8d0f38903c8b705a61ceba686000dcf565b))
- **icons:** add Copy icon component ([b17cb06](https://github.com/shawn-sandy/fpkit/commit/b17cb06a14ea1dd09044fe532350df0e416b6ce8))
- **icons:** add Icon component to fpkit library ([fe78536](https://github.com/shawn-sandy/fpkit/commit/fe7853660ea389057896f421f74e91c40151cb26))
- **icons:** add Left icon component ([d8bdeb8](https://github.com/shawn-sandy/fpkit/commit/d8bdeb8d583fecaf15513416f69bd7b1bc9988d2))
- **icons:** add new Home icon component ([a5cb78e](https://github.com/shawn-sandy/fpkit/commit/a5cb78ec75f4a24469f9aecdce3de146ab6a15fd))
- **icons:** add new icon.stories.tsx file to showcase the Icon component in Storybook ([1a53fb7](https://github.com/shawn-sandy/fpkit/commit/1a53fb725879c7444f60927bac2f4f56de93c338))
- **icons:** add new icons 'Add' and 'ArrowLeft' to the icon library ([2297a51](https://github.com/shawn-sandy/fpkit/commit/2297a511cff8d944e7e0bcb2d766264d824f3d8d))
- **icons:** add new icons 'Up' and 'Down' to the icon library ([5372249](https://github.com/shawn-sandy/fpkit/commit/53722493c0976987297217b51a16f0e5b2680ae2))
- **icons:** add new Minus icon component ([18253dd](https://github.com/shawn-sandy/fpkit/commit/18253ddd029382a41339a09179e55b3c8e802a4c))
- **icons:** add new Remove icon component ([7efc25a](https://github.com/shawn-sandy/fpkit/commit/7efc25a70563efe9e0bf08306d569c1d2d663297))
- **icons:** add new Right icon component ([13d5ffe](https://github.com/shawn-sandy/fpkit/commit/13d5ffe08a5d2de7c13cd79bfa1af837adf43625))
- **icons:** add Star component ([cd423d5](https://github.com/shawn-sandy/fpkit/commit/cd423d58eee24d906c37a4e6a89a2e56dcfb8149))
- **icons:** add User icon component ([6c5fa59](https://github.com/shawn-sandy/fpkit/commit/6c5fa592cbfcb717be645ea6f8bf84e5075b5e59))
- **img.tsx:** add support for customizing the display property of the image component using CSS variables to improve flexibility in styling ([70eb346](https://github.com/shawn-sandy/fpkit/commit/70eb346407e05992d3727ca3c7f4eb77cc58127e))
- **inputs.tsx:** rename disabled prop to isDisabled for better semantics and consistency ([7dac75e](https://github.com/shawn-sandy/fpkit/commit/7dac75e9c4b8f8facb0e0fddc1327f21f2a37ff7))
- **inputs:** add unit tests for Input component ([f26432c](https://github.com/shawn-sandy/fpkit/commit/f26432cf5e2399cee6064db580b86936f00fc022))
- **svg.tsx:** add Svg component to handle SVG rendering and improve code reusability ([08c51d3](https://github.com/shawn-sandy/fpkit/commit/08c51d375490abe96ce7008924a2aecea870447a))

### Reverts

- 🚑️ restore original stories after update ([7da04ff](https://github.com/shawn-sandy/fpkit/commit/7da04ffc20edb59823e7052366954bb34037b9e4))

## [0.3.1](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.3.0...@fpkit/react@0.3.1) (2023-06-19)

**Note:** Version bump only for package @fpkit/react

# [0.3.0](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.82...@fpkit/react@0.3.0) (2023-06-19)

**Note:** Version bump only for package @fpkit/react

## [0.2.82](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.81...@fpkit/react@0.2.82) (2023-06-18)

**Note:** Version bump only for package @fpkit/react

## [0.2.81](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.80...@fpkit/react@0.2.81) (2023-06-17)

**Note:** Version bump only for package @fpkit/react

## [0.2.80](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.79...@fpkit/react@0.2.80) (2023-06-17)

### Features

- **nav:** add Nav component and Nav story to FP.React library to provide a reusable navigation component for layout purposes ([f70ec4a](https://github.com/shawn-sandy/fpkit/commit/f70ec4a42d435516e1755b56dd11a1ee5fda35bf))

## [0.2.79](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.78...@fpkit/react@0.2.79) (2023-06-15)

**Note:** Version bump only for package @fpkit/react

## [0.2.78](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.76...@fpkit/react@0.2.78) (2023-06-13)

### Features

- **text:** add Span component to render a span element with FP styles and props. Add displayName to Span component. ([d7d754e](https://github.com/shawn-sandy/fpkit/commit/d7d754e66c35c4f822c96f3ed5d77bf7398eb0fe))

## [0.2.77](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.76...@fpkit/react@0.2.77) (2023-06-13)

### Features

- **text:** add Span component to render a span element with FP styles and props. Add displayName to Span component. ([d7d754e](https://github.com/shawn-sandy/fpkit/commit/d7d754e66c35c4f822c96f3ed5d77bf7398eb0fe))

## [0.2.76](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.75...@fpkit/react@0.2.76) (2023-06-13)

### Features

- **text.scss:** add text utility class to set text properties ([a0d93ea](https://github.com/shawn-sandy/fpkit/commit/a0d93ea4be39e4ada96f49c17e4ac8a2586b3eb0))

## [0.2.75](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.74...@fpkit/react@0.2.75) (2023-06-10)

### Features

- **popover:** add popover component and usePopover hook to display a popover on button hover ([55b168d](https://github.com/shawn-sandy/fpkit/commit/55b168d73aeefc1b43c36bbe23ccf7aa8d3fa4ba))
- **use-popover:** add usePopover hook ([f649e15](https://github.com/shawn-sandy/fpkit/commit/f649e159c4240041cea7b90af626889a5b05e5d2))

## [0.2.74](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.73...@fpkit/react@0.2.74) (2023-05-08)

**Note:** Version bump only for package @fpkit/react

## [0.2.73](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.72...@fpkit/react@0.2.73) (2023-04-24)

### Features

- 🤩 add decoding, fetchpriority to img component ([3021c99](https://github.com/shawn-sandy/fpkit/commit/3021c996938ce04cc9e875008c5eee7c53e8cf9a))

## [0.2.72](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.71...@fpkit/react@0.2.72) (2023-04-22)

### Features

- 🤩 add method to handle the onPointerDown event ([82d1877](https://github.com/shawn-sandy/fpkit/commit/82d18773b570d9ad261f1023bba6290be13010cc))
- modify href to be required ([b391e9b](https://github.com/shawn-sandy/fpkit/commit/b391e9bbeb2c0024bda2ce3e4ca21d59fcf14904))

## [0.2.71](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.70...@fpkit/react@0.2.71) (2023-04-22)

### Features

- 🏗️ add link component ([168d00c](https://github.com/shawn-sandy/fpkit/commit/168d00ca971c1b0e991b364f3995edcf2ec31dd8))
- 🏗️ add story for link component ([a65513f](https://github.com/shawn-sandy/fpkit/commit/a65513f90385eb31bf0b3a5c4a476ef5a92bb897))
- 🤩 first release link component ([899cc06](https://github.com/shawn-sandy/fpkit/commit/899cc0649f114b0048cab2617d8228c6c35ad55a))

## [0.2.70](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.69...@fpkit/react@0.2.70) (2023-04-21)

**Note:** Version bump only for package @fpkit/react

## [0.2.69](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.68...@fpkit/react@0.2.69) (2023-04-21)

**Note:** Version bump only for package @fpkit/react

## [0.2.68](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.67...@fpkit/react@0.2.68) (2023-04-10)

**Note:** Version bump only for package @fpkit/react

## [0.2.67](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.66...@fpkit/react@0.2.67) (2023-04-02)

### Features

- 🌟 update the list components ([8869fa4](https://github.com/shawn-sandy/fpkit/commit/8869fa4b5753585a8186a545d74aa7a877592107))

## [0.2.66](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.65...@fpkit/react@0.2.66) (2023-04-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.65](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.64...@fpkit/react@0.2.65) (2023-04-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.64](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.63...@fpkit/react@0.2.64) (2023-04-01)

**Note:** Version bump only for package @fpkit/react

## [0.2.63](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.62...@fpkit/react@0.2.63) (2023-03-27)

**Note:** Version bump only for package @fpkit/react

## [0.2.62](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.61...@fpkit/react@0.2.62) (2023-03-20)

### Features

- 🚧 add alias Tag to FP exports ([1954a92](https://github.com/shawn-sandy/fpkit/commit/1954a92c2b57bc74d755b6773999b20d31163f2b))

## [0.2.61](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.60...@fpkit/react@0.2.61) (2023-03-18)

**Note:** Version bump only for package @fpkit/react

## [0.2.60](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.59...@fpkit/react@0.2.60) (2023-03-11)

**Note:** Version bump only for package @fpkit/react

## [0.2.59](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.58...@fpkit/react@0.2.59) (2023-03-11)

**Note:** Version bump only for package @fpkit/react

## [0.2.58](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.57...@fpkit/react@0.2.58) (2023-03-09)

**Note:** Version bump only for package @fpkit/react

## [0.2.57](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.56...@fpkit/react@0.2.57) (2023-03-06)

**Note:** Version bump only for package @fpkit/react

## [0.2.56](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.55...@fpkit/react@0.2.56) (2023-02-26)

**Note:** Version bump only for package @fpkit/react

## [0.2.55](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.54...@fpkit/react@0.2.55) (2023-02-25)

**Note:** Version bump only for package @fpkit/react

## [0.2.54](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.53...@fpkit/react@0.2.54) (2023-02-23)

**Note:** Version bump only for package @fpkit/react

## [0.2.53](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.52...@fpkit/react@0.2.53) (2023-02-23)

**Note:** Version bump only for package @fpkit/react

## [0.2.52](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.51...@fpkit/react@0.2.52) (2023-02-22)

**Note:** Version bump only for package @fpkit/react

## [0.2.51](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.50...@fpkit/react@0.2.51) (2023-02-20)

### Features

- 🌟 update btn/turn off inline styles ([75d86a8](https://github.com/shawn-sandy/fpkit/commit/75d86a8ae5b31e68353d6f29e1b4d3ffa37cfbb8))
- 🚧 data-btn=pill, storyshots ([3cb669c](https://github.com/shawn-sandy/fpkit/commit/3cb669ca22670be181d4e63038cf7415f11f9aaa))
- 🚧 replace landmark w/ComponentProps ([bf535ae](https://github.com/shawn-sandy/fpkit/commit/bf535aec0e5d4d12aae88fb7cd7b910efc624f62))
- 🚧 replace landmark w/ComponentProps ([1f41d69](https://github.com/shawn-sandy/fpkit/commit/1f41d69a92d351866c44bc6cc44644eacad17239))
- update props on text/title components ([465aa67](https://github.com/shawn-sandy/fpkit/commit/465aa67f85b9a3c6303232382282db7a13b3c0da))

## [0.2.50](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.49...@fpkit/react@0.2.50) (2023-01-22)

### Bug Fixes

- 🚨 style props error ([8c5f173](https://github.com/shawn-sandy/fpkit/commit/8c5f173a69e70c69eeb1bd4a39bb8c59d587c9fc))

## [0.2.49](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.48...@fpkit/react@0.2.49) (2023-01-22)

### Bug Fixes

- 🚨 add default value for styles ([284401f](https://github.com/shawn-sandy/fpkit/commit/284401f90ef0d2f21a2bd2f6a0d53d6e0d103090))

## [0.2.48](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.47...@fpkit/react@0.2.48) (2023-01-22)

### Bug Fixes

- 🚨 remove getStyles replace fpStyles ([f85fdf7](https://github.com/shawn-sandy/fpkit/commit/f85fdf75404d3536821978233393b5c02f7814bf))

## [0.2.47](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.46...@fpkit/react@0.2.47) (2023-01-22)

### Features

- 🌟 fpStyles method that returns React.CssProperties ([a1a138b](https://github.com/shawn-sandy/fpkit/commit/a1a138b45a2f206ed6e3c9ae6fa2cbe54770033e))

## [0.2.46](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.45...@fpkit/react@0.2.46) (2023-01-21)

### Features

- 🌟 add styles props to text/landmarks components ([4ce8ab4](https://github.com/shawn-sandy/fpkit/commit/4ce8ab43241350728b89e010ed67e38e4a7d4bc6))

## [0.2.45](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.44...@fpkit/react@0.2.45) (2023-01-21)

**Note:** Version bump only for package @fpkit/react

## [0.2.44](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.43...@fpkit/react@0.2.44) (2023-01-21)

### Bug Fixes

- :lab_coat: error loading css files in storybook ([b6113ca](https://github.com/shawn-sandy/fpkit/commit/b6113ca75dbf4b4140dfef28d01278c0d0b2f9d1))
- ❌ error loading css files in storybook ([886f394](https://github.com/shawn-sandy/fpkit/commit/886f394adf5c5534e168ba74ce58e0fcf972bd35))

### Features

- add story for footer component ([14e8a7b](https://github.com/shawn-sandy/fpkit/commit/14e8a7b8eb23b0b16f115f47de314a747c3ad2bf))
- storybook global css, landmark, text update ([643535e](https://github.com/shawn-sandy/fpkit/commit/643535e0afc6012950e39f2894ba7e612e0bd905))

## [0.2.43](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.42...@fpkit/react@0.2.43) (2023-01-17)

**Note:** Version bump only for package @fpkit/react

## [0.2.42](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.41...@fpkit/react@0.2.42) (2023-01-17)

### Features

- 🌟 add text/title component to index.ts ([92c9dcc](https://github.com/shawn-sandy/fpkit/commit/92c9dcc9652df8be962506c8eea03e79ce5caa68))
- 📄 add text/title component to index.ts ([2b318f6](https://github.com/shawn-sandy/fpkit/commit/2b318f670e887ed1edd9859a96e9796b7e9eb545))

## [0.2.41](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.40...@fpkit/react@0.2.41) (2023-01-17)

### Bug Fixes

- ❌ add [@ts-ignore](https://github.com/ts-ignore) to landmarks/main.stories.tsx ([00aa221](https://github.com/shawn-sandy/fpkit/commit/00aa221a5d3043848772e698ddf4ae8e18064970))

### Features

- ♻️ update the padding of the dialog component ([e985563](https://github.com/shawn-sandy/fpkit/commit/e9855634cd9f64bfc4725dede6f2ac549dd603cb))
- ➕ add landmark component to modules ([5c4120b](https://github.com/shawn-sandy/fpkit/commit/5c4120b791338b978eec30d8476b3427bac84b66))
- 🏗️ update layout components/stories ([82335a4](https://github.com/shawn-sandy/fpkit/commit/82335a49c1259b8ca5a99fa56838449c75be02f3))
- 🚧 add landmarks and text components ([1c81f84](https://github.com/shawn-sandy/fpkit/commit/1c81f8433ea75e5f376058644012ff89c18c2c1e))
- 🚧 add text component ([66e76ca](https://github.com/shawn-sandy/fpkit/commit/66e76caf77d356fa157f90e9c1ffff9de2bc9c5b))
- 🚧 update several default props ([d05f9d4](https://github.com/shawn-sandy/fpkit/commit/d05f9d42fac0277153597fb7bbc68d6630cb8138))
- 🚧 update several default props ([22e96f2](https://github.com/shawn-sandy/fpkit/commit/22e96f2df5f56fad95134155aa3e0a66f483ac8d))
- render the styleObj as react.CSSProperties ([b9a995d](https://github.com/shawn-sandy/fpkit/commit/b9a995de301a7cd8fb0235d56288af604f4059a9))

## [0.2.40](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.39...@fpkit/react@0.2.40) (2023-01-09)

**Note:** Version bump only for package @fpkit/react

## [0.2.39](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.38...@fpkit/react@0.2.39) (2023-01-08)

**Note:** Version bump only for package @fpkit/react

## [0.2.38](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.37...@fpkit/react@0.2.38) (2023-01-07)

**Note:** Version bump only for package @fpkit/react

## [0.2.37](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.36...@fpkit/react@0.2.37) (2023-01-04)

**Note:** Version bump only for package @fpkit/react

## [0.2.36](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.35...@fpkit/react@0.2.36) (2023-01-03)

### Features

- new data-grid attribute w/cols-12 ([195b969](https://github.com/shawn-sandy/fpkit/commit/195b969eb316ed46716bc5ccd71ab87a427fe819))

## [0.2.35](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.34...@fpkit/react@0.2.35) (2023-01-03)

**Note:** Version bump only for package @fpkit/react

## [0.2.34](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.33...@fpkit/react@0.2.34) (2023-01-03)

**Note:** Version bump only for package @fpkit/react

## [0.2.33](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.32...@fpkit/react@0.2.33) (2023-01-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.32](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.31...@fpkit/react@0.2.32) (2023-01-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.31](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.30...@fpkit/react@0.2.31) (2023-01-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.30](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.29...@fpkit/react@0.2.30) (2023-01-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.29](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.28...@fpkit/react@0.2.29) (2023-01-02)

**Note:** Version bump only for package @fpkit/react

## [0.2.28](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.27...@fpkit/react@0.2.28) (2022-12-30)

**Note:** Version bump only for package @fpkit/react

## [0.2.27](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.26...@fpkit/react@0.2.27) (2022-12-30)

**Note:** Version bump only for package @fpkit/react

## [0.2.26](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.25...@fpkit/react@0.2.26) (2022-12-28)

**Note:** Version bump only for package @fpkit/react

## [0.2.25](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.24...@fpkit/react@0.2.25) (2022-12-05)

### Features

- 🌟 add onBlur on select ([ee97f19](https://github.com/shawn-sandy/fpkit/commit/ee97f19b94b5202a3aafba0d53570aaa2b340b48))
- 🌟 add story using CSF 3.0 ([51a9773](https://github.com/shawn-sandy/fpkit/commit/51a9773e8cc9a13682d5d176869b9bc51ae290dd))
- 🚧 add input select component ([ba0ff9f](https://github.com/shawn-sandy/fpkit/commit/ba0ff9f877ff4079915302bca3440649e3d09c59))
- 🚧 add play feature to CSF3 story demo ([8eaf4ac](https://github.com/shawn-sandy/fpkit/commit/8eaf4ac1cd470b77b2487257060f88caef9d05d2))
- 🚧 add play feature to CSF3 story demo ([f025055](https://github.com/shawn-sandy/fpkit/commit/f025055d08afa1657796142c1432530d278a788c))
- 🚧 add play feature to CSF3 story demo ([ef84d34](https://github.com/shawn-sandy/fpkit/commit/ef84d34c427262aaa5b67c341220cf707f2a3332))
- 🚧 add ref prop to the select component ([be1ba9f](https://github.com/shawn-sandy/fpkit/commit/be1ba9f11bb54b3fbe77743adcc903f392fe7897))
- 🚧 CSF3 button ([a870617](https://github.com/shawn-sandy/fpkit/commit/a870617c67e5438f3c5fa67f623820ba0961560b))
- 🚧 set textarea userEvent delay ([6b9ad09](https://github.com/shawn-sandy/fpkit/commit/6b9ad09defd8648c64680135ddf3a4b291b7126f))
- 🚧 set textarea userEvent delay ([8095151](https://github.com/shawn-sandy/fpkit/commit/80951514a0a14bfd24eddc4c86520b2896ea4681))
- 🚧 update input select component ([b88b3ad](https://github.com/shawn-sandy/fpkit/commit/b88b3ad253929d227d238e1e9d4f8552536d88ef))
- 🚧 update play feature to CSF3 story demo ([b45294e](https://github.com/shawn-sandy/fpkit/commit/b45294e45a4260023e735de6a072b5c0794cb2a9))
- 🚧 update the CSF stories ([4b084aa](https://github.com/shawn-sandy/fpkit/commit/4b084aae8c9b6e1bb4e350efb39090d08ae57f21))
- 🚧 update the CSF stories ([28efad8](https://github.com/shawn-sandy/fpkit/commit/28efad854789de2277d814764f0dd80ef7e65bd7))

## [0.2.24](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.23...@fpkit/react@0.2.24) (2022-11-30)

### Features

- 🚧 add from field wrapper ([d1e7056](https://github.com/shawn-sandy/fpkit/commit/d1e70565bfcde5d392002e0649a976d99bddbc4d))
- 🚧 add interaction to field story ([5fe4938](https://github.com/shawn-sandy/fpkit/commit/5fe4938753a1e131bd2b1edd666c7ebf72e7426a))
- 🚧 add props, events to textarea ([2efdbae](https://github.com/shawn-sandy/fpkit/commit/2efdbae110a5c33bb3335d3dfdf227689083c30e))
- 🚧 add readonly, disabled props ([c96a75f](https://github.com/shawn-sandy/fpkit/commit/c96a75f0e04e1ba26ee703a4b2791288eb07361f))
- 🚧 add story for textarea component ([9dcdf3e](https://github.com/shawn-sandy/fpkit/commit/9dcdf3eb402f25c3356d558bd3de8520b82a54a4))
- 🚧 add story interaction for textarea ([88b08f5](https://github.com/shawn-sandy/fpkit/commit/88b08f550ca34d7689b4a95c06c27c73a5e1af9c))
- 🚧 add story interaction for textarea ([d048a31](https://github.com/shawn-sandy/fpkit/commit/d048a31ce15b32b3d0a95040aaf4f36dbff8ed7b))
- 🚧 field element - input wrapper ([cbf87f9](https://github.com/shawn-sandy/fpkit/commit/cbf87f9f9fd5d1e0b9041f85c15b328dd47d914c))
- 🚧 update forms fields, input components ([7b6cdf6](https://github.com/shawn-sandy/fpkit/commit/7b6cdf6774847c2e27d2dcebed0c249ce86f586d))

## [0.2.23](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.22...@fpkit/react@0.2.23) (2022-11-29)

### Bug Fixes

- 🧰 change table proptype ([0e13bab](https://github.com/shawn-sandy/fpkit/commit/0e13babce7a3ffdb66133422e4ddaeeb85b642d2))

### Features

- ✨ add input component (alpha) ([f8f1424](https://github.com/shawn-sandy/fpkit/commit/f8f14247d34a8008c72200dcb66c6d112301f55c))
- ✨ extract modal to own component ([9edebc8](https://github.com/shawn-sandy/fpkit/commit/9edebc8aa1bbbf3fc0385a7716f250dfb6a0c653))
- 🌟 update table story title/caption ([c153550](https://github.com/shawn-sandy/fpkit/commit/c153550ec9d24014458685c575d56a9cf39af69d))
- 🏗️ first prototype of input elements ([205b91b](https://github.com/shawn-sandy/fpkit/commit/205b91bcd1dd6583d0806c87cdbefae0f40e48f1))
- 👷‍♂️add descriptions to props ([5720224](https://github.com/shawn-sandy/fpkit/commit/57202241e327f472cb23d8ea9ce213cdf7c5c62a))
- 👷‍♂️wrap modal content in section ([3b6b2eb](https://github.com/shawn-sandy/fpkit/commit/3b6b2eb33a7ad09f0a23ee761e5da8edb72c5375))
- 💃 add data-style for table-wrapper ([e7d055e](https://github.com/shawn-sandy/fpkit/commit/e7d055e98745b943c73326eb096b016eae10cb77))
- 🧑‍🏫 demo set up for nextra ([17a54b6](https://github.com/shawn-sandy/fpkit/commit/17a54b63b0bde6e3e031a5238a76dd2aec477275))
- 🚆 beta input component ([8667d71](https://github.com/shawn-sandy/fpkit/commit/8667d71fb5cf99b47c342c96371f9889e966a0df))
- 🚧 add components for rendering table ([7b7ba64](https://github.com/shawn-sandy/fpkit/commit/7b7ba647df592d288b8e8d2a97cbe0e2c0c95065))
- 🚧 add description to modal props ([6a8f794](https://github.com/shawn-sandy/fpkit/commit/6a8f7947833d3484bc9d0c06c18768df9168634d))
- 🚧 add dialog example to the modal component ([1ee966a](https://github.com/shawn-sandy/fpkit/commit/1ee966ae73b53d311b1c9b0e6c974167d60456b6))
- 🚧 add input component w/story ([f9e4d79](https://github.com/shawn-sandy/fpkit/commit/f9e4d79a03b08983054915da9a14fae5bef2b46f))
- 🚧 add inputChange, inputBlur events props ([4ae193f](https://github.com/shawn-sandy/fpkit/commit/4ae193fb725d80c0f9d2431af545c6dd94399f00))
- 🚧 add react child props header/footer ([8c853fd](https://github.com/shawn-sandy/fpkit/commit/8c853fdf87c24cfd88a6db5d9d72d4041c60746e))
- 🚧 add showOnOpen prop to dialog ([4261e1a](https://github.com/shawn-sandy/fpkit/commit/4261e1ad1ac6d763e9c3dd361d32a70248dbc497))
- 🚧 add table-elements/table component ([6b148bb](https://github.com/shawn-sandy/fpkit/commit/6b148bbcc4ec0b9ac15800d0cdcb96985e4f5bd8))
- 🚧 rename story title sidebar arrangement ([839d6d0](https://github.com/shawn-sandy/fpkit/commit/839d6d014353a5d9938066d9135032cbfc79a5cb))
- 🚧 set type as required ([60f1931](https://github.com/shawn-sandy/fpkit/commit/60f193169b5e72d5bd8d4db932dc54dcbbafeb26))
- 🚧 table component ([011774e](https://github.com/shawn-sandy/fpkit/commit/011774e9218300f384e44b883a966fd37005bb54))
- 🚧 update modal interaction test ([8a9f2eb](https://github.com/shawn-sandy/fpkit/commit/8a9f2eb5623eee7bd6dde4ad7030f001f4c14229))
- 🚧 update the table components ([6eac088](https://github.com/shawn-sandy/fpkit/commit/6eac08849cddfb939385406ed72137c95ba9ae1a))
- table render components ([058e7e2](https://github.com/shawn-sandy/fpkit/commit/058e7e2189c41b27f96a6bc7ea42a36caeeb5be6))

## [0.2.22](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.21...@fpkit/react@0.2.22) (2022-11-24)

### Bug Fixes

- 🚨 typo ..props ([3f90dc5](https://github.com/shawn-sandy/fpkit/commit/3f90dc585aba24dca60100d8383fe0e517884a34))

### Features

- 🌟 add support for rest props on modal/dialog ([a7b27ba](https://github.com/shawn-sandy/fpkit/commit/a7b27ba4f2ffa9851b5c9681473c2acaa7842b92))

## [0.2.21](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.20...@fpkit/react@0.2.21) (2022-11-24)

### Bug Fixes

- 🐛 tsc/lint fix errors ([411df9a](https://github.com/shawn-sandy/fpkit/commit/411df9a5e86739430f36ff8aa7f072d166dd6b34))

## [0.2.20](https://github.com/shawn-sandy/fpkit/compare/@fpkit/react@0.2.19...@fpkit/react@0.2.20) (2022-11-24)

### Bug Fixes

- 🐛 tsc/lint fix errors ([8f439ea](https://github.com/shawn-sandy/fpkit/commit/8f439eaa357726ec78000cd3b2f889faf108f5ff))
- 🐛 tsc/lint fix errors ([bfdf0d1](https://github.com/shawn-sandy/fpkit/commit/bfdf0d1b4131bc50e214c607c883ce9171a727e9))

### Features

- 🚧 modal/dialog components ([1f7366b](https://github.com/shawn-sandy/fpkit/commit/1f7366beca0ffddc9033b8f7719cbcdd641424ed))
- 🚧 stub out the modal component function ([8473097](https://github.com/shawn-sandy/fpkit/commit/84730971e9646fd24fc6af669242890a374c7ded))

## 0.2.19 (2022-11-23)

### Bug Fixes

- 🧯 stop img-error looping ([17deb21](https://github.com/shawn-sandy/fpkit/commit/17deb210ce8819a4fa311c97713f45fc4c21aaf7))
- storybook sidebar navigation ([f39bcc8](https://github.com/shawn-sandy/fpkit/commit/f39bcc855912e1b9d3100405885935e74e7e7dbc))

### Features

- :recycle: set children pram to be optional type ([d56c336](https://github.com/shawn-sandy/fpkit/commit/d56c336cf5b1519ed1e5c0b74689bab5e6687589))
- ✨ make span conditional add default span tag ([c4c961a](https://github.com/shawn-sandy/fpkit/commit/c4c961a3e402a6343771a0415ac04328227fc6ac))
- ✨ set renderstyles to stur by default ([9a466ce](https://github.com/shawn-sandy/fpkit/commit/9a466ce583f87e9bccdd8ba11203b961542faa4a))
- ❇️ add a card component to fpkit ([e6238f8](https://github.com/shawn-sandy/fpkit/commit/e6238f860ab2458f83c00971d3e098c2e541ec58))
- 🌟 add display name ([c387ea7](https://github.com/shawn-sandy/fpkit/commit/c387ea7ca29853bb53678629ca2a1e3061ee37da))
- 🌟 add image onError ([b011d26](https://github.com/shawn-sandy/fpkit/commit/b011d26512cf1ac352a75a37697536628ed92620))
- 🌟 add img component ([ce857d4](https://github.com/shawn-sandy/fpkit/commit/ce857d4628ea6e0e06ff1a4d59bbed036542d687))
- 🌟 breadcrumb component ([36685e3](https://github.com/shawn-sandy/fpkit/commit/36685e3b7cda73fd8ed4aa5966ad2eab2aac3062))
- 🌟 update the breadcrumb listItems ([68ef1b5](https://github.com/shawn-sandy/fpkit/commit/68ef1b5aa9f653d0009ba0992745543d0dddc7fe))
- 🏗️ add button component ([8bfdf87](https://github.com/shawn-sandy/fpkit/commit/8bfdf87ce5f8e84bd4e3c51efebcf6a8664f4e16))
- 👆 update disabled button styles ([efad4b2](https://github.com/shawn-sandy/fpkit/commit/efad4b2a61010142974dc5178a079e394e33cec3))
- 📝 storybooks updates ([86b3662](https://github.com/shawn-sandy/fpkit/commit/86b3662224e7f259ba4452622d6566c42a647963))
- 🪄 set the placeholder imgWidth to imgWidth ([6843943](https://github.com/shawn-sandy/fpkit/commit/6843943b10dab3e231ec58e7640894225c94da45))
- 🚧 ad badge component fpkit/fp ([c8b6b7b](https://github.com/shawn-sandy/fpkit/commit/c8b6b7b11951ce8586505a01b2658b79187e3828))
- 🚧 ad badge component pf fpkit/fp ([f17fd2d](https://github.com/shawn-sandy/fpkit/commit/f17fd2d61cf65cd6150e7cda77debe880cca266a))
- 🚧 add base breadcrumb component ([de421d6](https://github.com/shawn-sandy/fpkit/commit/de421d658d7c291aaea0bd8fe5ef71ab20519d3c))
- 🚧 add new component ([fcb8001](https://github.com/shawn-sandy/fpkit/commit/fcb800111d2a92b063c26e8049c51c4d2e503887))
- 🚧 base dropdown component ([902d945](https://github.com/shawn-sandy/fpkit/commit/902d945fd9100d5bdc266b36edad248b1a7e542f))
- 🚧 base dropdown component ([aff9e81](https://github.com/shawn-sandy/fpkit/commit/aff9e810866f16ff4d716032c8d30f0703671abc))
- 🚧 breadcrumb component story ([0a750ee](https://github.com/shawn-sandy/fpkit/commit/0a750eebcf87c0aa7ad8bd9aa594c841d35ad692))
- 🚧 scaffold dropdown-details component ([3233a88](https://github.com/shawn-sandy/fpkit/commit/3233a8832085b8bcbee1d6fc97b1f1f3294b2a32))
- 🚧 update card props values ([e852d27](https://github.com/shawn-sandy/fpkit/commit/e852d2715a8597c132ccbe49c7b17615cf51d8db))
- 🚧 update dropdown component ([80d5006](https://github.com/shawn-sandy/fpkit/commit/80d5006607064cd80b35253ba70f706aa9bc5c91))
- 🚧 update dropdown component ([b349385](https://github.com/shawn-sandy/fpkit/commit/b349385ec82bc08f5c164720074e69cc2323fa43))
- add a box component ([b445b5a](https://github.com/shawn-sandy/fpkit/commit/b445b5a5920b5fc892a758089b5ad325cec5bb40))
- Add content elements to storybook ([07fd928](https://github.com/shawn-sandy/fpkit/commit/07fd928585609e77fa0835ec356525da695fda2a))
- add onLoad event to the image component ([84cdb1e](https://github.com/shawn-sandy/fpkit/commit/84cdb1e15f153b93edaf16f1cf41210166d8fbad))
- merge ComponentProps into ImgProps ([1a0ce9d](https://github.com/shawn-sandy/fpkit/commit/1a0ce9d61c785de8588c5cb7766eb241120e35d1))

### Reverts

- 🔥 remove image value (default) ([4358210](https://github.com/shawn-sandy/fpkit/commit/435821040e56ede76c0e8c9d689471834698b508))

## [0.2.18](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.17...@fpkit/fp@0.2.18) (2022-11-22)

### Bug Fixes

- storybook sidebar navigation ([f39bcc8](https://github.com/shawn-sandy/fpkit/commit/f39bcc855912e1b9d3100405885935e74e7e7dbc))

### Features

- Add content elements to storybook ([07fd928](https://github.com/shawn-sandy/fpkit/commit/07fd928585609e77fa0835ec356525da695fda2a))

## [0.2.17](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.16...@fpkit/fp@0.2.17) (2022-11-20)

### Features

- 🌟 breadcrumb component ([36685e3](https://github.com/shawn-sandy/fpkit/commit/36685e3b7cda73fd8ed4aa5966ad2eab2aac3062))
- 🌟 update the breadcrumb listItems ([68ef1b5](https://github.com/shawn-sandy/fpkit/commit/68ef1b5aa9f653d0009ba0992745543d0dddc7fe))
- 🪄 set the placeholder imgWidth to imgWidth ([6843943](https://github.com/shawn-sandy/fpkit/commit/6843943b10dab3e231ec58e7640894225c94da45))
- 🚧 add base breadcrumb component ([de421d6](https://github.com/shawn-sandy/fpkit/commit/de421d658d7c291aaea0bd8fe5ef71ab20519d3c))
- 🚧 breadcrumb component story ([0a750ee](https://github.com/shawn-sandy/fpkit/commit/0a750eebcf87c0aa7ad8bd9aa594c841d35ad692))

## [0.2.16](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.15...@fpkit/fp@0.2.16) (2022-11-19)

**Note:** Version bump only for package @fpkit/fp

## [0.2.15](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.14...@fpkit/fp@0.2.15) (2022-11-19)

**Note:** Version bump only for package @fpkit/fp

## [0.2.14](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.13...@fpkit/fp@0.2.14) (2022-11-19)

### Features

- 🌟 add display name ([c387ea7](https://github.com/shawn-sandy/fpkit/commit/c387ea7ca29853bb53678629ca2a1e3061ee37da))

## [0.2.13](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.12...@fpkit/fp@0.2.13) (2022-11-19)

### Reverts

- 🔥 remove image value (default) ([4358210](https://github.com/shawn-sandy/fpkit/commit/435821040e56ede76c0e8c9d689471834698b508))

## [0.2.12](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.11...@fpkit/fp@0.2.12) (2022-11-18)

### Features

- :recycle: set children pram to be optional type ([d56c336](https://github.com/shawn-sandy/fpkit/commit/d56c336cf5b1519ed1e5c0b74689bab5e6687589))
- 🌟 add image onError ([b011d26](https://github.com/shawn-sandy/fpkit/commit/b011d26512cf1ac352a75a37697536628ed92620))
- 🌟 add img component ([ce857d4](https://github.com/shawn-sandy/fpkit/commit/ce857d4628ea6e0e06ff1a4d59bbed036542d687))
- add onLoad event to the image component ([84cdb1e](https://github.com/shawn-sandy/fpkit/commit/84cdb1e15f153b93edaf16f1cf41210166d8fbad))
- merge ComponentProps into ImgProps ([1a0ce9d](https://github.com/shawn-sandy/fpkit/commit/1a0ce9d61c785de8588c5cb7766eb241120e35d1))

## [0.2.11](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.10...@fpkit/fp@0.2.11) (2022-11-18)

### Features

- 👆 update disabled button styles ([efad4b2](https://github.com/shawn-sandy/fpkit/commit/efad4b2a61010142974dc5178a079e394e33cec3))

## [0.2.10](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.9...@fpkit/fp@0.2.10) (2022-11-18)

**Note:** Version bump only for package @fpkit/fp

## [0.2.9](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.8...@fpkit/fp@0.2.9) (2022-11-05)

**Note:** Version bump only for package @fpkit/fp

## [0.2.8](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.7...@fpkit/fp@0.2.8) (2022-10-20)

### Features

- 🚧 update dropdown component ([80d5006](https://github.com/shawn-sandy/fpkit/commit/80d5006607064cd80b35253ba70f706aa9bc5c91))

## [0.2.7](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.6...@fpkit/fp@0.2.7) (2022-10-14)

### Features

- 🚧 update dropdown component ([b349385](https://github.com/shawn-sandy/fpkit/commit/b349385ec82bc08f5c164720074e69cc2323fa43))

## [0.2.6](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.5...@fpkit/fp@0.2.6) (2022-10-14)

### Features

- 🚧 update card props values ([e852d27](https://github.com/shawn-sandy/fpkit/commit/e852d2715a8597c132ccbe49c7b17615cf51d8db))

## [0.2.5](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.4...@fpkit/fp@0.2.5) (2022-10-12)

**Note:** Version bump only for package @fpkit/fp

## [0.2.4](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.3...@fpkit/fp@0.2.4) (2022-10-12)

### Features

- add a box component ([b445b5a](https://github.com/shawn-sandy/fpkit/commit/b445b5a5920b5fc892a758089b5ad325cec5bb40))

## [0.2.3](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.2...@fpkit/fp@0.2.3) (2022-10-09)

### Features

- 📝 storybooks updates ([86b3662](https://github.com/shawn-sandy/fpkit/commit/86b3662224e7f259ba4452622d6566c42a647963))

## [0.2.2](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.1...@fpkit/fp@0.2.2) (2022-10-02)

**Note:** Version bump only for package @fpkit/fp

## [0.2.1](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.2.0...@fpkit/fp@0.2.1) (2022-10-02)

### Features

- 🚧 base dropdown component ([902d945](https://github.com/shawn-sandy/fpkit/commit/902d945fd9100d5bdc266b36edad248b1a7e542f))
- 🚧 base dropdown component ([aff9e81](https://github.com/shawn-sandy/fpkit/commit/aff9e810866f16ff4d716032c8d30f0703671abc))
- 🚧 scaffold dropdown-details component ([3233a88](https://github.com/shawn-sandy/fpkit/commit/3233a8832085b8bcbee1d6fc97b1f1f3294b2a32))

# [0.2.0](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.1.1...@fpkit/fp@0.2.0) (2022-09-30)

### Features

- ❇️ add a card component to fpkit ([e6238f8](https://github.com/shawn-sandy/fpkit/commit/e6238f860ab2458f83c00971d3e098c2e541ec58))

## [0.1.1](https://github.com/shawn-sandy/fpkit/compare/@fpkit/fp@0.1.0...@fpkit/fp@0.1.1) (2022-09-30)

### Features

- 🏗️ add button component ([8bfdf87](https://github.com/shawn-sandy/fpkit/commit/8bfdf87ce5f8e84bd4e3c51efebcf6a8664f4e16))

# [0.1.0](https://github.com/shawn-sandy/react-vite/compare/@fpkit/fp@0.0.5...@fpkit/fp@0.1.0) (2022-09-29)

### Features

- ✨ make span conditional add default span tag ([c4c961a](https://github.com/shawn-sandy/react-vite/commit/c4c961a3e402a6343771a0415ac04328227fc6ac))

## [0.0.5](https://github.com/shawn-sandy/react-vite/compare/@fpkit/fp@0.0.4...@fpkit/fp@0.0.5) (2022-09-29)

### Features

- ✨ set renderstyles to true by default ([9a466ce](https://github.com/shawn-sandy/react-vite/commit/9a466ce583f87e9bccdd8ba11203b961542faa4a))

## [0.0.4](https://github.com/shawn-sandy/react-vite/compare/@fpkit/fp@0.0.3...@fpkit/fp@0.0.4) (2022-09-29)

**Note:** Version bump only for package @fpkit/fp

## [0.0.3](https://github.com/shawn-sandy/react-vite/compare/@fpkit/fp@0.0.2...@fpkit/fp@0.0.3) (2022-09-29)

**Note:** Version bump only for package @fpkit/fp

## 0.0.2 (2022-09-29)

### Features

- 🚧 ad badge component fpkit/fp ([c8b6b7b](https://github.com/shawn-sandy/react-vite/commit/c8b6b7b11951ce8586505a01b2658b79187e3828))
- 🚧 ad badge component pf fpkit/fp ([f17fd2d](https://github.com/shawn-sandy/react-vite/commit/f17fd2d61cf65cd6150e7cda77debe880cca266a))
- 🚧 add new component ([fcb8001](https://github.com/shawn-sandy/react-vite/commit/fcb800111d2a92b063c26e8049c51c4d2e503887))
