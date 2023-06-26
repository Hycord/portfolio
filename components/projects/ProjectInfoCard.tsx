import { Link } from "lucide-react"

import { siteConfig } from "../../config/site"
import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

export function ProjectInfoCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 whitespace-nowrap text-center">
      <h1 className="text-xl font-bold sm:text-3xl">{siteConfig.info.title}</h1>
      <p className="text-md sm:text-lg">{siteConfig.info.description}</p>
      <div className="flex w-full items-center justify-around">
        <span className="flex gap-2">
          {siteConfig.socials.github && (
            <Link href={siteConfig.socials.github} target="_blank">
              <div className={buttonVariants()}>
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          )}
          {siteConfig.socials.twitter && (
            <Link href={siteConfig.socials.twitter} target="_blank">
              <div className={buttonVariants({})}>
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}
