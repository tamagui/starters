import Tamagui from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProviderProps } from '@my/ui'

export function Provider({ children, ...rest }: TamaguiProviderProps) {
  return (
    <Tamagui.Provider disableInjectCSS defaultTheme="light" {...rest}>
      <NavigationProvider>{children}</NavigationProvider>
    </Tamagui.Provider>
  )
}
