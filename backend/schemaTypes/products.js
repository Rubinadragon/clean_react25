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
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "categories"}]//Referere til typen categories i categories.js
                },
            ],
            
        },
        {
            name: "productslug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'productname',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              },
        },
    ],
}