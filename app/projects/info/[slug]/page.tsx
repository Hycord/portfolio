import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Project, User, allDocuments } from "contentlayer/generated"
import { Link as LinkIcon } from "lucide-react"

import BackToProjects from "../../../../components/BackToProjects"
import GoTo from "../../../../components/GoTo"
import { Mdx } from "../../../../components/Mdx"
import { Icons } from "../../../../components/icons"
import ProjectPathNavigator from "../../../../components/projects/ProjectPathNavigator"
import { Badge } from "../../../../components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import { stringToHex } from "../../../../lib/utils"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string): Promise<Project> {
  const doc = allDocuments.find(
    (doc) => doc.slugAsParams == slug && doc.type == "Project" && doc.public
  ) as Project
  if (!doc) {
    redirect("/projects")
  }
  return doc
}

async function getUserFromProject(project: Project): Promise<User | null> {
  const doc = allDocuments.find(
    (doc) => doc.slugAsParams == project.user && doc.type == "User"
  ) as User
  if (!doc) {
    return null
  }
  return doc
}

export default async function Page({ params }: PageProps) {
  if (!params.slug) redirect("/projects")
  const doc = await getDocFromParams(params.slug)
  const user = await getUserFromProject(doc)

  const date = doc?.date ? new Date(doc.date) : null

  return (
    <div className="flex h-full w-full flex-col items-center overflow-scroll md:flex-row md:items-start md:justify-center">
      <Card className="maw-w-full w-full md:sticky md:top-0 md:h-full md:w-[33%] md:max-w-[33%]">
        <CardHeader>
          <CardTitle>
            {doc.title}{" "}
            <p className="text-sm text-primary/60">
              {date?.toLocaleDateString()}
            </p>
          </CardTitle>
          <CardDescription>{doc.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {user && (
            <GoTo url={user.slug} className="flex gap-2">
              {user.profileImage && (
                <Image
                  alt="profile_image"
                  src={user.profileImage}
                  width={64}
                  height={64}
                  className={"h-10 w-10 rounded-full"}
                />
              )}
              {user.name}
            </GoTo>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <span className="flex flex-wrap items-center gap-2">
            {doc.tags?.map((t) => (
              <Badge
                key={t}
                style={{
                  backgroundColor: stringToHex(t),
                }}
                className="text-black"
                // variant={"outline"}
              >
                {t}
              </Badge>
            )) ?? <></>}
          </span>
          <div className="flex flex-col gap-2">
            {doc.publicGithub && doc.github && (
              <span className="flex gap-2 text-primary">
                <LinkIcon /> <Link href={doc.github}>Github</Link>
              </span>
            )}
            {doc.endUrl && (
              <span className="flex gap-2 text-primary">
                <LinkIcon /> <Link href={doc.endUrl}>End Product</Link>
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
      <Card className="min-h-full w-full">
        <CardContent>
          <Mdx code={doc.body.code} />
        </CardContent>
      </Card>
    </div>
  )
}
