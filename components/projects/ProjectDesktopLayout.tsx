import { allDocuments } from "../../.contentlayer/generated"
import { cn } from "../../lib/utils"
import { ProjectShowcase } from "../ProjectShowcase"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { ProjectInfoCard } from "./ProjectInfoCard"

function ProjectDesktopLayout() {
  return (
    <section className="hidden grow flex-row items-center md:flex">
      <div
        className={cn(
          "flex grow  items-center justify-center bg-accent p-4 text-accent-foreground",
          "h-full"
        )}
      >
        <ProjectInfoCard />
      </div>
      <Separator orientation="vertical" />
      <div className="grid max-h-screen w-[66%] grid-cols-2 gap-4 overflow-y-scroll px-4 lg:grid-cols-3 xl:grid-cols-4">
        {[
          ...allDocuments,
          ...allDocuments,
          ...allDocuments,
          ...allDocuments,
          ...allDocuments,
          ...allDocuments,
          ...allDocuments,
        ].map((doc) => (
          <ProjectShowcase key={doc.slugAsParams} doc={doc} />
        ))}
      </div>
    </section>
  )
}

export { ProjectDesktopLayout }
