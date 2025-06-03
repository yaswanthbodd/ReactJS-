import { Route, Routes, useNavigate } from "react-router-dom"
import RecipeList from "./pages/recipes"
import CommentList from "./pages/comments"
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";


function App() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>React Routing, Custom Hooks and more</h1>
      <button onClick={()=>navigate('recipe-list')}
      style={{backgroundColor : 'black', color : 'white', marginRight : '10px'}}>
        Navigate to Recipe List Page</button>

      <button  onClick={()=> navigate("comments-list")}
      style={{backgroundColor : 'black', color : 'white'}}>
        Navigate to Comments List Page</button>
      <Routes>

        <Route path="/home" element={<Layout />}> 
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>

        {/* <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} /> */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
