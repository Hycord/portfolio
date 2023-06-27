import { cn } from "../../lib/utils"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

export function ProjectMobileLayout() {
  return (
    <section className="flex grow flex-col h-full justify-center md:hidden">
      <div className={cn("flex w-full grow items-center justify-center border-r bg-accent p-4 text-accent-foreground")}>
        <ProjectInfoCard />
      </div>
      <Separator />
      <div className={cn("p-4 flex grow w-full min-h-[80%]")}>
        Experience Coming Soon!
      </div>
    </section>
  )
}
