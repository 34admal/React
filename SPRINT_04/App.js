import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [t6, setT6]=useState()



  function task6(event) {console.log(event.target.value);
    setT6(event.target.value)
  }


  return (
    <>
      <h1>События</h1>
      
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
          
        </select>
        <div className="out-6" >
            <p>{t6}</p></div>
      </section>
      
    </>
  );
}

export default App;
