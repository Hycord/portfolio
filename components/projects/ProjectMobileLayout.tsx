import { cn } from "../../lib/utils"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

export function ProjectMobileLayout() {
  return (
    <section className="flex h-full grow flex-col justify-center md:hidden">
      <div className={cn("flex w-full grow items-center justify-center border-r bg-accent p-4 text-accent-foreground")}>
        <ProjectInfoCard />
      </div>
      <Separator />
      <div className={cn("flex min-h-[80%] w-full grow p-4")}>
        Experience Coming Soon!
      </div>
    </section>
  )
}
