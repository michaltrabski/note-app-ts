import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DATE_FORMAT, Day } from '../App';
import { Grid, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import moment = require('moment');
import { blue } from '@mui/material/colors';

interface MyCardProps {
  day: Day;
  handleDialogOpen: () => void;
}

export default function MyCard(props: MyCardProps) {
  const { day, handleDialogOpen } = props;
  const { dataName, date, notes, notesCount } = day;

  const str = JSON.stringify(props.day);

  const isToday = moment().format(DATE_FORMAT) === date.format(DATE_FORMAT);

  return (
    <Card
      sx={{
        minWidth: 275,
        marginBottom: 2,
        outline: `${isToday ? 2 : 0}px solid ${blue[500]}`,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* {dataName}, */}
          {date.format(DATE_FORMAT)} <u onClick={handleDialogOpen}>OPEN</u>
        </Typography>

        {notes.map((note) => (
          <Grid
            container
            spacing={2}
            rowSpacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5" component="div">
                {note.title}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="" aria-label="toogle done status">
                <DoneIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
}
