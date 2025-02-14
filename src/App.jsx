import { useRef, useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0);
      const [time, setTime] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef()
 
  let timerRef = useRef(null);

   function startTimer() {
   timerRef.current =  setInterval(()=>{
      setTime(time=>time+1);
    },100);
   }
   function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
   }
   function resetTimer() {
    stopTimer();
    setTime(0);
   }

  // function handleIncrement(){
  //   val.current = val.current+1;
  //   console.log('Value of val : '+val.current);
  //   setCount(count+1);
  // }

  // function changeColor(){
  //  btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(()=>{
  //   console.log("Rendered Again");
  // })

  return (
    <div>
        {/* <button ref={btnRef} onClick={handleIncrement}>Increment</button><br />
        <div>
          Count : {count}
        </div>
        <br />
        <button onClick={changeColor}>Change Color Of First Button </button><br />
        <div>
          Count : {count}
        </div>
        <br /> */}

        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>
        Start
        </button>
        <br />
        <br />
        <button onClick={stopTimer}>
        Stop
        </button>
        <br />
        <br />
        <button onClick={resetTimer}>
        Reset
        </button>
        <br />
        <br />
    </div>
  )
}

export default App
