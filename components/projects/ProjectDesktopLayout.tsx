import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { ProjectInfoCard } from "./ProjectInfoCard";

export function ProjectDesktopLayout() {
  return (
    <section className="hidden grow flex-row items-center md:flex">
      <div className={cn("grow bg-accent  transition-all duration-1000 text-accent-foreground p-4 flex items-center justify-center", "h-full")}>
        <ProjectInfoCard />
      </div>
      <Separator orientation="vertical" />
      <div className={cn("p-4", "h-full w-[66%]")}>
        Experience Coming Soon!
      </div>
    </section>
  )
}
