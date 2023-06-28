"use client"

import { useMemo } from "react"

import { allDocuments } from "../../.contentlayer/generated"
import { ProjectShowcase } from "../../components/ProjectShowcase"
import { ProjectDesktopLayout } from "../../components/projects/ProjectDesktopLayout"
import { ProjectMobileLayout } from "../../components/projects/ProjectMobileLayout"

export default function Page() {
  return (
    <>
      <section className="grid max-h-full w-full grid-cols-1 gap-4 overflow-scroll p-4 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* <div className="grid max-h-full w-full grid-cols-1 gap-4 overflow-scroll p-4 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> */}
        {allDocuments.map((doc) => (
          <ProjectShowcase key={doc.slugAsParams} doc={doc} />
        ))}
        {/* </div> */}
      </section>
    </>
  )
}
