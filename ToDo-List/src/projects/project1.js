import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [height,setHeight]=useState(0);
  const [SuperPower,setPower]=useState("");
  const [Character,setCharacter]=useState(false);
  return (
    <div className="App">
      <div>
        <h1>Who is Hero</h1>
        <label>Name: </label>
        <input type="text" onChange={(event)=>setName(event.target.value)} style={{margin:10}}/>
        <label>Age: </label>
        <input type="number" onChange={(event)=>setAge(event.target.value)} style={{margin:10}}/>
        <label>Height: </label>
        <input type="number" onChange={(event)=>setHeight(event.target.value)} style={{margin:10}}/>
        <label>SuperPower: </label>
        <input type="text" onChange={(event)=>setPower(event.target.value)} style={{margin:10}}/>
      </div>
      <button onClick={()=>setCharacter(true)}>Display Character</button>
      <div>
        <h3>Hero Info</h3>
        {Character && 
          <div>
            <ul>
              <li>{name}</li>
              <li>{age}</li>
              <li>{height}</li>
              <li>{SuperPower}</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
