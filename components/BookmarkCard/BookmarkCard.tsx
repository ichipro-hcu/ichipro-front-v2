import { Avatar, Card, Center, Text, Flex } from '@mantine/core';

export function BookmarkCard(
  props: { name?: string | undefined; url?: string | undefined; icon?: string | undefined } = {
    name: 'タイトル',
    url: 'https://example.com',
    icon: '',
  }
) {
  return (
    <Card
      component="a"
      href={props.url}
      shadow="sm"
      padding="md"
      style={{ textAlign: 'center' }}
      w={180}
    >
      <Card.Section>
        <Center h={100}>
          <Avatar variant="filled" radius="md" size="xl" src={props.icon} />
        </Center>
        <Text size="md" ta="center" style={{ color: '#ccc' }}>
          {props.name}
        </Text>
      </Card.Section>
    </Card>
  );
}

export function BookmarkCardList(
  props: { bookmarkList: Array<{ name?: string; url?: string; icon?: string }> } = {
    bookmarkList: [],
  }
) {
  const bookmarkList = props.bookmarkList.map(({ name, url, icon }) => (
    <BookmarkCard name={name} url={url} icon={icon} />
  ));
  return (
    <Center>
      <Flex
        mih="50%"
        bg="rgba(0, 0, 0, .3)"
        gap="xs"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ alignItems: 'center' }}
      >
        {bookmarkList}
      </Flex>
    </Center>
  );
}
