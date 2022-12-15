import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { DATE_FORMAT, Day, Note } from '../App';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import DialogContent from '@mui/material/DialogContent/DialogContent';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  selectedDay: Day | null;
  selectedNote: Note | null;
  isOpen: boolean;
  handleClose: () => void;
}

export default function FullScreenDialog(props: Props) {
  const { selectedDay, selectedNote, isOpen, handleClose } = props;

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {selectedDay?.date.format(DATE_FORMAT)}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        {/* <pre>{JSON.stringify(selectedDay, null, 2)}</pre>
        --------------------
        <pre>{JSON.stringify(selectedNote, null, 2)}</pre> */}
        <List>
          <ListItem>
            <ListItemText
              primary={selectedNote?.title}
              secondary={selectedNote?.description}
            />
          </ListItem>

          <Divider />
        </List>

        <DialogContent>
          Ustaw czas wykonania zadania:
          <Grid container spacing={2}>
            <Grid item>
              Godzina
              {[...Array(24).keys()].map((h) => (
                <Button
                  sx={{ display: 'block', marginBottom: 1 }}
                  variant="outlined"
                  size="small"
                >
                  {h}
                </Button>
              ))}
            </Grid>
            <Grid item>
              Minuta
              {[...Array(12).keys()].map((m) => (
                <Button
                  sx={{ display: 'block', marginBottom: 1 }}
                  variant="outlined"
                  size="small"
                >
                  {m * 5}
                </Button>
              ))}
            </Grid>
          </Grid>
        </DialogContent>
        {/* <List sx={{ display: 'none' }}>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </List> */}
      </Dialog>
    </div>
  );
}
