"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import { MenuIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { siteConfig } from "../config/site"
import { cn } from "../lib/utils"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
      >
        {/* <MenuIcon /> */}
        <Icons.navToggle />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block whitespace-nowrap font-bold">
              {siteConfig.name}
            </span>
          </Link>
        </SheetHeader>
        {/* <SheetDescription> */}
        <MobileNav items={siteConfig.mobileNav} />
        {/* </SheetDescription> */}

        <SheetFooter>
          <nav className="flex items-center space-x-1">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
