import *as ActionTypes from './types';

export function display(){
    return function(dispatch){
        dispatch({type:"DISPLAY"});
    }
}
export function handleChange(){
    return function(dispatch){
        dispatch({type:"SEND"});
    }
}