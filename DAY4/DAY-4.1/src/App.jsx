import { useState } from "react";
import Sum from "./sum.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   

      <h1>Counter is: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
          Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <Sum nums={count}></Sum>
    </>
  );
}

export default App;




