module.exports = {
  title: 'Kulupu',
  tagline: 'Proof-of-work blockchain with on-chain governance and forkless upgrade',
  url: 'https://kulupu.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'kulupu',
  projectName: 'website',
  themeConfig: {
    navbar: {
      title: 'Kulupu',
      logo: {
        alt: 'Kulupu logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://consensus.corepaper.org/wiki/Kulupu',
          label: 'Wiki',
          position: 'left',
        },
        {
          href: 'https://corepaper.org',
          label: 'Core Paper',
          position: 'right',
        },
        {
          href: 'https://github.com/kulupu/kulupu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'Wallet',
              to: 'docs/wallet/',
            },
            {
              label: 'Mining',
              to: 'docs/mining/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Matrix',
              href: 'https://app.element.io/#/group/+kulupu:matrix.org',
            },
            {
              label: 'Discord',
              href: 'https://discord.io/kulupu',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kulupunetwork',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/KulupuOfficial',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kulupu/kulupu',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wei Tang & Kulupu contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kulupu/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kulupu/website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
