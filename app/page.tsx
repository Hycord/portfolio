import Link from "next/link"

import { buttonVariants } from "../components/ui/button"
import { cn } from "../lib/utils"

function Page() {
  return (
    <section className="container flex h-full w-full grow flex-col items-center gap-6 pb-8 pt-6 text-center md:px-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 text-3xl font-semibold capitalize">
        There will be more content here soon!
      </div>
      <span className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
        <Link
          href={"/projects"}
          className={cn(
            buttonVariants({
              size: "lg",
            }),
            "text-lg"
          )}
        >
          Projects
        </Link>
        <Link
          href={"https://github.com/hycord/portfolio"}
          target={"_blank"}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "text-lg"
          )}
        >
          Portfolio Repository
        </Link>
      </span> 
      <iframe
        src="https://discord.com/widget?id=1034684270817591306&theme=dark"
        width="300"
        height="400"
        allowTransparency={true}
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </section>
  )
}

export default Page
