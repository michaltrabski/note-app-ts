import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DATE_FORMAT, Day, Note } from '../App';
import { Grid, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import moment = require('moment');
import { blue, grey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

interface MyCardProps {
  day: Day;
  handleDialogOpen: (selectedDay: Day, selecterNote: Note) => void;
  updateNotesData: (newNote: Note) => void;
}

export default function MyCard(props: MyCardProps) {
  const { day, handleDialogOpen, updateNotesData } = props;
  const { dataName, date, notes, notesCount } = day;

  const str = JSON.stringify(props.day);

  const isToday = moment().format(DATE_FORMAT) === date.format(DATE_FORMAT);

  const toogleIsDone = (noteId: string) => {
    const newNote = notes.find((note) => note.id === noteId);

    if (newNote) {
      newNote.isDone = !newNote.isDone;
      updateNotesData(newNote);
    }
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        marginBottom: date.format('e') === '0' ? 6 : 2,
        outline: isToday ? `2px solid ${blue[500]}` : `1px solid ${grey[500]}`,
        opacity: isToday || notesCount ? 1 : 1,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date.format('dddd')},{date.format(DATE_FORMAT)}{' '}
          </Typography>
          <IconButton onClick={() => {}} aria-label="Add new note">
            <AddIcon />
          </IconButton>
        </Box>

        {notes.map((note) => (
          <Box
            sx={{
              opacity: note.isDone ? 0.2 : 1,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              onClick={() => handleDialogOpen(day, note)}
              sx={{
                cursor: 'pointer',
                textDecoration: note.isDone ? 'line-through' : 'none',
              }}
              variant="h5"
              component="div"
            >
            {note.hourStr}.{note.minuteStr} {note.title}
            </Typography>
            <IconButton
              onClick={() => toogleIsDone(note.id)}
              aria-label="toogle note isDone status"
            >
              <DoneIcon />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
