import * as ActionTypes from '../Action/types';

const initialState={
    b:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_B:{
            return{...state, b:action.payloadD+state.b}
        }
        default:
            return state;
    }
}
