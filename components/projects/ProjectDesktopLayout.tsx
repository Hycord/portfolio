import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { ProjectInfoCard } from "./ProjectInfoCard";

function ProjectDesktopLayout() {
  return (
    <section className="hidden grow flex-row items-center md:flex">
      <div className={cn("flex grow  items-center justify-center bg-accent p-4 text-accent-foreground", "h-full")}>
        <ProjectInfoCard />
      </div>
      <Separator orientation="vertical" />
      <div className={cn("p-4", "h-full w-[66%]")}>
        Experience Coming Soon!
      </div>
    </section>
  )
}

export {
    ProjectDesktopLayout
}