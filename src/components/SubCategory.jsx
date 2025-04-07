import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchCategoryByCurrentSlug, fetchCategoryBySlug } from "../sanity/categoryServices"

export default function SubCategory({getProductsByCategory, products}){

    const {subcategory} = useParams()
    const [category, setCategory] = useState([])

    const getCategory = async (slug)=>{
        const data = await fetchCategoryByCurrentSlug(slug)
        setCategory(data[0])
        console.log(data)
    }

    useEffect(()=>{
        getCategory(subcategory)
        //getProductsByCategory(category.categoryname)
    },[])

    useEffect(()=>{
        getProductsByCategory(category.categoryname)
    },[category])

    console.log("subarray: ",products)

    return (<>
        <h1>{category.categoryname}</h1>
        {products?.map(product => <p>{product.categoryname}</p>)}
    </>
    )
}