import Link from "next/link"
import { siteConfig } from "../../config/site"
import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

export function ProjectInfoCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 whitespace-nowrap text-center">
      <h1 className="text-xl font-bold sm:text-3xl">{siteConfig.info.title}</h1>
      <p className="text-md md:text-lg">{siteConfig.info.description}</p>
      <div className="flex w-full items-center justify-around">
        <span className="flex gap-2">
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              rel="noreferrer"
              target="_blank"
            >
              <div className={buttonVariants()}>
                <Icons.github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
          )}
          {siteConfig.socials.twitter && (
            <a
              href={siteConfig.socials.twitter}
              rel="noreferrer"
              target="_blank"
            >
              <div className={buttonVariants({})}>
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
          )}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href="/contact" className={buttonVariants()}>Hire Me</Link>
        <Link href="/projects" className={buttonVariants({
          variant: "outline"
        })}>My Work</Link>
      </div>
    </div>
  )
}
