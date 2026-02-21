// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "UX Management: Strategy and Tactics",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/ux-management-strategy-and-tactics",
        },
      ],
      sidebar: [
        {
          label: "Where to Begin?",
          items: [
            {
              label: "Welcome to UX Management: Strategy and Tactics",
              slug: "where-to-begin/welcome-to-ux-management-strategy-and-tactics",
            },
            {
              label: "Understanding UX and UX Teams",
              slug: "where-to-begin/understanding-ux-and-ux-teams",
            },
            {
              label:
                "Interview: Understanding the Core Function of UX Teams - User Advocacy",
              slug: "where-to-begin/interview-understanding-the-core-function-of-ux-teams-user-advocacy",
            },
            {
              label: "Managing UX as a Process",
              slug: "where-to-begin/managing-ux-as-a-process",
            },
            {
              label: "UX Maturity as a Lifecycle",
              slug: "where-to-begin/ux-maturity-a-lifecycle-view",
            },
          ],
        },
      ],
    }),
  ],
});
