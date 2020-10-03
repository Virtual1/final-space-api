module.exports = {
  title: "Final Space API",
  tagline: `"That's Not A Cookie. And You Know That HUE, You Know That!"`,
  url: "https://finalspaceapi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "lelouchB", // Usually your GitHub org/user name.
  projectName: "final-space-api", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Final Space API",
      logo: {
        alt: "Final Space",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/lelouchB/final-space-api",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "Character",
              to: "docs/character/",
            },
            {
              label: "About",
              to: "docs/about/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/finalspaceapi",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/noharashutosh",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/lelouchB/final-space-api",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ashutosh K Singh`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/lelouchB/final-space-api/edit/main/frontend/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/lelouchB/final-space-api/edit/main/frontend/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
};