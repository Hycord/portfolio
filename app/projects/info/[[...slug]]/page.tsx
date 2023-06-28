import * as React from "react"
import { redirect } from "next/navigation"
import { allDocuments } from "contentlayer/generated"

import { Mdx } from "../../../../components/Mdx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocuments.find((doc) => doc.slugAsParams == slug)
  if (!doc) {
    redirect("/projects")
  }
  return doc
}

export default async function Page({ params }: PageProps) {
  if (!params.slug) redirect("/projects");
  const doc = await getDocFromParams(params.slug)

  const date = doc?.date ? new Date(doc.date) : null

  return (
    <div className="flex w-full flex-col items-center">
      <Card className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
        <CardHeader>
          <CardTitle>
            {doc.title}{" "}
            <span className="text-sm text-muted">
              {date?.toLocaleDateString()}
            </span>
          </CardTitle>
          <CardDescription>{doc.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Mdx code={doc.body.code} />
        </CardContent>
        <CardFooter>
          <p>
            {doc.date} {doc.tags?.map((t) => <>{t}, </>) ?? <></>}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
