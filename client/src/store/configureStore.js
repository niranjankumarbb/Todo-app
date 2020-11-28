 import redux from 'redux'
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import tasksReducer from '../reducers/tasksReducer'
import usersReducer from '../reducers/usersReducer'

const configureStore =()=>{
    const store =  createStore(combineReducers({
        tasks : tasksReducer,
         user : usersReducer
   }),applyMiddleware(thunk))
   return store
}
export default configureStore
