import moment = require('moment');
import * as React from 'react';
import './style.css';

export default function App() {
  const notesData = [
    {
      date: '08/12/2022',
      time: null,
      title: 'Some example task.',
      description: 'Lorem ipsum dolor...',
    },
  ];

  const days = Array.from({ length: 10 }, (_, nr) => {
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

      <div>
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
      </div>

      {JSON.stringify(days)}
    </div>
  );
}
