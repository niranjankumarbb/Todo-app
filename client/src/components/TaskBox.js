import  React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {startRemoveTask, startPutTask} from '../actions/taskAction'
 
class TaskBox extends React.Component{
    constructor(){
        super()
     this.state= {
         status : false,
    searchTitle : '',
     searchTasks: []
     }
    }

    handleSearch =(e)=>{
        this.setState({
            searchTitle : e.target.value
        }, ()=>{
            this.setState({
                searchTasks : this.props.tasks.filter(task=>{
                    let temp = ''
                    for(let ch of task.title){
                        temp=temp + ch
                         if(temp== this.state.searchTitle)
                         return task
                    } 
                })
            })
        })
    }

    handleChange = (id)=>{
      this.setState((prevState)=>{
          return {
              status : !prevState.status
          }
      }, ()=>{
          const data={
              completed : this.state.status
          }
          this.props.dispatch(startPutTask(id, data))
      })
    }

    handleClick = (id)=>{
        const confirmed= window.confirm('Are you sure?')
        if(confirmed){
            this.props.dispatch(startRemoveTask(id))
        }
    }

   render(){
     return (
       <div align='left'>           
           <h1> TaskBox</h1>
           <br/>
           <input type='text' value={this.state.search} onChange={this.handleSearch} placeholder='search title'/>
           <br/><br/>
           {this.props.tasks.length>0? (
               <div>
                <table border='1'>
                 <thead>                                 
                    <tr>
                     <th><input type='checkbox' /></th>
                     <th>Title</th>
                     <th>Created On</th>
                     <th>Due Date</th>
                     <th>Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                        {
                           ( this.state.searchTasks.length>0 ? (this.state.searchTasks):(this.props.tasks)).map((task,i)=>{
                                 return (
                                     <tr key={i}>
                                            <td><input type='checkbox'  checked={task.completed} onChange={()=>{
                                                   this.handleChange(task._id)}}/></td>
                                            <td>{task.title}</td>
                                            <td>{moment(task.createdAt).format('LL')}</td>
                                            <td>{task.dueDate && moment(task.dueDate).format('LL')}</td>
                                            <td> <button onClick={()=>{
                                                 this.handleClick(task._id)}} className="btn btn-danger">remove</button></td>
                                     </tr>
                                  )
                             }) 
                         }
                  </tbody>
             </table>
           </div>
           ):(
               <h2>Loading..... </h2>
           )}             
       </div>
    )
   }
}

const mapStateToProps= (state)=>{
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps)(TaskBox)
