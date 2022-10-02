import React from 'react'

const Header = ({title, addTodo, showForm}) => {
  return (
    <div className='header'>
        <h3>{title}</h3>
        <button className='btn' style={{backgroundColor:'orange'}} onClick={addTodo}><b>{showForm ? 'Close':'Add'}</b></button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header