import { BookmarkCard, BookmarkCardList } from './BookmarkCard';

export default {
  title: 'Bookmark/BookmarkCard',
  component: BookmarkCard,
};

const bookmark = [
  { name: 'Google', url: 'https://google.com', icon: 'https://www.google.com/favicon.ico' },
  { name: 'Yahoo!', url: 'https://yahoo.co.jp', icon: 'https://www.yahoo.co.jp/favicon.ico' },
  { name: 'Bing', url: 'https://bing.com', icon: 'https://www.bing.com/favicon.ico' },
];

export const Usage = () => <BookmarkCard name="Example" url="https://example.com" />;
export const UsageList = () => <BookmarkCardList bookmarkList={bookmark} />;
