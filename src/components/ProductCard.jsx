import { Link } from "react-router";

export default function ProductCard({product}){
    return (
                <Link to={`product/${product.productslug}`}>
                    <article key={product._id}>
                    <h3>{product.productname}</h3>
                    <img src={product.image.asset.url} alt={product.productname}/>
                    </article>
                </Link>   
            )
}