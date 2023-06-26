import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { MobileNav } from "./mobile-nav"
import { ToggleNav } from "./toggle-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:scale-110 transition-all">
          <Icons.logo className="w-6 h-6" />
          <span className="inline-block font-bold whitespace-nowrap">{siteConfig.name}</span>
        </Link>

        <MainNav items={siteConfig.mainNav} />
        <div className="flex w-full justify-end items-center md:hidden">
          <ToggleNav />
        </div>
      </div>
    </header>
  )
}
