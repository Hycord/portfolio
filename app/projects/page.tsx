import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "../../components/icons"
import { Separator } from "../../components/ui/separator"
import { cn } from "../../lib/utils"

export default function IndexPage() {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  )
}
const InfoCard = () => (
  <div className="flex flex-col items-center justify-center text-center whitespace-nowrap gap-2">
    <h1 className="sm:text-3xl text-xl font-bold">{siteConfig.info.title}</h1>
    <p className="sm:text-lg text-md">{siteConfig.info.description}</p>
    <div className="flex w-full justify-around items-center">
      <span className="flex gap-2">
        {siteConfig.socials.github && (
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <div className={buttonVariants()}>
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
            <div className={buttonVariants({})}>
              <Icons.twitter className="w-5 h-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        )}
      </span>
    </div>
  </div>
)

const sharedInfoClasses =
  "grow bg-accent  transition-all duration-1000 text-accent-foreground p-4 flex items-center justify-center"
const sharedProjectClasses = "p-4"

const MobileLayout = () => (
  <section className="flex flex-col justify-center grow md:hidden">
    <div className={cn(sharedInfoClasses, "w-full border-r")}>
      <InfoCard />
    </div>
    <Separator />
    <div className={cn(sharedProjectClasses, "w-full h-[70%]")}>
      Coming Soon!
    </div>
  </section>
)

const DesktopLayout = () => (
  <section className="md:flex flex-row items-center grow hidden">
    <div className={cn(sharedInfoClasses, "h-full")}>
      <InfoCard />
    </div>
    <Separator orientation="vertical" />
    <div className={cn(sharedProjectClasses, "h-full w-[66%]")}>
      Coming Soon!
    </div>
  </section>
)
