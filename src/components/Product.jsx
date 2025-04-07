import { useParams } from "react-router"
import { fetchProductBySlug } from "../sanity/productServices"
import { useEffect, useState } from "react"

export default function Product(){
    const {product} = useParams()//Det inni krøllparentes må være helt lik
    const [productInfo, setProductInfo] = useState([])
    //console.log(product)

    const getProductBySlug = async (product)=>{
        const data = await fetchProductBySlug(product)
        //console.log(data)
        setProductInfo(data)
    }

    //console.log(productInfo)

    useEffect(()=>{
        getProductBySlug(product)
    },[product])

    return <h2>{productInfo[0]?.productname}</h2>
}