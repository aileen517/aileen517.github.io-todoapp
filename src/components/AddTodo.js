import React, {useState}from "react";
const AddTodo = ({onAdd}) => {
const [text, setText] = useState('');
const [time, setTime] = useState('');
const [date, setDate] = useState('');
 const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, time, date)
    if(!text){    
      alert('Invalid Input.')
      return;
    }
   
    if(!time){    
          alert('Ivalid Input')
          return;
        }

    if(!date){    
      alert('Ivalid Input')
      return;
    }
   
  
   
    if(text&&time&&date){
      onAdd(text,time,date);
      setText("")
      onAdd(date);
      setDate("")
      onAdd(text,time,date);
      setTime("")
    }

  };

 
  return (
    <div className="col">
    <form style={{padding:'10px'}} onSubmit={onSubmit} method="POST">
      <label>Task</label>
      <input type="text" placeholder="Add todo"  value={text} onChange={(e) => setText(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}/>
        <br/>
        <label>Time</label>
    
        <input type="time" placeholder="Time"  value={time} onChange={(e) => setTime(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}/>
        <br/>
        <label>Date</label>
    
        <input type="date" placeholder="Date"  value={date} onChange={(e) => setDate(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}/>
        <br/>
     <button style={{backgroundColor:'orange', width:'100%',margin:'10px 0'}} className="btn"><b>Save</b></button>
     </form>
    </div>

    
    )
    
    
};



export default AddTodo;
