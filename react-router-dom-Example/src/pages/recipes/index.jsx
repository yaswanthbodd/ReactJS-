import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function RecipeList() {
    const location = useLocation();
    //console.log(location);

    //Using Custom Hooks to Fetch the Data
    const {data, loading, error} = useFetch('https://dummyjson.com/recipes');
    //console.log(data);

    if(loading) {
        return <h1>Fetching Data. Please Wait!....</h1>
    }
    return(
        <div>
            <h1>Recipe Item Page</h1>
            <ul>
                {
                    data?.recipes?.length > 0 ?
                    data?.recipes.map(recipeItem => <div>
                        <img src={recipeItem?.image} />
                        <label>{recipeItem?.name}</label>
                    </div>)
                    : null
                }
            </ul>
        </div>
    )
}
export default RecipeList;