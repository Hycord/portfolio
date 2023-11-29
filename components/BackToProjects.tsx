import { FC } from "react"
import Link from "next/link"

import { buttonVariants } from "./ui/button"

interface BackToProjectsProps {}

const BackToProjects: FC<BackToProjectsProps> = ({}) => {
  return (
    <Link href="/projects" className={buttonVariants({})}>
      Back
    </Link>
  )
}

export default BackToProjects
