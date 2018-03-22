import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const Calendar = (props) => {
  let shows = (props && (props.shows instanceof Array)) ? props.shows.map((item) => ({
    title: item.Movie.MovieName,
    start: moment(item.ShowDateTime).toDate(),
    end: moment(item.ShowDateTime).add(5, 'hours').toDate(),
    desc: `Theatre: ${item.Theatre.TheatreName}
        Auditorium: ${item.Auditorium.AuditoriumName}`
  })
  ) : [];
  return (
    <div className="calendar-container">
      hello from calendar
      <BigCalendar
        events={shows}
        step={15}
        timeslots={8}
        defaultView="week"
        defaultDate={moment().toDate()}
      />
    </div>
  );
};

export default Calendar;
