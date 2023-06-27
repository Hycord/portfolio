import Link from "next/link"

import { buttonVariants } from "../components/ui/button"
import { cn } from "../lib/utils"

function Page() {
  return (
    <section className="container flex flex-col text-center items-center w-full h-full gap-6 pt-6 pb-8 md:px-10 grow">
      <div className="flex max-w-[980px] flex-col items-start gap-2 text-3xl font-semibold capitalize">
        There will be more content here soon!
      </div>
      <span className="flex flex-col justify-center sm:flex-row sm:items-center gap-4">
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
    </section>
  )
}

export default Page
