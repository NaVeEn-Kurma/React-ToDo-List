
import './App.css';
import React,{useState,useRef} from 'react'
function App() {
  const [tasks,setTasks]=useState([]);
  const [currentTask,setCurrentTask]=useState("");
  const inputTask=useRef(null); 

  const addTask=()=>{
    setTasks([...tasks,{task:currentTask,completed:false}]);
    inputTask.current.value="";
  }
  const deleteTask=(value)=>{
      setTasks(tasks.filter(task=>{return task.task!==value}));
  
    }
    const completeTask=(value)=>{
        setTasks(tasks.map(task=>{
          return task.task===value?{task:value,completed:true}:{task:task.task,completed:task.completed?true:false}
        }))
        console.log(tasks);
    }
  return (
    <div className="App">
    <h1>TODO List</h1>
    <input ref={inputTask} onChange={(event)=>setCurrentTask(event.target.value)} type="text" 
    onKeyDown={(event)=>{if(event.keyCode===13) addTask()}}
    placeholder='Task....'/>
    <button id="topButton" className="btn btn-dark" onClick={addTask}>Add Task</button>
    <hr/>
    <div>
      <ul>{tasks.map(
        (val,key)=>{
        return <div id="fl">
          <li key={key}>{val.task}</li>
          
          <button type="button" className="btn btn-primary" style={{margin:5}} onClick={()=>completeTask(val.task)}>Completed</button>
          <button className="btn btn-secondary" onClick={()=>deleteTask(val.task)}>X</button>
          {val.completed===true?<h2>Task Completed</h2>:<h2>Task InComplete</h2>}
        </div>
        })}</ul>
    </div>
    </div>

  );
}

export default App;
