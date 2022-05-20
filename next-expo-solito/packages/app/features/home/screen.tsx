// debug
import { Drawer } from '@tamagui/drawer'
import { ChevronDown, ChevronUp } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { useLink } from 'solito/link'
import { Anchor, Button, H1, Paragraph, XStack, YStack } from '@my/ui'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$2" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here is a basic starter to show you how you can navigate from one screen to another. This
          screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Paragraph ta="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank" rel="noreferrer">
            Nate Wienert
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <DrawerDemo />
    </YStack>
  )
}

function DrawerDemo() {
  const [show, setShow] = useState(false)
  const dimensions = useWindowDimensions()
  return (
    <>
      <Button
        size="$6"
        icon={show ? ChevronDown : ChevronUp}
        circular
        onPress={() => setShow((x) => !x)}
      />
      <Drawer open={show} onChangeOpen={setShow}>
        <Drawer.Frame h={dimensions.height * 0.8} ai="center" jc="center" p="$6" space>
          <Paragraph selectable={false}>Hello.</Paragraph>
          <Button
            size="$6"
            icon={show ? ChevronDown : ChevronUp}
            circular
            onPress={() => setShow((x) => !x)}
          />
        </Drawer.Frame>
      </Drawer>
    </>
  )
}
