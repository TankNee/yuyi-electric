import { SiteConfig } from "@/types/siteConfig";
import { MdEmail, MdPhone } from "react-icons/md";

const baseSiteConfig = {
  name: "温州裕亿电器有限公司",
  description:
    "专业生产UK系列通用接线端子、接线端子排等电气连接产品，为客户提供高品质的电气解决方案。",
  url: "https://yuyi-electric.com",
  ogImage: "https://yuyi-electric.com/og.png",
  metadataBase: '/',
  keywords: ["接线端子", "UK系列", "通用接线端子", "电气连接", "温州裕亿电器", "接线端子排"],
  authors: [
    {
      name: "温州裕亿电器有限公司",
      url: "https://yuyi-electric.com",
      twitter: "https://yuyi-electric.com/contact",
    }
  ],
  creator: '温州裕亿电器',
  openSourceURL: 'https://github.com/yuyi-electric/landing-page',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'email', href: "mailto:info@yuyi-electric.com", icon: MdEmail },
    { name: 'phone', href: "tel:+86-13868776106", icon: MdPhone }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:info@yuyi-electric.com", icon: MdEmail },
    { name: 'phone', href: "tel:+86-13868776106", icon: MdPhone }
  ],
  footerProducts: [
    { url: '/products', name: 'UK系列通用接线端子' },
    { url: '/products', name: '接线端子排' },
    { url: '/products', name: '电气连接器' },
    { url: '/about', name: '关于我们' },
    { url: '/contact', name: '联系我们' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}