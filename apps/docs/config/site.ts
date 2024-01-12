export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TeraUI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://teraui.org/twitter-cards/teraui.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://teraui.org",
  creator: "@getteraui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teraui.org",
    siteName: "TeraUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://teraui.org/twitter-cards/teraui.jpeg",
        width: 1200,
        height: 630,
        alt: "TeraUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeraUI - Beautiful, fast and modern React UI Library",
    description: "Make beautiful websites regardless of your design experience.",
    image: "https://teraui.org/twitter-cards/teraui.jpeg",
    creator: "@getteraui",
  },
  links: {
    github: "https://github.com/hieumau12/tera-ui",
    twitter: "https://twitter.com/getteraui",
    docs: "https://teraui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
};
