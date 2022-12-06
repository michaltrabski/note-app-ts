import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Day } from '../App';

interface MyCardProps {
  day: Day;
}

export default function MyCard(props: MyCardProps) {
  const { day } = props;
  const str = JSON.stringify(day);

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {day.dataName}
        </Typography>
        {/* <Typography variant="h5" component="div">
          asd
        </Typography> */}
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
