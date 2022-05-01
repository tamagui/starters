import { Drawer } from '@tamagui/drawer'
import { ChevronDown, ChevronUp } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Anchor, Button, H1, Paragraph, XStack, YStack } from 'tamagui'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack debug="verbose" f={1} jc="center" ai="center" p="$4" space>
      <H1 ta="center">Welcome to Tamagui.</H1>
      <YStack maw={600}>
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

export default function DrawerDemo() {
  const [show, setShow] = useState(false)
  return (
    <>
        <Button
          size="$6"
          icon={show ? ChevronDown : ChevronUp}
          circular
          onPress={() => setShow((x) => !x)}
        />
        <Drawer open={show} onChange={setShow}>
          <YStack ai="center" jc="center" p="$6" space>
            <Paragraph selectable={false}>Hello.</Paragraph>
            <Button
              size="$6"
              icon={show ? ChevronDown : ChevronUp}
              circular
              onPress={() => setShow((x) => !x)}
            />
          </YStack>
        </Drawer>
    </>
  )
}
