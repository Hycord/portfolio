import { allDocuments } from "../../.contentlayer/generated"
import { cn } from "../../lib/utils"
import { ProjectShowcase } from "../ProjectShowcase"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

export function ProjectMobileLayout() {
  return (
    <section className="flex h-full grow flex-col justify-center md:hidden">
      <div
        className={cn(
          "sticky top-0 flex w-full grow items-center justify-center border-r bg-accent p-4 text-accent-foreground"
        )}
      >
        <ProjectInfoCard />
      </div>
      <Separator />
      <div className="grid h-[80%] w-full grid-cols-1 gap-4 overflow-scroll p-4 mobile:grid-cols-2">
        {allDocuments.map((doc) => (
          <ProjectShowcase key={doc.slugAsParams} doc={doc} />
        ))}
      </div>
    </section>
  )
}
