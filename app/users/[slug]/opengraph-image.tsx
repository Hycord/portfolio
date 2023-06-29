import Img from "next/image"
import { ImageResponse } from "next/server"

import { User, allDocuments } from "../../../.contentlayer/generated"

export const alt = `User Image`
export const contentType = "image/png"


async function getDocFromParams(slug: string): Promise<User | null> {
  const doc = allDocuments.find(
    (doc) => doc.type == "User" && doc.slugAsParams == slug
  ) as User

  if (!doc) {
    return null
  }
  return doc
}

export default async function Image({ params }: { params: { slug: string } }) {
  const doc = await getDocFromParams(params.slug)

  return new ImageResponse(<Img alt={alt} src={doc?.profileImage ?? ""} width={128} height={128} />)
}
