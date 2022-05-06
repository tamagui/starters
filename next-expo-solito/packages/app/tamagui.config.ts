import { shorthands } from '@tamagui/shorthands'
import { color, radius, size, space, themes, zIndex } from '@tamagui/theme-base'
import { createTamagui, createTokens } from '@my/ui'
import { createInterFont } from '@tamagui/font-inter'

import { animations } from './constants/animations'

const interFont = createInterFont()

const config = createTamagui({
  animations,
  defaultTheme: 'light',
  shorthands,
  fonts: {
    title: interFont,
    body: interFont,
  },
  themes,
  tokens: createTokens({
    size,
    space,
    zIndex,
    color,
    radius,
  }),
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

export type Conf = typeof config

declare module '@my/ui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
