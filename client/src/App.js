import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import {connect } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Task from './components/Task'
import {startLogout} from './actions/userAction'
 
function App(props){

  const handleClick= ()=>{
    props.dispatch(startLogout())
  }
  console.log(localStorage.getItem('tokenTaskbox '))
  
     return (
      <BrowserRouter>
      <div className="container">
        {(Object.keys(props.user).length>0)? (
           <div>
            <Link to='/' className="btn btn-link">Home</Link> |
            <Link to='tasks' className="btn btn-link">Tasks</Link> |
            <Link to='#' onClick={handleClick} className="btn btn-link">Logout</Link>

            <Route path='/' component={Home} exact={true}/>
            <Route path='/tasks' component={Task} exact={true}/>
           </div>        
         ):(
            <div >
            <Link to='/' className="btn btn-link">Home</Link> |
            <Link to='/login' className="btn btn-link">Login</Link> |
            <Link to='/register' className="btn btn-link">Register</Link>
 
            <Switch> 
            <Route path='/' component={Home} exact={true}/>
            <Route path='/login' component={Login}  />
            <Route path='/register' component={Register}  />
            </Switch>
          </div>
           )}    
          </div>
        </BrowserRouter>
    )
}
const mapStateToProps = (state)=>{
  return {
        user : state.user 
  }
}
export default connect(mapStateToProps)(App)