import './App.css';
import React from 'react';
import { useState } from 'react';

let str='';
let ar10=[];
function App(){ 
const [st1, setSt1]=useState();
let myref=React.createRef();
let ref10=React.createRef();
 const [st2, setSt2]=useState(0);
 const[st3, setSt3]=useState();
 const[st4,setSt4]=useState(0);
 const[st5,setSt5]=useState();
 const[st6,setSt6]=useState();
 const[st7,setSt7]=useState();
 const[st8,setSt8]=useState();
 const[st9,setSt9]=useState();
 const[st10,setSt10]=useState();
 const color = (min = 0, max = 255) => {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
 
  function task1() {
let inp1= myref.current.value;
setSt1(inp1)

  }
  function task2() {
   let currentCount=st2;
   currentCount++;
  
   
    
  setSt2(currentCount)

  }
  function task3(event) { 
    let inp3=event.target.value
    setSt3(inp3)
  }
  function task4() {
    let count4=st4;
    count4++;
    setSt4(count4)



  }
  function task5(event) {
    // console.log(event);
let box='';
    event.target.checked?box=event.target.value:box='0';
setSt5(box)
  }
  function task6(event) {
    console.log(event.target.value)
    let ev6=event.target.value;
    setSt6(ev6)


  }
  function task7() {
    let clr = `rgb(${color()},${color()},${color()})`;
    setSt7(clr);
    

  }
  function task8(event) {
    
    let entrVal=event.key;
    if (isNaN(+entrVal)) str+='0';
    else str += '1';
    console.log(str)
    setSt8(str) 


  }
  function task9(event) {
    console.log(event.target.value)
setSt9(event.target.value)
  }
  
  function task10() {
     
    ar10.push(ref10.current.value)
    console.log(ar10);
    setSt10(ar10)

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={myref}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{background: st7}}></div>
        <button className="task-7"  onClick={task7}>Color</button>
        <div >
          {/* {st7}  */}

        </div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10} ></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div> {st10}</div>
      </section>
    </>
  );
}

export default App;
