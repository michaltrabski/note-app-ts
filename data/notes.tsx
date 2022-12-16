import { Note } from '../App';

export const getNotes = (): Note[] => [
  {
    id: 'noteid1',
    dayStr: '17',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '15',
    title: 'Task 1',
    description: 'Lorem ipsum dolor1 ...',
    isDone: false,
    repeatEveryMonth: false,
    repeatEveryYear: false,
  },
  {
    id: 'noteid2',
    dayStr: '17',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '00',
    title: 'Task 2',
    description: 'Lorem ipsum dolor2 ...',
    isDone: false,
    repeatEveryMonth: true,
    repeatEveryYear: false,
  },{
    id: 'noteid1234',
    dayStr: '17',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '00',
    title: 'Task 3',
    description: 'Lorem ipsum dolor3 ...',
    isDone: false,
    repeatEveryMonth: true,
    repeatEveryYear: false,
  },
  {
    id: 'noteid3',
    dayStr: '24',
    monthStr: '12',
    yearStr: '2022',
    hourStr: '11',
    minuteStr: '00',
    title: 'Wigilia :)',
    description: 'Lorem ipsum dolor...',
    isDone: false,
    repeatEveryMonth: false,
    repeatEveryYear: false,
  },
  {
    id: 'noteid4',
    dayStr: '10',
    monthStr: '01',
    yearStr: '2023',
    hourStr: '11',
    minuteStr: '00',
    title: 'Kupić powerbank',
    description:
      'https://allegro.pl/oferta/power-bank-15000mah-3xusb-usb-c-micro-latarka-led-12870907038',
    isDone: false,
    repeatEveryMonth: false,
    repeatEveryYear: false,
  },
];
