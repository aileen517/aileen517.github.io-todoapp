const UpdateForm = ({ updateData, changeHolder,changeHolder1, changeHolder2,updateTask, cancelUpdate }) => {
 
  return(
    <>
      <div className="row">
        <div className="col">
        <label>Task</label>
          <input type="text" placeholder="text"
            value={ updateData && updateData.text }
            onChange={ (e) => changeHolder(e)}
            style={{width:'100%',height:'30px', padding:'5px'}}
           
          />
           <label>Time</label>
          <input  type="time" placeholder="time"
            value={ updateData && updateData.time }
            onChange={ (e) => changeHolder1(e)}
            style={{width:'100%',height:'30px', padding:'5px'}}
          />
           <label>Date</label>
          <input  type="date" placeholder="date"
            value={ updateData && updateData.date}
            onChange={ (e) => changeHolder2(e)}
            style={{width:'100%',height:'30px', padding:'5px'}}
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;