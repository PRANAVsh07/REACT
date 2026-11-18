
import { useState } from "react";
import { useRef } from "react";

function App(){

  const [time,setTime] = useState(0);
//  const [intervalid  ,Setintervalid] = useState(null);
const intervalidRef=useRef(null);
  function handelStart(){
    if(intervalidRef.current!=null)
      return;

    const intId=setInterval(()=>{
      setTime(time=>time+1);
    },1000)
  
  
  intervalidRef.current = intId;

  }
  
  function handelStop(){
    clearInterval(intervalidRef.current )
  intervalidRef.current = null;
    
  }

 function handelReset(){
    clearInterval(intervalidRef.current)
  intervalidRef.current = null;
    setTime(0);
    
  }

   return(
    <>
    <h1>StopWatch:{time}</h1>
    <div>
      <button onClick={handelStart}>Start</button>
       <button onClick={handelStop}>Stop</button>
        <button onClick={handelReset}>Reset</button>
    </div>
    </>
  )
}
export default App;




