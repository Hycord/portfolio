import { FC } from "react"
import {
  Document,
  DocumentMeta,
  GetDocumentTypeNamesGen,
} from "contentlayer/core"
import { DocumentType } from "contentlayer/source-files"

import {
  DocumentTypeNames,
  DocumentTypes,
  allDocuments,
} from "../.contentlayer/generated"
import { cn } from "../lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Link from "next/link"

interface ProjectShowcaseProps {
  doc: DocumentTypes
}

const ProjectShowcaseWrapper: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <Card className={cn("flex aspect-[3/4] flex-col")}>{children}</Card>
}

const ProjectShowcase: FC<ProjectShowcaseProps> = ({ doc }) => {
  if (!doc) return <>Invalid Project</>

  const date = doc?.date ? new Date(doc.date).toLocaleDateString() : null
  const images = doc?.images ?? null

  return (
    <ProjectShowcaseWrapper>
      <CardHeader>
        <CardTitle>
          <Link href={doc.endUrl ?? doc.github ?? doc.slug}>{doc.title}</Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="grow"></CardContent>
      {date ? (
        <CardFooter>
          <p className={cn("text-smibold text-sm text-muted-foreground")}>
            {date}
          </p>
        </CardFooter>
      ) : (
        <></>
      )}
    </ProjectShowcaseWrapper>
  )
}

export { ProjectShowcase }
