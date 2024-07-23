// src/reducers/UserReducer.js

export const initialState = {
    token: null,
    events: [],
  };
  
  export const UserReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.payload.token,
        };
      case 'SET_EVENTS':
        return {
          ...state,
          events: action.payload,
        };
      case 'RSVP':
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload.eventId
              ? { ...event, rsvped: true }
              : event
          ),
        };
      default:
        return state;
    }
  };
  