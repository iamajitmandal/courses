// Understanding why you need React Hooks?

// function App() {
//   let counter = 15;

//   const addValue = () => {
//     counter = counter + 1
//     console.log("value added", Math.random());
//   }

//   return (
//     <>
//       <h1>Counter Value: {counter}</h1>

//       <button onClick={addValue}>Add Value</button> <br/>
//       <button>Remove Value</button> <br/>
//     </>
//   )
// }

// export default App

/*
  Try to understand the above code, then THINK why the value of counter is not being increased?

  What will be updated in the UI will be decided and reacted by the REACT, so it is called REACT?
  So, to update the value of data in the UI, REACT has given hooks.
*/

// Using Hooks in the above code
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) 
      {counter = counter + 1}
    setCounter(counter)
    console.log("value added", Math.random());
  }

  const decreaseValue = () => {
    if (counter > 0) 
      {counter = counter - 1}
    setCounter(counter)
    console.log("value decreased", Math.random());
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value</button> <br/>
      <button onClick={decreaseValue}>Remove Value</button> <br/>
    </>
  )
}

export default App

// Task: Use you logic and stop decreasing the value below 0 and increasing the value above 20.
