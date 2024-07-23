import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const Events = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events', {
          headers: { Authorization: `Bearer ${state.token}` },
        });
        dispatch({ type: 'SET_EVENTS', payload: res.data });
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    if (state.token) {
      fetchEvents();
    }
  }, [dispatch, state.token]);

  const handleRSVP = async (eventId) => {
    try {
      await axios.post(`/api/events/${eventId}/rsvp`, {}, {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      dispatch({ type: 'RSVP', payload: { eventId } });
    } catch (error) {
      console.error('RSVP error', error);
    }
  };

  return (
    <div>
      <h2>Sports Events</h2>
      {state.events.map(event => (
        <div key={event.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{event.name}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
          <button onClick={() => handleRSVP(event.id)}>RSVP</button>
        </div>
      ))}
    </div>
  );
};

export default Events;
