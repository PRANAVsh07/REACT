import {useState} from "react";
function App(){
let [count ,setCount]  =useState(0)

function icrementNumber(){
  count++;
  setCount(count);
}

  return (
    <>
    <h1>Counter:{count}</h1>
  <button  onClick={icrementNumber}>Increment</button>
    </>

  )
}



export default App;