import { Group, Stack, Text } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons-react';

export function BottomNavBar(): JSX.Element {
  return (
    <Group grow gap={0}>
      <Stack h={60} align="center" justify="center" gap={0}>
        <IconCalendarEvent />
        <Text size="xs">Events</Text>
      </Stack>
      <Stack h={60} align="center" justify="center" gap={0}>
        <IconCalendarEvent />
        <Text size="xs">Events</Text>
      </Stack>
      <Stack h={60} align="center" justify="center" gap={0}>
        <IconCalendarEvent />
        <Text size="xs">Events</Text>
      </Stack>
    </Group>
  );
}
