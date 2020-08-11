import React from 'react'
import { connect } from 'react-redux'
import {startLoginUser} from '../actions/userAction'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email: '',
            password : ''
        }
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()
        const formData={
            email : this.state.email,
            password : this.state.password
        }
        const redirect = ()=>{
           return this.props.history.push('/')
        }
         this.props.dispatch(startLoginUser(formData, redirect))
    }

    render(){
        console.log(this.state)
        return(
            <div>
               <h1> Login</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                    <label htmlor='email'>email</label>
                    <input type ='text' id='email' name='email' value={this.state.email} onChange={this.handleChange} className="form-control"/>
                    <br/><br/><br/>
                    </div>

                    <div className="form-group">
                    <label htmlor='password'>password</label>
                    <input type ='text' id='password' name='password' value={this.state.password} onChange={this.handleChange} className="form-control"/>
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
export default connect()(Login)