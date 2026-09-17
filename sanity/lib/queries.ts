const listFields = /* groq */ `
    _id,
    title,
    "listingTitle": coalesce(listingTitle, title),
    listingDescription,
    "introBlocks": body[0...4]{_type, style, children[]{text}},
    "slug": slug.current,
    listingImage,
    publishedAt,
    author,
    featured,
`;

export const BLOG_LIST_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${listFields}}`;

export const BLOG_SLUGS_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)][].slug.current`;

export const BLOG_BY_SLUG_QUERY = /* groq */ `*[_type == "post" && slug.current == $slug][0]{${listFields}mainImage, body}`;

export const BLOG_SITEMAP_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)]{"slug": slug.current, publishedAt}`;
