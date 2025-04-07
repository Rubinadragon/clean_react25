import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts, fetchProductsByCategories } from '../src/sanity/productServices'
import { fetchAllCategoriess } from './sanity/categoryServices'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Product from './components/Product'
import Category from './components/Category'
import SubCategory from './components/SubCategory'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const getAllProducts = async()=>{
    const data = await fetchAllProducts()
    setProducts(data)
    //console.log(data)
  }; 

  const getAllCategories = async()=>{
    const data = await fetchAllCategoriess()
    //console.log("categories: ",data)
    setCategories(data)
  }

  const getProductsByCategory = async (cat) => {
    const data = await fetchProductsByCategories(cat)
    setProducts(data)
  }

  //console.log(products)

  useEffect(()=>{
    getAllProducts()
    getAllCategories()
  },[])//Til når komponenter kjøres første gangen

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home products={products} categories={categories} getProductsByCategory={getProductsByCategory}/>}/>
        <Route path="product/:product" element={<Product/>}/>
        <Route path="category/:category" element={<Category/>}/>
        <Route path="category/:category/:subcategory" element={<SubCategory getProductsByCategory={getProductsByCategory} products={products}/>}/>
        <Route path="category/" element={<Category/>}/>
      </Routes>
    </Layout>

    {/*<main>
      <h1>Min nettbutikk</h1>
      {categories?.map((category) => <button key={category._id} 
                                        onClick={() => getProductsByCategory(category.categoryname)}>
                                        {category.categoryname}
                                      </button>)}
      {products?.map((product) => 
        <article key={product._id}>
          <h3>{product.productname}</h3>
          <img src={product.image.asset.url} alt={product.productname}/>
        </article>
      )}
    </main>*/}
    </>
  )
}

export default App
