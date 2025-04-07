import {client} from "./client"

export async function fetchAllCategoriess(){
    const data = await client.fetch(`*[_type == "categories"]{_id, categoryname, categoryslug}`)
    return data
}

export async function fetchAllParentCategories(){
    const data = await client.fetch(`*[_type == "parentcategory"]{_id, title, "slug": slug.current}`)//Til å skrive ut til tekstlig over objekt
    return data
}
//Gåsetegn lager en ny variabel

export async function fetchCategoryBySlug(slug){
    const data = await client.fetch(`*[slug.current == $slug]`, {slug})
    return data
}

export async function fetchCategoryByCurrentSlug(slug){
    const data = await client.fetch(`*[categoryslug.current == $slug]`, {slug})
    return data
}