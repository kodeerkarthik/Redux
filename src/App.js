import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Age from './Age';
import Age1 from './Age1';
import Event from './Event';
import Task1 from './task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './task3/Task3';
import Task4 from './Task4/Task4';
import AgeUpDown from './AgeUpDown';
import Form from './Form';

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
          <Route exact path='/task3' component={Task3}></Route>
          <Route exact path='/form' component={Form}></Route>
          <Route exact path='/task4' component={Task4}></Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
