import { allDocuments } from "../../.contentlayer/generated"
import { cn } from "../../lib/utils"
import { ProjectShowcase } from "../ProjectShowcase"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

function ProjectDesktopLayout() {
  return (
    <section className="h-full w-full grow">
      {/* <div
        className={cn(
          "flex grow  items-center justify-center bg-accent p-4 text-accent-foreground",
          "min-h-full w-[33%]"
        )}
      >
        <ProjectInfoCard />
      </div>
      <Separator orientation="vertical" /> */}
      <div className="grid max-h-full w-full grid-cols-2 gap-4 overflow-scroll p-4 lg:grid-cols-3 xl:grid-cols-4">
        {allDocuments.map((doc) => (
          <ProjectShowcase key={doc.slugAsParams} doc={doc} />
        ))}
      </div>
    </section>
  )
}

export { ProjectDesktopLayout }
