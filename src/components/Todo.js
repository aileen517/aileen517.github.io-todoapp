import React from 'react'
import Form from 'react-bootstrap/Form';
const Todo = ({todo, onDelete,onComplete,onEdit}) => {
  
  return (
    <div className='col todo'>
      
        <Form.Check className='btn-sm' onClick={(e)=> onComplete(todo.id)}
         type="switch"
         id="custom-switch"/>               
       <span className={todo.status ? 'done' : '' }>
       <span className="todoText"><b> {todo.text} at {todo.time}, Date: {todo.date}</b></span></span>
    <div>
    {todo.status ? null : (                    
    <button className='btn-snn' onClick={()=> onEdit(todo)}>Edit</button>)}
    <button className='btn-ss' onClick={()=> onDelete(todo.id)}>Delete</button>        
    </div>
    </div>
  )
  
}
export default Todo