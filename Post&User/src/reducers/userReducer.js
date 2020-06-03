export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return [...state,action.payload];  //...state gives new state with payload appended oherwise return old 
                                                   //state and redux will not update store
        default:
            return state;
    }
}