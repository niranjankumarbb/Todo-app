import axios from 'axios'

export const startPostTask= (formData)=>{
    console.log('entered startPostTask')
    return (dispatch)=>{
        axios.post('/tasks',formData, {
            headers : {
                'Authorization' : localStorage.getItem('tokenTaskbox')
            }
        })
        .then((response)=> {
            console.log('startPostTask',response.data)
             alert('Successfully posted task to server')
             if(response.data){
                 dispatch(startGetTasks())
             }else {
                 alert('error')
             }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetTasks = ()=>{
    return (dispatch)=>{
    axios.get('/tasks', {
        headers : {
            'Authorization' : localStorage.getItem('tokenTaskbox')
        }
    })
    .then((response)=>{
          if(response.data){
           dispatch(setTasks(response.data))
        }else {
            alert('error while receiving data')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
  }
}

export const startRemoveTask = (id)=>{
    return (dispatch)=> {
        axios.delete(`/tasks/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenTaskbox')
            }
        })
        .then((response)=>{
            console.log('startRemoveTask', response.data)
             if(Object.keys(response.data).length>0){
                alert('successfully removed from the db')
               dispatch(startGetTasks())
             }else {
                 console.log('data not found')
             }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const startPutTask=(id, data)=>{
    return (dispatch)=> {
        axios.put(`/tasks/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('tokenTaskbox')
            }
        })
        .then(response=>{
            console.log('front end startputTask response',response.data)
            if(Object.values(response.data).length>0){
                alert('Successfully updated inside db')
                dispatch(startGetTasks())
            }else {
                alert('data not found')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const setTasks =(data)=>{
    return { type : 'SET_TASKS', payload : data}
        
}