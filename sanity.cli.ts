import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "4xy3zla7",
    dataset: "production",
  },
  studioHost: "stvnx",
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
