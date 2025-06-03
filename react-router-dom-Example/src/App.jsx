import { Route, Routes, useNavigate } from "react-router-dom"
import RecipeList from "./pages/recipes"
import CommentList from "./pages/comments"


function App() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>React Routing, Custom Hooks and more</h1>
      <button onClick={()=>navigate('/recipe-list')}
      style={{backgroundColor : 'black', color : 'white', marginRight : '10px'}}>
        Navigate to Recipe List Page</button>

      <button  onClick={()=> navigate("/comments-list")}
      style={{backgroundColor : 'black', color : 'white'}}>
        Navigate to Comments List Page</button>
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentList />} />
      </Routes>
    </div>
  )
}

export default App
