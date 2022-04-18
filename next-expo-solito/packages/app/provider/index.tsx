import Tamagui from '../tamagui.config'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Tamagui.Provider>{children}</Tamagui.Provider>
    </NavigationProvider>
  )
}
