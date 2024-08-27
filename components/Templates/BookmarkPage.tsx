import { Accordion } from '@mantine/core';

import Clock from '@/components/Organisms/Clock/Clock';
import { BookmarkCardList } from '@/components/Organisms/BookmarkCard/BookmarkCard';

export function BookmarkPage(): JSX.Element {
  const mainBookmark = [
    {
      name: '広島市立大学',
      url: 'https://www.hiroshima-cu.ac.jp/',
      icon: 'https://www.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: 'いちぽる',
      url: 'https://ichipol.hiroshima-cu.ac.jp/uniprove_pt/UnLoginAction/',
      icon: 'https://ichipol.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: 'WebClass',
      url: 'https://webclass.ipc.hiroshima-cu.ac.jp/',
      icons: 'https://webclass.ipc.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: 'UNIVERSAL PASSPORT',
      url: 'https://unipa.hiroshima-cu.ac.jp/uprx/',
      icon: 'https://unipa.hiroshima-cu.ac.jp/favicon.ico',
    },
  ];

  const communicationToolsBookmark = [
    {
      name: 'Outlook',
      url: 'https://outlook.office.com/',
      icons: 'https://outlook.office.com/favicon.ico',
    },
    {
      name: 'Teams',
      url: 'https://teams.microsoft.com/',
      icons: 'https://teams.microsoft.com/favicon.ico',
    },
    {
      name: 'Zoom',
      url: 'https://zoom.us/',
      icons: 'https://zoom.us/favicon.ico',
    },
  ];

  const buildingBookmark = [
    {
      name: '情報処理センター',
      url: 'https://www.ipc.hiroshima-cu.ac.jp/',
      icons: 'http://www.ipc.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: '図書館',
      url: 'https://www.lib.hiroshima-cu.ac.jp/',
      icons: 'http://www.lib.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: '図書館 (OPAC)',
      url: 'https://opac.lib.hiroshima-cu.ac.jp/',
      icons: 'https://opac.lib.hiroshima-cu.ac.jp/favicon.ico',
    },
    {
      name: '知トラ',
      url: 'https://triathlon.hiroshima-cu.ac.jp/',
      icons: 'https://triathlon.hiroshima-cu.ac.jp/favicon.ico',
    },
  ];

  const accordions = [
    {
      emoji: '🏫',
      value: '広島市立大学',
      bookmarkList: mainBookmark,
    },
    {
      emoji: '💬',
      value: 'コミュニケーションツール',
      bookmarkList: communicationToolsBookmark,
    },
    {
      emoji: '🏢',
      value: '施設・サービス',
      bookmarkList: buildingBookmark,
    },
  ];

  const accordionsResult = accordions.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>
        <BookmarkCardList bookmarkList={item.bookmarkList} />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Clock />
      <Accordion mt={8}>{accordionsResult}</Accordion>
    </>
  );
}
