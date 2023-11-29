"use client"

import { useMemo } from "react"

import { Project, allDocuments } from "../../.contentlayer/generated"
import { ProjectShowcase } from "../../components/ProjectShowcase"

export default function Page() {
  return (
    <>
      <section className="grid max-h-full w-full grid-cols-1 gap-4 overflow-scroll p-4 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <div className="grid max-h-full w-full grid-cols-1 gap-4 overflow-scroll p-4 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> */}
        {allDocuments
          .filter((doc) => doc.type == "Project" && doc.public)
          .map((doc) => (
            <ProjectShowcase key={doc.slugAsParams} doc={doc as Project} />
          ))}
        {/* </div> */}
      </section>
    </>
  )
}
