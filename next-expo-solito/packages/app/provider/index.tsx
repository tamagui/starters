import Tamagui from '../tamagui.config'
import { Drawer } from '@tamagui/drawer'
import { NavigationProvider } from './navigation'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Tamagui.Provider defaultTheme="dark">
      <Drawer.Provider>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </Drawer.Provider>
    </Tamagui.Provider>
  )
}
