import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Paragraph, styled, Theme, XStack, YStack } from 'tamagui'
import Tamagui from './tamagui.config'

const MyStack = styled(XStack, {
  flexDirection: 'row',
})

export default function App() {
  return (
    <Tamagui.Provider defaultTheme="light">
      <MyStack flex={1} bc="$bg" ai="center" jc="center" space="$7">
        <Theme name="light">
          <TestComponent />
        </Theme>
        <Theme name="pink">
          <TestComponent />
        </Theme>
        <Theme name="dark">
          <TestComponent />
          <Theme name="pink">
            <TestComponent />
          </Theme>
        </Theme>
      </MyStack>
      <StatusBar style="auto" />
    </Tamagui.Provider>
  )
}

const TestComponent = () => {
  return (
    <YStack bc="$bg2" space ai="center" jc="center">
      <YStack width={100} height={100} backgroundColor="$bg" />
      <Paragraph $sm={{ color: 'red' }} size="$6">
        Hello
      </Paragraph>
      <Button>Hello</Button>
    </YStack>
  )
}
