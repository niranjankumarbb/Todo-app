import React from 'react'
import { connect } from 'react-redux'
import {startPostTask, startGetTasks} from '../actions/taskAction'
import TaskBox from './TaskBox'
import './style.css'

class Task extends React.Component{
   state = {
       title : '',
 description : '',
 completed   : false,
 dueDate     : undefined
 }

   componentDidMount(){
        //if(this.props.tasks.length == 0){
           this.props.dispatch(startGetTasks())
      // }
   }

   handleChange = (e)=>{ 
       this.setState({
        [e.target.name] : e.target.value
       })
   }

   handleComplete=(e)=>{
       this.setState(prevState=>{
           return{
               completed : !prevState.completed
           }
       })
   }

   handleSubmit = (e)=>{
       e.preventDefault()
       const formData = {
              title : this.state.title,
        description : this.state.description,
        completed   : this.state.completed,
        dueDate     : this.state.dueDate
       }
       this.props.dispatch(startPostTask(formData))
       this.setState({
        title : '',
        description : '',
        completed   : false,
        dueDate     : undefined
       })       
   }

   render(){
        return (
           <div >
               <TaskBox/>
               <div className= 'tasks'>
               <form onSubmit ={this.handleSubmit}>
                   <div className="form-group">
                   <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='title'   />
                   <br/> <br/>
                   </div>

                   <div className="form-group">
                   <textarea  name='description' value = {this.state.description} onChange={this.handleChange} placeholder='description' />
                   <br/> <br/>
                   </div>

                   <div className="form-group">
                   <input type='checkbox' id='completed' name='completed' value={this.state.completed} onChange={this.handleComplete} />
                   <label htmlFor='completed'>Completed</label>
                   <br/> <br/>
                   </div>

                   <div className="form-group">
                    <input type='Date' id='dueDate'  name='dueDate' value={this.state.dueDate} onChange={this.handleChange} />
                   <br/> <br/>
                   </div>

                   <div className="form-group">
                   <input type='submit' value='Add Task' className="btn btn-success"/> 
                   </div> 
               </form>
              </div>
           </div>
       )
   }
}

const mapStateToProps= (state)=>{
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps)(Task)
