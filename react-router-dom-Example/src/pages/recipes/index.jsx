import { useLocation } from "react-router-dom";

function RecipeList() {
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Recipe Item Page</h1>
        </div>
    )
}
export default RecipeList;