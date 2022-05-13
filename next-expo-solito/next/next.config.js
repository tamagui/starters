/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const { withTamagui } = require('@tamagui/next-plugin')
// const { withExpo } = require('@expo/next-adapter')
const withTM = require('next-transpile-modules')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'

const disableExtraction = process.env.NODE_ENV === 'development'

const transform = withPlugins([
  withTM([
    'solito',
    'app',
    'react-native-web',
    '@expo/next-adapter',
    'expo-linking',
    'expo-constants',
    'expo-modules-core',
  ]),
  // [withExpo, { projectRoot: __dirname }],
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction,
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'Animated',
      'AnimatedFlatList',
    ],
  }),
])

module.exports = function (name, { defaultConfig }) {
  defaultConfig.webpack5 = true
  // defaultConfig.experimental.reactRoot = 'concurrent'
  defaultConfig.typescript.ignoreBuildErrors = true
  return transform(name, { defaultConfig })
}
