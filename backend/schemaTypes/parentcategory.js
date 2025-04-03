export const parentcategory = {
    name: "parentcategory",
    title: "Parent Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Parent category title",
            type: "string",
        },
        {
            name: "slug",
            title: "Parent Category Slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .replace("æ", "ae")
                                     .replace("å", "aa")
                                     .replace("ø", "oe")
                                     .slice(0, 200)
              },
        }
    ]
}