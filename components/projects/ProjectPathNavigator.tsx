"use client"

import { FC } from "react"
import { usePathname } from "next/navigation"

import { Project, allDocuments } from "../../.contentlayer/generated"
import PathNavigator from "../PathNavigator"

interface ProjectPathNavigatorProps {}

const ProjectPathNavigator: FC<ProjectPathNavigatorProps> = ({}) => {
  const path = usePathname()
  const pathParts = path.split("/").filter((p) => p !== "")
  const [projectPathPart, infoPathPart, slugPathPart] = [
    pathParts[0] == "projects" ? true : false,
    pathParts[1] == "info" ? true : false,
    pathParts[2],
  ]

  if (!projectPathPart) return <></>
  if (!slugPathPart)
    return <PathNavigator links={[{ name: "Projects", url: "/projects" }]} />

  const doc = allDocuments.find(
    (doc) =>
      doc.slugAsParams == slugPathPart && doc.type == "Project" && doc.public
  ) as Project

  if (!doc)
    return <PathNavigator links={[{ name: "Projects", url: "/projects" }]} />

  return (
    <PathNavigator
      links={[
        { name: "Projects", url: "/projects" },
        { name: doc.title, url: "/projects/info/" + doc.slugAsParams },
      ]}
    />
  )
}

export default ProjectPathNavigator
