import { TimeTableCell, TimeTableDisplay } from './TimeTable';
import sampleData from './sample.json';

export default {
  title: 'Organisms/TimeTable',
};

export const Cell = () => (
  <TimeTableCell name="コンピュータ基礎" room="講605" color="blue" isVisible />
);
export const Table = () => <TimeTableDisplay courseData={sampleData} />;
