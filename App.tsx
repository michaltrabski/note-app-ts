import { Box, Button, Grid } from '@mui/material';
import moment = require('moment');
import * as React from 'react';
import MyCard from './components/card';
import { getNotes } from './data/notes';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HomeIcon from '@mui/icons-material/Home';

import './style.css';
import IconButton from '@mui/material/IconButton';
import FullScreenDialog from './components/modal';

export const DATE_FORMAT = 'DD.MM.YYYY';

export const DEFAULT_VALUES = {
  daysLimit: 10,
  pastDaysLimit: 0,
};

export interface Note {
  id: string;
  dayStr: string;
  monthStr: string;
  yearStr: string;
  hourStr: string;
  minuteStr: string;
  title: string;
  description: string;
  isDone: boolean;
  repeatEveryYear: boolean;
  repeatEveryMonth: boolean;
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

  const [selectedDay, setSelectedDay] = React.useState<Day | null>(null);
  const [selectedNote, setSelectedNote] = React.useState<Note | null>(null);
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const updateNotesData = (newNote: Note) => {
    setNotesData((prevNotesData) =>
      prevNotesData.map((note) => (note.id === newNote.id ? newNote : note))
    );
  };

  const handleDialogOpen = (selectedDay: Day, selectedNote: Note) => {
    console.log(11111111, selectedDay, selectedNote);
    setIsOpenDialog(true);
    setSelectedDay(selectedDay);
    setSelectedNote(selectedNote);
  };

  const handleDialogClose = () => {
    setIsOpenDialog(false);
    setSelectedDay(null);
    setSelectedNote(null);
  };

  const days: Day[] = Array.from(
    { length: daysLimit + pastDaysLimit },
    (_, nr) => {
      const date = moment().add(nr - pastDaysLimit, 'day');
      const notes = notesData.filter((note) => {
        if (note.dayStr === date.format('DD') && note.repeatEveryMonth) {
          return true;
        }

        if (
          note.dayStr === date.format('DD') &&
          note.monthStr === date.format('MM') &&
          note.repeatEveryYear
        ) {
          return true;
        }

        return (
          note.dayStr === date.format('DD') &&
          note.monthStr === date.format('MM') &&
          note.yearStr === date.format('YYYY')
        );
      });

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
        return (
          <MyCard
            day={day}
            handleDialogOpen={handleDialogOpen}
            updateNotesData={updateNotesData}
          />
        );
      })}

      <Grid container justifyContent="end" sx={{ marginBottom: 2 }}>
        <IconButton
          color="primary"
          aria-label="ArrowDownwardIcon"
          onClick={() => setDaysLimit((prevLimit) => prevLimit + 30)}
        >
          <ArrowDownwardIcon />
        </IconButton>

        <IconButton
          color="primary"
          aria-label="HomeIcon"
          onClick={() => reset(3)}
        >
          <HomeIcon />
        </IconButton>
      </Grid>

      {/* {JSON.stringify(days.slice(0, 1))} */}

      <FullScreenDialog
        selectedDay={selectedDay}
        selectedNote={selectedNote}
        isOpen={isOpenDialog}
        handleClose={handleDialogClose}
      />
    </div>
  );
}
