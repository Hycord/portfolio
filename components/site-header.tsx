import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import { ToggleNav } from "./toggle-nav"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export function SiteHeader() {
  // return (
  //   <header className="sticky top-0 z-40 w-full border-b bg-background">
  //     <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
  //       <MainNav items={siteConfig.mainNav} />
  //     </div>
  //   </header>
  // )
  return (
    <header className="sticky top-0 z-40 h-16  w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <Link href="/" className="flex items-center space-x-2 transition-all hover:scale-110">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <span className="inline-block whitespace-nowrap font-bold">{siteConfig.name}</span>
        </Link> 

        <MainNav items={siteConfig.mainNav} />
        <div className="flex w-full items-center justify-end md:hidden">
          <ToggleNav />
        </div>
      </div>
    </header>
  )
}
