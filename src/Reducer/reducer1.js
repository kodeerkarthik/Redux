const initialState={
    a:1,
    b:1,
    c:1,
    d:1
};
const reducer = (state=initialState,action1)=>{
    const newState={...state};
    switch(action1.type){
        case 'INC_A': newState.a=state.a+state.c;
        break;
        case 'INC_B':newState.b=state.b+state.d;
        break;
        case 'INC_C': newState.c=state.a+state.c;
        break;
        case 'INC_D':newState.d=state.b+state.d;
        break;
    }
    return newState;
}
export default reducer;