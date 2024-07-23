// src/components/CreateEvent.jsx

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const CreateEvent = () => {
  const { state, dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/events', { name, description }, {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      dispatch({ type: 'SET_EVENTS', payload: res.data });
    } catch (error) {
      console.error('Event creation error', error);
    }
  };

  return (
    <div className="container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
