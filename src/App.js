import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from "react-bootstrap";
import {useState} from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import UpdateForm from './components/UpdateForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [updateData, onEdit] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create Youtube Content",
      time:"03:02",
      date:"2000-10-11",
      status: false
    },
    {
      id: 2,
      text: "Buy Groceries",
      time:"12:02",
      date:"2000-10-01",
      status: false
    },
    {
      id: 3,
      text: "Create Sewing Machine",
      time:"02:02",
      date:"2015-08-09",
      status: false
    },
  ]);

  const addTodo = (text, time, date) => {
    const id = todos.length + 1;
    const newTodo = { id, text, date, time, status:false};
    setTodos([...todos, newTodo]);
  }
  const completeTodo =  (id) => {    
      const newTodos = todos.map(
      todos => todos.id === id 
      ? ({ ...todos, status: !todos.status }) 
      : (todos) )
      console.log(newTodos)
      setTodos(newTodos)
  }

  const cancelUpdate = () => {
    onEdit('')
  }

  const changeHolder = (e) => {
    onEdit({...updateData, text: e.target.value})
  }
  const changeHolder1 = (e) => {
    onEdit({...updateData, time: e.target.value})
  }
   const changeHolder2 = (e) => {
    onEdit({...updateData, date: e.target.value})
  }
 
  const updateTask = () => {
    let removeOldRecord = [...todos].filter(todo => todo.id !== updateData.id)
    const newTodos=([
      ...removeOldRecord, 
      updateData         
    ])
      onEdit('')
      console.log(newTodos)
      setTodos(newTodos)
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }
 
return (
    <div className="App"> 
      <Header title="Todo App" 
      
      addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>  
          
          {showForm ? <AddTodo onAdd={addTodo}/>:''}      
      {todos && todos.length ? '':'no tasks...'}  
      <Todos todos={todos} 
      onComplete={completeTodo} 
      onEdit={onEdit}  
      onDelete={deleteTodo} /> 


          {updateData && updateData ? (
    <UpdateForm 
        updateData={updateData}
        changeHolder={changeHolder}
        changeHolder1={changeHolder1}
        changeHolder2={changeHolder2}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : ''}
     
    
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header class= "Accordion" >MY MOTTO</Accordion.Header>
        <Accordion.Body>
        It always seems impossible until it’s done. You can do it.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >MY QUOTES</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
    </div>
    
  );
}

export default App;
