"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { siteConfig } from "../config/site"
import { cn } from "../lib/utils"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"

export function ToggleNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({
            variant: "outline",
          })
        )}
        name="Toggle Navigation Menu"
      >
        {/* <MenuIcon /> */}
        <Icons.navToggle />
      </SheetTrigger>
      <SheetContent>
        <Link
          href="/"
          className="inline-block items-center space-x-2 whitespace-nowrap font-bold"
        >
          <SheetHeader>{siteConfig.name}</SheetHeader>
        </Link>
        {/* <SheetDescription> */}
        <MobileNav items={siteConfig.mobileNav} />
        {/* </SheetDescription> */}

        <SheetFooter>
          <nav className="flex items-center space-x-1 transition-none">
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
                  <Icons.github className="h-5 w-5" />
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
