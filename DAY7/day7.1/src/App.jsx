
import { useState } from "react";

function App(){

  const [time,setTime] = useState(0);
//  const [intervalid  ,Setintervalid] = useState(null);
const intervalidRef=useRef(null);
  function handelStart(){
    if(intervalid!=null)
      return;

    const intId=setInterval(()=>{
      setTime(time=>time+1);
    },1000)
  
  
  

  }
  
  function handelStop(){
    clearInterval(intervalid)
    Setintervalid(null);
    
  }

 function handelReset(){
    clearInterval(intervalid)
    Setintervalid(null);
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




