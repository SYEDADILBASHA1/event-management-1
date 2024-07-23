import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { state } = useContext(UserContext);

  const events = state.events.map(event => ({
    title: event.name,
    start: new Date(event.startDate),
    end: new Date(event.endDate),
  }));

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
};

export default MyCalendar;