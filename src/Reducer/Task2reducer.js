import * as ActionTypes from '../Action/types';


const initialState={
    a:1
};


export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_A:{
            return{...state, a:state.a+action.payloadC}
        }
        
        default:
            return state;
    }
}
