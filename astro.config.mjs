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
            {
              label: "Assessing Your Organization’s UX Maturity",
              slug: "where-to-begin/assessing-your-organization-s-ux-maturity",
            },
            {
              label: "First Steps Toward Accelerating and Growing UX",
              slug: "where-to-begin/first-steps-toward-accelerating-and-growing-ux",
            },
          ],
        },
        {
          label: "Making the Business Case for UX",
          items: [
            {
              label: "Business Goals of UX",
              slug: "making-the-business-case-for-ux/business-goals-of-ux",
            },
            {
              label: "How Teams Perform With UX: the Good, the Bad, the Ugly",
              slug: "making-the-business-case-for-ux/how-teams-perform-with-ux-the-good-the-bad-the-ugly",
            },
            {
              label: "Interview (A) – What Managers Need to Know About UX",
              slug: "making-the-business-case-for-ux/interview-a--what-managers-need-to-know-about-ux",
            },
            {
              label: "Interview: How Teams Perform - Analysis Paralysis",
              slug: "making-the-business-case-for-ux/interview--how-teams-perform--analysis-paralysis",
            },
            {
              label: "What is the ROI of UX?",
              slug: "making-the-business-case-for-ux/what-is-the-roi-of-ux",
            },
          ],
        },
      ],
    }),
  ],
});
