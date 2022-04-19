import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Paragraph, YStack } from 'tamagui'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
      <TextLink href="/">👈 Go Home</TextLink>
    </YStack>
  )
}
