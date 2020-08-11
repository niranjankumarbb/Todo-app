import React from 'react'
import { connect } from 'react-redux'
import {startRegisterUser} from '../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username : '',
               email : '',
            password : ''
        }
    }

    handleChange =(e)=> {
      this.setState({
          [e.target.name] : e.target.value
      })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData= {
                  username: this.state.username,
                     email: this.state.email,
                  password: this.state.password    
        }
        const redirect = ()=> {
            this.props.history.push('/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <h1> Register</h1>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <label htmlFor='username'>username</label>
                <input typr='text' id='username' name='username' value={this.state.username}  onChange={this.handleChange} className="form-control"/>
                <br/><br/><br/>       
                </div>

                <label htmlFor='email'>email</label>
                <input typr='text' id='email' name='email' value={this.state.email}  onChange={this.handleChange} className="form-control"/>
                <br/><br/><br/>
                {/* <div className="form-group">
                        
                 </div> */}

                <div className="form-group">
                <label htmlFor='password'>password</label>
                <input typr='text' id='password' name='password' value={this.state.password}  onChange={this.handleChange} className="form-control"/>
                <br/><br/><br/>
                </div>

                <div className="form-group">
                <input type='submit' value='submit' className="form-control"/> 
                </div>        
               </form> 
            </div>
        )
    }
}

export default connect()(Register)