import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      body: 'Avenir, sans-serif', 
    },
    colors: {
      black100: '#090909',
      white100: '#F4F4F4',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    mobile: '(min-width: 480px)',
  },

});