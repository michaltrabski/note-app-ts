import moment = require('moment');
import * as React from 'react';
import './style.css';

export default function App() {
  const days = Array.from({ length: 10 }, (_, nr) => {
    return {
      nr,
      date: moment().add(nr, 'day').format('DD/MM/YYYY'),
      dataName: moment().add(nr, 'day').fromNow(),
      notes: [],
    };
  });

  return (
    <div>
      <h1>note app</h1>
      {JSON.stringify(days)}

      <div>
        {days.map((day) => (
          <div>
            <p>
              {day.date} {day.dataName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
