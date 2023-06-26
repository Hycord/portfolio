"use client"

import * as React from "react"
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
  const pathName = usePathname()
  return (
    <div className="md:flex pl-8 w-full hidden">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium text-primary/50 hover:text-primary/75 hover:scale-110 transition-all ",
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
      <div className="flex items-center justify-end flex-1 space-x-4">
        <nav className="items-center hidden space-x-1 md:flex">
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
                <Icons.gitHub className="w-5 h-5" />
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
                <Icons.twitter className="w-5 h-5 fill-current" />
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
