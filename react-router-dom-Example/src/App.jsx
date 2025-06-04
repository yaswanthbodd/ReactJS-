import { Route, Routes, useNavigate, useRoutes } from "react-router-dom"
import RecipeList from "./pages/recipes"
import CommentList from "./pages/comments"
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";

//Using useRoutes CustomRoutes
function CustomRoutes() {
  const element = useRoutes ([
    {path : '/home', element : <Layout />,
      children : [
        {path : 'recipe-list', element : <RecipeList/>},
        {path : 'comments-list', element : <CommentList />},
        {path : 'recipe-list/:id', element : <RecipeDetailsPage />}
      ]
    },
    {path : '/react-hook-form', element : <ReactHookFormExamplePage />},
    {path : '*', element : <NotFoundPage />}
  ])
  return element;
}

function App() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>React Routing, Custom Hooks and more</h1>
      <button onClick={()=>navigate('/home/recipe-list')}
      style={{backgroundColor : 'black', color : 'white', marginRight : '10px'}}>
        Navigate to Recipe List Page</button>

      <button  onClick={()=> navigate("/home/comments-list")}
      style={{backgroundColor : 'black', color : 'white'}}>
        Navigate to Comments List Page</button>
      <Routes>

        {/* Layout Parent Childern Pages */}
        {/* <Route path="/home" element={<Layout />}> 
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route> */}

        {/* <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage/>} /> */}
       
      </Routes>
       <CustomRoutes />
    </div>
  )
}

export default App
