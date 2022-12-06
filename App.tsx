import moment = require('moment');
import * as React from 'react';
import MyCard from './components/card';
import './style.css';

interface Note {
  date: string;
  time: string;
  title: string;
  description: string;
}

export interface Day {
  nr: number;
  date: moment.Moment;
  dataName: string;
  notesCount: number;
  notes: Note[];
}

export default function App() {
  const notesData: Note[] = [
    {
      date: '08/12/2022',
      time: '',
      title: 'Some example task.',
      description: 'Lorem ipsum dolor...',
    },
  ];

  const days: Day[] = Array.from({ length: 10 }, (_, nr) => {
    const date = moment().add(nr, 'day');
    const notes = notesData.filter(
      (note) => note.date === date.format('DD/MM/YYYY')
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

      {/* <div>
        {days.map((day) => (
          <div style={{ border: '1px solid grey', marginBottom: '1rem' }}>
            <p>
              {day.date.format('dddd')} {day.dataName}
            </p>
            <div>
              {day.notes.map((note) => (
                <p>{note.title}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {JSON.stringify(days.slice(0, 1))}
    </div>
  );
}
