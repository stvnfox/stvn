import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      readOnly: true,
      initialValue: "home",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
      initialValue: "Home",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    }),
  ],
});