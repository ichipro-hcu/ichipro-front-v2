'use client';

import { useMediaQuery } from '@mantine/hooks';
import { AppShell, Group, Text, useMantineTheme } from '@mantine/core';
import { BookmarkPage } from '@/components/Templates/BookmarkPage';
import { BottomNavBar } from '@/components/Organisms/BottomNavBar/BottomNavBar';

export default function HomePage() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <AppShell header={{ height: 60 }} footer={isMobile ? { height: 60 } : undefined} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Text>いちぷろ</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <BookmarkPage />
      </AppShell.Main>

      <AppShell.Footer>
        <BottomNavBar />
      </AppShell.Footer>
    </AppShell>
  );
}
