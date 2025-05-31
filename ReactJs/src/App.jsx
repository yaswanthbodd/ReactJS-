import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/functional-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is working</h1>
      <ClassBasedComponent />
      <FunctionalComponent />
    </>
  )
}

export default App
