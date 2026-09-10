import { defineArrayMember, defineField, defineType } from "sanity";

const imageField = (name: string, title: string, description?: string) =>
    defineField({
        name,
        title,
        type: "image",
        description,
        options: { hotspot: true },
        fields: [
            defineField({
                name: "alt",
                title: "Alternative text",
                type: "string",
                description: "Important for SEO and accessibility.",
                validation: (Rule) => Rule.required(),
            }),
        ],
        validation: (Rule) => Rule.required(),
    });

export const post = defineType({
    name: "post",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Blog Title",
            description: "Full title shown as the heading on the blog details page.",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "listingTitle",
            title: "Blog Short Title (Listing)",
            description: "Shorter title shown on blog listing cards. Falls back to the full title if left empty.",
            type: "string",
        }),
        defineField({
            name: "listingDescription",
            title: "Blog Short Description (Listing)",
            description: "Short summary shown on blog listing cards.",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required().max(220),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        imageField("listingImage", "Blog Listing Image", "Thumbnail shown on blog listing cards."),
        imageField("mainImage", "Blog Main Image (Details Page)", "Hero image shown at the top of the blog details page."),
        defineField({
            name: "publishedAt",
            title: "Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "featured",
            title: "Featured On Homepage",
            description: "Show this post as the large featured post in the homepage blog section.",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "body",
            title: "Content",
            description: "Rich text content for the blog details page. Use Heading 2 for each major section — sections are used to build the details page's table of contents.",
            type: "array",
            of: [
                defineArrayMember({
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "Heading 2", value: "h2" },
                        { title: "Heading 3", value: "h3" },
                        { title: "Heading 4", value: "h4" },
                        { title: "Heading 5", value: "h5" },
                        { title: "Heading 6", value: "h6" },
                    ],
                    lists: [
                        { title: "Bullet", value: "bullet" },
                        { title: "Numbered", value: "number" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Bold", value: "strong" },
                            { title: "Italic", value: "em" },
                        ],
                        annotations: [
                            defineField({
                                name: "link",
                                title: "Link",
                                type: "object",
                                fields: [
                                    defineField({
                                        name: "href",
                                        title: "URL",
                                        type: "url",
                                        validation: (Rule) =>
                                            Rule.required().uri({ scheme: ["http", "https", "mailto", "tel"] }),
                                    }),
                                ],
                            }),
                        ],
                    },
                }),
                defineArrayMember({
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Alternative text",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "author",
            media: "listingImage",
        },
    },
});
