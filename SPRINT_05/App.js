import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st7, setSt7] = useState();

  const color = (min = 0, max = 255) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


  function task7() {
    let c = `rgb(${color()},${color()},${color()})`;
    setSt7(c);

  }
  function task8() {

  }
  function task9() {

  }
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
     
      <section>
        <h2>Task 7</h2>
        <div className="block-7"  style={{background: st7}}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div >{st7} </div>
      </section>
     
    </>
  );
}

export default App;
