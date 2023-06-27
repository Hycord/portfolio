"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  // return (
  //   <div className="flex gap-6 md:gap-10">
  //     <Link href="/" className="flex items-center space-x-2">
  //       <Icons.logo className="h-6 w-6" />
  //       <span className="inline-block font-bold">{siteConfig.name}</span>
  //     </Link>
  //     {items?.length ? (
  //       <nav className="flex gap-6">
  //         {items?.map(
  //           (item, index) =>
  //             item.href && (
  //               <Link
  //                 key={index}
  //                 href={item.href}
  //                 className={cn(
  //                   "flex items-center text-sm font-medium text-muted-foreground",
  //                   item.disabled && "cursor-not-allowed opacity-80"
  //                 )}
  //               >
  //                 {item.title}
  //               </Link>
  //             )
  //         )}
  //       </nav>
  //     ) : null}
  //   </div>
  // )
  const pathName = usePathname()
  return (
    <div className="hidden w-full pl-8 md:flex">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={"main_nav_"+index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium text-primary/50 transition-all hover:scale-110 hover:text-primary/75 ",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathName == item.href && "text-primary/75"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="hidden items-center space-x-1 md:flex">
          {siteConfig.socials.github && (
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          )}
          {siteConfig.socials.twitter && (
            <Link
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}
