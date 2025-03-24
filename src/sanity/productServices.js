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