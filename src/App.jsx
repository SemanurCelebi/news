import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
          <>
              semanur çelebi
              <h1 className="text-3xl bg-sky-500 font-bold underline">
                  Hello world!
              </h1>
              <h1>Vite + Reacts</h1>
              <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                  </button>
                  <p>
                      Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
              </div>
              <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
              </p>
          </>
  )
}

export default App
