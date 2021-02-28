import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetTasks} from './actions/taskAction'
import {startGetUser} from './actions/userAction'

const store= configureStore()

store.subscribe(()=>{
    console.log('store value', store.getState())
})

 if(localStorage.getItem('tokenTaskbox')){
    store.dispatch(startGetUser())
}
store.dispatch(startGetTasks())

const ele = (
    <Provider store={store}>
        <App/>
    </Provider>    
)

ReactDOM.render(ele, document.getElementById('root'))