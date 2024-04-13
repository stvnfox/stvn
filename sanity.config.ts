import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "stvn",
  title: "STVN",
  projectId: "4xy3zla7",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
