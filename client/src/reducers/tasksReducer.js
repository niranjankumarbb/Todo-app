const initialStateValue = []
 const tasksReducer = (state=initialStateValue,action)=>{
    switch(action.type){
        case 'SET_TASKS' : {
            return [].concat(action.payload)
        }

          default : {
            return [...state]
        }
    }
}
export default tasksReducer