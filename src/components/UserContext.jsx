import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  token: null,
  events: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    case 'SET_EVENTS':
      return { ...state, events: action.payload };
    case 'RSVP':
      return {
        ...state,
        events: state.events.map(event => 
          event.id === action.payload.eventId ? { ...event, rsvp: true } : event
        ),
      };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;