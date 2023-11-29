import React, { FC, useEffect, useMemo, useState } from "react"
import Image from "next/image"
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
  Project,
  allDocuments,
} from "../.contentlayer/generated"
import { cn, stringToHex } from "../lib/utils"
import GoTo from "./GoTo"
import { Badge, badgeVariants } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Carousel, CarouselCard } from "./ui/carousel"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

interface ProjectShowcaseProps {
  doc: Project
  noWrap?: boolean
  className?: string
  noBorder?: boolean
}

const ProjectShowcaseWrapper: FC<{
  children: React.ReactNode
  url: string
  className?: string
  noBorder?: boolean
}> = ({ children, url, noBorder, className }) => {
  return (
    <GoTo url={url}>
      <Card
        noBorder={noBorder}
        className={cn(
          "flex h-full flex-col transition-transform hover:scale-105 hover:cursor-pointer",
          className
        )}
      >
        {children}
      </Card>
    </GoTo>
  )
}

const ProjectShowcase: FC<ProjectShowcaseProps> = ({
  doc,
  noWrap = false,
  className,
  noBorder,
}) => {
  const date = doc?.date ? new Date(doc.date).toLocaleDateString() : null
  const images = doc?.images ?? null

  const Content = () => (
    <>
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
            }, [])}
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
          <div className="flex flex-col gap-2 "></div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex grow items-center justify-center">
        {images ? (
          <Carousel
            className="w-full"
            showArrows={false}
            cards={[
              images.map((project) => (
                <CarouselCard key={project} className="z-10">
                  <div className="flex aspect-square items-center justify-center overflow-hidden">
                    <Image
                      alt="Example Image"
                      src={project}
                      width={500}
                      height={500}
                      // className="h-full"
                    />
                  </div>
                  {/* <GoTo
                url={project.slug}
                className={cn(
                  "flex w-full flex-row items-center justify-end gap-2"
                )}
              >
                View Project <ExternalLink />
              </GoTo> */}
                </CarouselCard>
              )),
            ]}
          />
        ) : (
          <>This project does not have any images.</>
        )}
      </CardContent>
      {date ? (
        <CardFooter>
          <p className={cn("text-smibold text-sm text-muted-foreground")}>
            {date}
          </p>
        </CardFooter>
      ) : (
        <></>
      )}
    </>
  )

  return noWrap ? (
    <Content />
  ) : (
    <ProjectShowcaseWrapper
      className={className}
      url={doc.slug}
      noBorder={noBorder}
    >
      <Content />
    </ProjectShowcaseWrapper>
  )
}

export { ProjectShowcase }
