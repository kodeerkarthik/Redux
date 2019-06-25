


import *as ActionTypes from './types';

export function handleClick(){
    return function(dispatch){
        dispatch({type:"CLICK"});
    }
}