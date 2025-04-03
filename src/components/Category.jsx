import { Link, useParams } from "react-router"
import { fetchAllParentCategories } from "../sanity/categoryServices"
import { useEffect, useState } from "react"
import { fetchProductByParentCategory } from "../sanity/productServices"

export default function Category(){
    const {category} = useParams()
    const [parentCategories, setParentCategories] = useState([])

    const getAllParentCategories = async()=>{
        const data = await fetchAllParentCategories()
        setParentCategories(data)
    }

    //console.log(parentCategories)

    const getProductsByParentC = async ()=>{
        const data = await fetchProductByParentCategory()
        console.log(data)
    }

    useEffect(()=>{
        getAllParentCategories()
    },[])

    useEffect(()=>{
        getProductsByParentC()
    },[category])//Sjekk om hvis category eksisterer

    return (
        <>
        <h1>Kategori, {category ? category : null}</h1>
        { category == null ?
            (
            <section>
                <h2>Hovedkategorier</h2>
                <ul>
                    {parentCategories?.map(
                        ((parentc) => <li key={parentc._id}>
                            <Link to={parentc.slug}>
                                {parentc.title}
                            </Link></li>))}
                </ul>
            </section>)

            :

            (<section>
                <h2>Underkategorier: {category}</h2>
            </section>)}
        </>
    )
}