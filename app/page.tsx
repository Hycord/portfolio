import Link from "next/link"

import { ProjectInfoCard } from "../components/projects/ProjectInfoCard"
import { buttonVariants } from "../components/ui/button"
import { cn } from "../lib/utils"

function Page() {
  return (
    <section className="container flex h-full w-full grow flex-col items-center gap-6 pb-8 pt-6 text-center md:px-10">
      <ProjectInfoCard />
    </section>
  )
}

export default Page
