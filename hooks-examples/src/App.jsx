import Contact from "./components/Contact"
import Counter from "./components/Counter"
import Profile from "./components/Profile"
import CustomUseLocalStorage from "./hooks-example/CustomUseLocalStorage"
import { UseRefHook } from "./hooks-example/ref-hook/UseRefHook"
import UseMemoHook from "./hooks-example/UseMemoHook"
import UseReducerFunction from "./hooks-example/UseReducerFunction"

function App() {
  

  return (
    <div>
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <Profile />
      <Counter />
      <Contact /> */}

      {/* <UseReducerFunction /> */}
      <CustomUseLocalStorage />
    </div>
  )
}

export default App
