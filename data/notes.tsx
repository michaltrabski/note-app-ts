import { Note } from '../App';

export const getNotes = (): Note[] => [
  {
    dayStr: '13',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '0',
    title: 'Task 1',
    description: 'Lorem ipsum dolor...',
    done: false,
    repeatEveryMonth: false,
    repeatEveryYear: false,
  },
  {
    dayStr: '13',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '0',
    title: 'Wigilia :)',
    description: 'Lorem ipsum dolor...',
    done: false,
    repeatEveryMonth: false,
    repeatEveryYear: false,
  },
];
