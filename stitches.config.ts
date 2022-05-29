import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    fonts: {
      body: 'Avenir, sans-serif',
    },
    colors: {
      black100: '#090909',
      white100: '#F4F4F4',
    },
  },
  media: {
    mobile: '(min-width: 480px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
})
