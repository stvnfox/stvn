import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "introduction", title: "Introduction" },
    { name: "work", title: "Work" },
    { name: "projects", title: "Projects" },
    { name: "connect", title: "Connect" },
  ],
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
      group: "introduction",
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
    defineField({
      name: "work",
      title: "Work",
      type: "object",
      group: "work",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "workItems",
          title: "Work",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "explanation",
                  title: "Explanation",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "object",
      group: "projects",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "projectItems",
          title: "Projects",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label",
                  type: "string",
                },
                {
                  name: "explanation",
                  title: "Explanation",
                  type: "array",
                  of: [{ type: "block" }],
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string",
                },
                {
                  name: "ariaLabel",
                  title: "Aria label",
                  type: "string",
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "connect",
      title: "Connect",
      type: "object",
      group: "connect",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "introduction",
          title: "Introduction",
          type: "array",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "connectItems",
          title: "Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "string",
                }),
                defineField({
                  name: "ariaLabel",
                  title: "Aria label",
                  type: "string",
                }),
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: ["github", "linkedin", "instagram"],
                    layout: "radio",
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
