import {client} from "./client"

export async function fetchAllCategoriess(){
    const data = await client.fetch(`*[_type == "categories"]{_id, categoryname, categoryslug}`)
    return data
}