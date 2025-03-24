export const products = {
    name: "products",//Til å peke ut hva man vil ha
    title: "Products",//Hva det skal hete inni Sanitygrensesnittet
    type: "document",//Hva slags type, enten document eller object
    fields: [
        {
            name: "productname",
            type: "string",

        },
        {
            name: "price",
            type: "number",
        },
        {
            name: "image",
            type: "image",
        }
    ]
}