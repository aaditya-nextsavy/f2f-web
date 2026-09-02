const listFields = /* groq */ `
    _id,
    title,
    "listingTitle": coalesce(listingTitle, title),
    listingDescription,
    "slug": slug.current,
    listingImage,
    publishedAt,
    author,
    featured,
`;

export const BLOG_LIST_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${listFields}}`;

export const BLOG_SLUGS_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)][].slug.current`;

export const BLOG_BY_SLUG_QUERY = /* groq */ `*[_type == "post" && slug.current == $slug][0]{${listFields}mainImage, body}`;
