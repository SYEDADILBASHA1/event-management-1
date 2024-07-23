// src/App.jsx

import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import MyCalendar from './components/Calendar';
import Navbar from './components/Navbar';
import { UserReducer, initialState } from './reducers/UserReducer';

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/create-event" component={CreateEvent} />
            <Route path="/events" component={Events} />
            <Route path="/Calendar" component={MyCalendar} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
