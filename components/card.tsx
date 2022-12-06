import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DATE_FORMAT, Day } from '../App';
import { ButtonGroup, Grid } from '@mui/material';

interface MyCardProps {
  day: Day;
}

export default function MyCard(props: MyCardProps) {
  const { dataName, date, notes, notesCount } = props.day;

  const str = JSON.stringify(props.day);

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dataName} ({date.format(DATE_FORMAT)})
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
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button>yes</Button>
                <Button>no</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        ))}

        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {str}
        </Typography> */}
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
