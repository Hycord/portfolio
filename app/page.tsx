import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { cn } from "../lib/utils"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center w-full h-full gap-6 pt-6 pb-8 md:px-10 grow">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        There will be more content here soon!
      </div>
      <span className="flex items-center gap-4">
        <Link href={"/projects"} className={cn(buttonVariants({}))}>
          Projects
        </Link>
        <Link
          href={"https://github.com/hycord/portfolio"}
          target={"_blank"}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Portfolio Repository
        </Link>
      </span>
    </section>
  )
}
