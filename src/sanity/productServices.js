import {client} from "./client"

export async function fetchAllProducts(){
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        price,
        image{asset ->{ _id, url}}
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