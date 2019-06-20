import * as ActionTypes from '../Action/types';

const initialState={
    d:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_D:{
            return{...state, d:action.payloadB+state.d}
        }
        default:
            return state;
    }
}