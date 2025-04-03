import {client} from "./client"

export async function fetchAllProducts(){
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        price,
        image{asset ->{ _id, url}},
        "productslug": productslug.current
        }`)
    return data   
}

export async function fetchProductsByCategories(cat){
        const data = await client.fetch(
            `*[_type == "products" && $cat in categories[]-> categoryname]`,
            {cat}
        )
        return data
    }

export async function fetchProductBySlug(slug){
    const data = await client.fetch(`*[productslug.current == $slug]`, {slug})
    return data
}

export async function fetchProductByParentCategory(){
    const data = await client.fetch(`*[_type == "categories" && references("0a38760b-1275-4a33-b06d-3faeef1cd0f4")]`)
    return data
}