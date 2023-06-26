import { cn } from "../../lib/utils"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

export function ProjectMobileLayout() {
  return (
    <section className="flex grow flex-col justify-center md:hidden">
      <div className={cn("grow bg-accent  transition-all duration-1000 text-accent-foreground p-4 flex items-center justify-center", "w-full border-r")}>
        <ProjectInfoCard />
      </div>
      <Separator />
      <div className={cn("p-4", "h-[70%] w-full")}>
        Experience Coming Soon!
      </div>
    </section>
  )
}
