
export type SiteConfig = typeof siteConfig

export const siteConfig: {
  name: string
  description: string
  mainNav: {
    title: string
    href: string
    disabled?: boolean
    external?: boolean
  }[]
  mobileNav: {
    title: string
    href: string
    disabled?: boolean
    external?: boolean
  }[]
  socials: {
    twitter?: string
    github?: string
    discord?: string
    email?: string
  }
  info: {
    title: string
    description: string
    image: string
  }
} = {
  info: {
    title: "Masen Toplak",
    description: "Full-Stack Software Engineer",
    image: "https://hycord.com/images/logo.png",
  },
  name: "Hycord's Portfolio",
  description: "Portfolio website coming soon.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  mobileNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  socials: {
    twitter: "https://twitter.com/ignhycord",
    github: "https://github.com/hycord",
  },
}
