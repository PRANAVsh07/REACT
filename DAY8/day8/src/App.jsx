
import Counter from "./components/Counter"
import Header from "./components/Header"
import { useState } from "react"
function App(){


    const [count ,setCount ]=useState(0)
  return(
    <>
    <h1>I am the app</h1>
    <Header count ={count}></Header>
    <Counter count={count} setCount={setCount}></Counter>
    </>
  )
}

export default App;