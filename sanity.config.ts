import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { PageType } from "./sanity/types/page.types";

export default defineConfig({
  name: "stvn",
  title: "STVN",
  projectId: "4xy3zla7",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [PageType],
  },
});
