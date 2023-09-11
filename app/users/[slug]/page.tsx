import * as React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Project, User, allDocuments } from "contentlayer/generated"
import { ExternalLink } from "lucide-react"

import GoTo from "../../../components/GoTo"
import { ProjectShowcase } from "../../../components/ProjectShowcase"
import { Icons } from "../../../components/icons"
import { Button, buttonVariants } from "../../../components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Carousel, CarouselCard } from "../../../components/ui/carousel"
import { cn } from "../../../lib/utils"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string): Promise<User> {
  const doc = allDocuments.find(
    (doc) => doc.type == "User" && doc.slugAsParams == slug
  ) as User

  if (!doc) {
    redirect("/")
  }
  return doc
}

export async function generateStaticParams() {
  return allDocuments
    .filter((doc) => doc.type == "User")
    .map((doc) => ({
      slug: doc.slugAsParams,
    }))
}

async function getProjectsForUser(user: User): Promise<Project[]> {
  return allDocuments.filter(
    (doc) =>
      doc.type == "Project" &&
      doc.public != "false" &&
      doc.user == user.slugAsParams
  ) as Project[]
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params.slug)
  return {
    title: `User - ${doc.name}`,
    description: doc.quote,
    icons: {
      icon: doc.profileImage,
      apple: doc.profileImage,
      href: doc.profileImage,
    },
    openGraph: {
      title: doc.name,
      description: doc.quote,
      images: [
        {
          url: doc.profileImage ?? "",
          width: 64,
          height: 64,
          alt: "profile_image",
        },
      ],
      type: "profile",
    },
  }
}

const SocialMedia = ({
  icon: Icon,
  title,
  url,
}: {
  icon: React.FC<any>
  title: string
  url: string
}) => {
  return (
    <GoTo url={url} className="grow cursor-pointer">
      <Button
        variant={"outline"}
        className="flex w-full items-center justify-start gap-2 text-primary"
      >
        <Icon className={"h-5 w-5"} /> <Link href={url}>{title}</Link>
      </Button>
    </GoTo>
  )
}

export default async function Page({ params }: PageProps) {
  if (!params.slug) redirect("/")
  const doc = await getDocFromParams(params.slug)
  const projects = await getProjectsForUser(doc)

  return (
    <div className="flex h-full w-full flex-col items-center overflow-scroll md:flex-row md:items-start md:justify-center">
      <Card className="maw-w-full w-full md:sticky md:top-0 md:h-full md:w-[66%] md:max-w-[66%] lg:w-[50%] lg:max-w-[50%]">
        <CardHeader className="flex flex-col items-center text-center">
          {doc.profileImage && (
            <Image
              alt="profile_image"
              src={doc.profileImage}
              width={256}
              height={256}
              className={
                "h-32 w-32 rounded-full border-2 border-solid border-accent"
              }
            />
          )}
          <CardTitle>{doc.name}</CardTitle>
          <CardDescription>{doc.quote}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-4">
          <span className="flex flex-wrap items-center gap-2"></span>
          <div className="flex w-full flex-col items-center justify-center">
            <div
              className={
                Object.keys(doc).filter((i) =>
                  [
                    "github",
                    "website",
                    "twitter",
                    "discord",
                    "instagram",
                    "tiktok",
                  ].includes(i)
                ).length == 1
                  ? "flex flex-col"
                  : "grid grid-cols-2 gap-2"
              }
            >
              {[
                "github",
                "website",
                "twitter",
                "discord",
                "instagram",
                "tiktok",
              ].map((key) => {
                if (doc[key as keyof typeof doc]) {
                  return (
                    <SocialMedia
                      key={key}
                      icon={Icons[key as keyof typeof Icons]}
                      title={key}
                      url={doc[key as keyof typeof doc] as string}
                    />
                  )
                }
              })}
            </div>
          </div>
          {projects.length > 0 && (
            <Carousel
              className="w-full"
              showArrows={projects.length > 1}
              cards={[
                projects.map((project) => (
                  <CarouselCard key={project.slugAsParams}>
                    <ProjectShowcase
                      doc={project}
                      noBorder
                      className="h-full"
                    />
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
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
