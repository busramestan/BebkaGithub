import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     <h1> Hello World</h1>
     <p>Archi's Academy </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium culpa mollitia ut deserunt quos id necessitatibus ratione nesciunt, iusto impedit fuga voluptatibus iste, nemo itaque earum corrupti laborum sit?</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
