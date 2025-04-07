import { Link, useParams } from "react-router"
import { fetchAllParentCategories, fetchCategoryBySlug } from "../sanity/categoryServices"
import { useEffect, useState } from "react"
import { fetchProductByParentCategory } from "../sanity/productServices"

export default function Category(){
    const {category} = useParams()
    const [parentCategories, setParentCategories] = useState([])
    const [categoryId, setCategoryId] = useState([])
    const [categories, setCategories] = useState([])

    const getAllParentCategories = async()=>{
        const data = await fetchAllParentCategories()
        setParentCategories(data)
    }

    //console.log(parentCategories)

    const getProductsByParentC = async (id)=>{
        const data = await fetchProductByParentCategory(id)
        //console.log("Underkategorier fra hovedkategori: ", data)
        setCategories(data)
        console.log("kategorier: ", data)
    }

    

    const getCategoryBySlug = async (slug) => {
        const data = await fetchCategoryBySlug(slug)
        //console.log(data)
        setCategoryId(data[0]._id)

    }

    console.log(categoryId)
    useEffect(()=>{
        getAllParentCategories()
        
    },[])

    useEffect(()=>{
        getCategoryBySlug(category)
        getProductsByParentC(categoryId)
    },[category, categoryId])//Sjekk om hvis category eksisterer, dependency

    

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
                <ul>
                    {categories?.map(cat => <li key={cat._id}><Link to={cat.categoryslug.current}>
                            {cat.categoryname}
                            </Link>
                        </li>)}
                </ul>
            </section>)}
        </>
    )
}