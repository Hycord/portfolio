import { ProjectDesktopLayout } from "@/components/projects/ProjectDesktopLayout"
import { ProjectMobileLayout } from "@/components/projects/ProjectMobileLayout"

function Page() {
  return (
    <>
      <ProjectMobileLayout />
      <ProjectDesktopLayout />
    </>
  )
}

export default Page;