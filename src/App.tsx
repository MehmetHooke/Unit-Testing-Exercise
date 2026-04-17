import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Test</p>
      <div id='main'>
        <span data-testid={"counter"}>{count}</span>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count * 0)}>Restart</button>
        <button onClick={() => setCount(count * -1)}>ChangeSign</button>
      </div>
    </>
  )
}

export default App
