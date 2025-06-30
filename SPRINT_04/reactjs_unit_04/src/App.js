import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  const [t6, setT6]=useState()
let divOut5= React.createRef();
let b7=React.createRef()
let out8=React.createRef()
let ref10 = React.createRef()
let str = '';
const randomRgbColor = () => {
  const red = Math.floor(Math.random() * 256) 
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
   return`rgb(${red}, ${green}, ${blue})`}
 const [t9, setT9]=useState()
  function task1() { console.log('task2')

  }
  function task2(event) { event.target.classList.add('active')
  }

  function task3(event) { console.log(event.target.value)
  }

  
  function task4() { count4++;
    console.log( count4 )
  }
  

  
  function task5(event) { 
    if (event.currentTarget.checked)
      {divOut5.current.innerHTML = event.target.value}
   else  {divOut5.current.innerHTML = 0};
    
   


  }
  function task6(event) {console.log(event.target.value);
    
    setT6(event.target.value)

  }
  function task7() {
    b7.current.style.backgroundColor=randomRgbColor();
   
    

    

  }
 
    

    function task8(event) {
      let entrVal=event.key;
      if (isNaN(+entrVal)) str+='0';
      else str += '1';
      console.log(str)
      out8.current.innerHTML = str;
     }
  function task9(event) {
    console.log(event.target.value)
    setT9(event.target.value)

  }
  let ar10 = [5, 6, 7];
  function task10() {console.log (ref10.current.value)
    ar10.push(ref10.current.value)
    console.log(ar10)

  }

  return (<>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div className="out-5" ref={divOut5}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
          
        </select>
        <div className="out-6" >
            {t6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7 " ref={b7}></div>
        <button className="task-7  " onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8} ></input>
        <div className="out-8" ref={out8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{t9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
