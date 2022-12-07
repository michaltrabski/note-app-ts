import { Box, Button, Grid } from '@mui/material';
import moment = require('moment');
import * as React from 'react';
import MyCard from './components/card';
import { getNotes } from './data/notes';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HomeIcon from '@mui/icons-material/Home';

import './style.css';
import IconButton from '@mui/material/IconButton';

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DEFAULT_VALUES = {
  daysLimit: 10,
  pastDaysLimit: 0,
};
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
  const [daysLimit, setDaysLimit] = React.useState(DEFAULT_VALUES.daysLimit);
  const [pastDaysLimit, setPastDaysLimit] = React.useState(
    DEFAULT_VALUES.pastDaysLimit
  );
  const [notesData, setNotesData] = React.useState(() => getNotes());

  const days: Day[] = Array.from(
    { length: daysLimit + pastDaysLimit },
    (_, nr) => {
      const date = moment().add(nr - pastDaysLimit, 'day');
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
    }
  );

  const reset = (daysLimit: number) => {
    setDaysLimit(daysLimit);
    setPastDaysLimit(DEFAULT_VALUES.pastDaysLimit);
  };

  return (
    <div>
      <h1>note app</h1>

      <Grid container justifyContent="end" sx={{ marginBottom: 2 }}>
        <IconButton
          color="primary"
          aria-label="ArrowUpwardIcon"
          onClick={() => setPastDaysLimit((prevLimit) => prevLimit + 3)}
        >
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="ArrowUpwardIcon"
          onClick={() => reset(DEFAULT_VALUES.daysLimit)}
        >
          <HomeIcon />
        </IconButton>
      </Grid>

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

      <Grid container justifyContent="end" sx={{ marginBottom: 2 }}>
        <IconButton
          color="primary"
          aria-label="ArrowUpwardIcon"
          onClick={() => setPastDaysLimit((prevLimit) => prevLimit + 3)}
        >
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="ArrowUpwardIcon"
          onClick={() => reset(3)}
        >
          <HomeIcon />
        </IconButton>
      </Grid>

      {/* {JSON.stringify(days.slice(0, 1))} */}
    </div>
  );
}
