import "@/styles/globals.css";
import "@/styles/sandpack.css";
import {Metadata} from "next";
import {clsx} from "@tera-ui/shared-utils";
import {Analytics} from "@vercel/analytics/react";

import {Providers} from "./providers";

import {Cmdk} from "@/components/cmdk";
import manifest from "@/config/routes.json";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import {__PROD__} from "@/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TeraUI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "jrgarciadev",
      url: "https://jrgarciadev.com",
    },
  ],
  creator: "jrgarciadev",
  alternates: {
    canonical: "https://teraui.org",
    types: {
      "application/rss+xml": [{url: "https://teraui.org/feed.xml", title: "TeraUI RSS Feed"}],
    },
  },
  viewport:
    "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
          <div className="relative flex flex-col" id="app-container">
            <Navbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            {children}
            <Footer />
          </div>
          <Cmdk />
        </Providers>
        {__PROD__ && <Analytics />}
      </body>
    </html>
  );
}
