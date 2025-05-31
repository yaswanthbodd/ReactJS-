import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import UseStateHook from './components/Hooks/UseStateHook'
import UseEffectHook from './components/Hooks/UseEffectHook'
import Fetching from './components/Hooks/APIFetching'

function App() {
  const [count, setCount] = useState(0)
  const dummyProducts  = [ 'product 1', 'product 2', 'product 3'];
  return (
    <>
      {/* <ProductList listOfProducts={dummyProducts} name="yaswanth" city="hyderabad" /> */}
      {/* <UseStateHook />
      <UseEffectHook /> */}

      <Fetching />
    </>
  )
}

export default App
