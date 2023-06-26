import { ProjectDesktopLayout } from "../../components/projects/ProjectDesktopLayout"
import { ProjectMobileLayout } from "../../components/projects/ProjectMobileLayout"

export default function Page() {
  return (
    <>
      <ProjectMobileLayout />
      <ProjectDesktopLayout />
    </>
  )
}
