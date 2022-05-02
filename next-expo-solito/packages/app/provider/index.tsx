import Tamagui from '../tamagui.config'
import { Drawer } from '@tamagui/drawer'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Tamagui.Provider defaultTheme="light">
      <NavigationProvider>
        <Drawer.Provider>{children}</Drawer.Provider>
      </NavigationProvider>
    </Tamagui.Provider>
  )
}
