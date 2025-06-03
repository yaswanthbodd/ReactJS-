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
import ContextButtonComponent from './components/context-concepts/button'
import ContextTextComponent from './components/context-concepts/text'
import UseReducerExample from './components/useReducerExample'
import UseReducerExam from './components/useReducerExample2'
import FormComponent from './components/form'
import LoginComponent from './components/login'
import RegisterComponent from './components/register'

function App() {
  const [count, setCount] = useState(0)
  const dummyProducts  = [ 'product 1', 'product 2', 'product 3'];
  return (
    <>
    <h1>ReactJS Components</h1>
      {/* <ProductList listOfProducts={dummyProducts} name="yaswanth" city="hyderabad" /> */}
      {/* <UseStateHook />
      <UseEffectHook /> */}

      {/* <Fetching /> */}
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerExam /> */}
      {/* <FormComponent /> */}
      <div style={{ display: 'flex', gap : '20px', justifyContent : 'center'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </>
  )
}

export default App
