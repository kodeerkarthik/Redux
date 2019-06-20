import * as ActionTypes from '../Action/types';

const initialState={
    c:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_C:{
            return{...state, c:action.payloadA+state.c}
        }
        default:
            return state;
    }
}