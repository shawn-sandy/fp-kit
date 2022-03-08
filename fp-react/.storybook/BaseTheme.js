// .storybook/FirstPaint.js

import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'FirstPaint',
  brandUrl: '/',
  brandImage: 'https://res.cloudinary.com/dqjs95c7n/image/upload/v1644774792/fp-brand-rgb-sm_v1rtjz.svg',
  // UI settings
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'transparent',
  colorSecondary: 'dimgray',
  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'sliver',
  barSelectedColor: 'dimgray',
  barBg: 'transparent',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4
})
