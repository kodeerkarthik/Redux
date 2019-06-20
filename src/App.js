import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Age from './Age';
import Age1 from './Age1';
import Event from './Event';
import Task1 from './task1/Task1';
import Task2 from './Task2/Task2';
import AgeUpDown from './AgeUpDown';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path='/one' component={Age}></Route>
          <Route exact path='/two' component={Age1}></Route>
          <Route exact path='/event' component={Event}></Route>
          <Route exact path='/task1' component={Task1}></Route>
          <Route exact path='/combine' component={AgeUpDown}></Route>
          <Route exact path='/task2' component={Task2}></Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
