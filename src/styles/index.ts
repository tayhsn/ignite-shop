import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      title: '#E1E1E6',
      text: '#C4C4CC',
      elements: '#202024',
      background: '#121214',
      brandLight: '#00B37E',
      brandPrincipal: '#00875F',
    },
  },
})
