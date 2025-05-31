import ProductItem from "./components/product-item";


const ProductList = ({name, city, listOfProducts}) =>{

    // const {name, city} = props; // Destructuring Props
    return(
        <div>
            <h3>Ecommerce Products List</h3>
            <h3>Name is {name} and he/she belongs to city {city}</h3>
            <ProductItem />
            <ul>
                {listOfProducts.map((item, index)=> (
                    <ProductItem key={index} productName = {item} />
                ))}
            </ul>
        </div>
    )
}

export default ProductList;