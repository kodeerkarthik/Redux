import * as ActionTypes from './types';
export function increaseA(c){

    return function(dispatch){
        dispatch({type:'UP_A',payloadC:c});
    }
}
export function increaseB(d){
    return function(dispatch){
        dispatch({type:'UP_B',payloadD:d});
    }
}
export function increaseC(a){
    return function(dispatch){
        dispatch({type:'UP_C',payloadA:a});
    }
}
export function increaseD(b){
    return function(dispatch){
        dispatch({type:'UP_D',payloadB:b});
    }
}