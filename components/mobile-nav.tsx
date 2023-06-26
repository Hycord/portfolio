"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const pathName = usePathname()

  return (
    <div className="flex gap-6 grow">
      {items?.length ? (
        <ScrollArea className="w-full h-[50%]">
          <nav className="flex flex-col gap-2">
            {items?.map(
              (item, index) =>
                item.href && (
                  <>
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        buttonVariants({
                          variant: pathName == item.href ? "outline" : "ghost",
                        })
                      )}
                    >
                      {item.title}
                    </Link>
                    {index % 2 === 0 && <Separator />}
                  </>
                )
            )}
          </nav>
        </ScrollArea>
      ) : null}
    </div>
  )
}
