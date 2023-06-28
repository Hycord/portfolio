import React, { FC, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  Document,
  DocumentMeta,
  GetDocumentTypeNamesGen,
} from "contentlayer/core"
import { DocumentType } from "contentlayer/source-files"
import { Link as LinkIcon } from "lucide-react"

import {
  DocumentTypeNames,
  DocumentTypes,
  allDocuments,
} from "../.contentlayer/generated"
import { cn, stringToHex } from "../lib/utils"
import { Badge, badgeVariants } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import GoTo from "./GoTo"

interface ProjectShowcaseProps {
  doc: DocumentTypes
}


const ProjectShowcaseWrapper: FC<{
  children: React.ReactNode
  url: string
}> = ({ children, url }) => {
  return (
    <GoTo url={url}>
      <Card
        className={cn(
          "flex aspect-[3/4] flex-col transition-transform hover:scale-105"
        )}
      >
        {children}
      </Card>
    </GoTo>
  )
}

const ProjectShowcase: FC<ProjectShowcaseProps> = ({ doc }) => {
  const date = doc?.date ? new Date(doc.date).toLocaleDateString() : null
  const images = doc?.images ?? null

  return (
    <ProjectShowcaseWrapper url={doc.slug}>
      <CardHeader>
        <CardTitle>{doc.title}</CardTitle>
        <CardDescription className="flex-wrap gap-2">
          {/* <span className="text-sm text-muted">tast</span> */}
          <div className="flex flex-wrap gap-2">
            {useMemo(() => {
              return doc.tags?.slice(0, 2).map((t) => (
                <Badge
                  key={"Project_showcase_badge_" + doc._id + t}
                  style={{
                    backgroundColor: stringToHex(t),
                  }}
                  className="rounded-full px-2 py-1 text-black"
                  // variant={"outline"}
                >
                  {t}
                </Badge>
              ))
            }, [doc.tags])}
            {(doc?.tags?.length ?? 0) > 2 && (
              <HoverCard>
                <HoverCardTrigger className={cn(badgeVariants())}>
                  {(doc.tags?.length ?? 0) > 2
                    ? "+" + ((doc.tags?.length ?? 0) - 2)
                    : ""}
                </HoverCardTrigger>
                <HoverCardContent>
                  {doc.tags?.slice(2).map((t) => (
                    <Badge
                      key={"Project_showcase_badge_" + doc._id + t}
                      style={{
                        backgroundColor: stringToHex(t),
                      }}
                      className="rounded-full px-2 py-1 text-black"
                      // variant={"outline"}
                    >
                      {t}
                    </Badge>
                  ))}
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
          <div className="flex flex-col gap-2 ">
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex grow items-center justify-center">There will be pictures<br />  here, soon...</CardContent>
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
