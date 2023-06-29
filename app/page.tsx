import Link from "next/link"

import { buttonVariants } from "../components/ui/button"
import { cn } from "../lib/utils"
import { ProjectInfoCard } from "../components/projects/ProjectInfoCard"

function Page() {
  return (
    <section className="container flex h-full w-full grow flex-col items-center gap-6 pb-8 pt-6 text-center md:px-10">
      <ProjectInfoCard />
    </section>
  )
}

export default Page
