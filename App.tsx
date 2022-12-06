import { Box, Button } from '@mui/material';
import moment = require('moment');
import * as React from 'react';
import MyCard from './components/card';
import { getNotes } from './notes';
import './style.css';

export const DATE_FORMAT = 'DD/MM/YYYY';

interface Note {
  date: string;
  time: string;
  title: string;
  description: string;
  done: boolean;
}

export interface Day {
  nr: number;
  date: moment.Moment;
  dataName: string;
  notesCount: number;
  notes: Note[];
}

export default function App() {
  const [daysLimit, setDaysLimit] = React.useState(10);
  const [notesData, setNotesData] = React.useState(() => getNotes());

  const days: Day[] = Array.from({ length: daysLimit }, (_, nr) => {
    const date = moment().add(nr, 'day');
    const notes = notesData.filter(
      (note) => note.date === date.format(DATE_FORMAT)
    );

    return {
      nr,
      date: date,
      dataName: date.fromNow(),
      notesCount: notes.length,
      notes,
    };
  });

  return (
    <div>
      <h1>note app</h1>
      {days.map((day) => {
        return <MyCard day={day} />;
      })}
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={() => setDaysLimit((prevLimit) => prevLimit + 10)}
      >
        Load more days...
      </Button>
      działa1
      {/* {JSON.stringify(days.slice(0, 1))} */}
    </div>
  );
}
