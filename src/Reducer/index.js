import {combineReducers} from 'redux';
import Task2reducer from './Task2reducer';
import Task2reducer1 from './Task2reducer1';
import Task2reducer2 from './Task2reducer2';
import Task2reducer3 from './Task2reducer3';
import Task3reducer from './Task3reducer';
import Task4reducer from './Task4reducer';
import AgeUpDownReducers from './AgeUpDownReducers';
export default combineReducers ({
    AgeUpDownReducers, 
    Task2reducer,
    Task2reducer1,
    Task2reducer2,
    Task2reducer3,
    Task3reducer,
    Task4reducer,
});