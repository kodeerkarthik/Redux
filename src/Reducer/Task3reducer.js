
import * as ActionTypes from '../Action/types';

const intialState = {
//    name:'',
//    password:'',
   message:''
    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.CLICK:{
            return{...state,message:'LOGIN SUCESSFULLY'}
        }
     
        default: 
            return state;
    }
}


