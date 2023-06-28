"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const pathName = usePathname()

  return (
    <div className="flex grow gap-6">
      {items?.length ? (
        <ScrollArea className="w-full">
          <nav className="flex flex-col gap-2">
            {items?.map(
              (item, index) =>
                item.href && (
                  <>
                    <Link
                      key={"mobile_nav_button_" + index}
                      href={item.href}
                      className={cn(
                        buttonVariants({
                          variant: pathName == item.href ? "outline" : "ghost",
                        })
                      )}
                    >
                      {item.title}
                    </Link>
                    {index % 2 === 0 && (
                      <Separator key={"mobile_nav_separator_" + index} />
                    )}
                  </>
                )
            )}
          </nav>
        </ScrollArea>
      ) : null}
    </div>
  )
}
