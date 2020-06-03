export default (state =[],action)=>{  //state array thus new array can be mutated (not state)
    if (action.type=== 'FETCH_POST'){
        return action.payload;
    }
    return state
}