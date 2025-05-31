import styles from './product-item.module.css'

const ButtonComponent = () =>{
    return(
        <button className={styles.buttonStyle}>Click</button>
    )
}

const ProductItem = ({key, productName})=>{
    return(
        <div style={{ padding: "20px", border: "2px solid red", width: "20%"}} key={key}>
            <p className={styles.productTitle}>{productName}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem;