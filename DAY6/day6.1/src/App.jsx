
import { useState } from "react";

function App(){

  const [time,setTime] = useState(0);
 const [intervalid  ,Setintervalid] = useState(null);
  function handelStart(){
    const intId=setInterval(()=>{
      setTime(time=>time+1);
    },1000)
  
  
  
  Setintervalid(intId)
  }
  
  function handelStop(){
    clearInterval(intervalid)
  }
   return(
    <>
    <h1>StopWatch:{time}</h1>
    <div>
      <button onClick={handelStart}>Start</button>
       <button onClick={handelStop}>Stop</button>
        <button>Reset</button>
    </div>
    </>
  )
}
export default App;