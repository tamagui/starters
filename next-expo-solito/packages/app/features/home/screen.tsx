import { TextLink } from 'solito/link'
import { Anchor, H1, Paragraph, XStack, YStack } from 'tamagui'

export function HomeScreen() {
  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      p="$4"
      space
    >
      <H1 ta="center">Welcome to Tamagui.</H1>
      <YStack maw={600}>
        <Paragraph ta="center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Paragraph>
        <Paragraph ta="center">
          Tamagui is made by{' '}
          <Anchor
            href="https://twitter.com/natebirdman"
            target="_blank"
            rel="noreferrer"
          >
            Nate Wienert
          </Anchor>
          .
        </Paragraph>
      </YStack>
      <XStack>
        <TextLink
          href="/user/nate"
        >
          Link to user
        </TextLink>
      </XStack>
    </YStack>
  )
}
