import type { Metadata, Viewport } from "next";
import { SITE } from "./site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: Job application coach`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name}: Job application coach`,
    description: SITE.description,
    url: SITE.url,
  },
};

export const buildPageMetadata = function (page: { path: string; title: string; description: string }): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE.url}${page.path}` },
    openGraph: {
      title: `${page.title} · ${SITE.name}`,
      description: page.description,
      url: `${SITE.url}${page.path}`,
    },
  };
};
