import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://pope2004.github.io"
  : "https://zhangpu-universe-portfolio.lush-bard-9036.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zhang Pu Universe · 张朴作品集",
  description: "张朴的产品、游戏与 AI 影像作品集。",
  openGraph: {
    title: "Zhang Pu Universe · 张朴作品集",
    description: "产品、游戏与 AI 影像，从想法到可运行作品。",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "Zhang Pu Universe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhang Pu Universe · 张朴作品集",
    description: "产品、游戏与 AI 影像，从想法到可运行作品。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
