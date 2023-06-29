"use client"

import { FC, useEffect } from "react"
import { useRouter } from "next/navigation"

import { cn } from "../lib/utils"
import { Button, buttonVariants } from "./ui/button"

interface GoToProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  url: string
}

const GoTo: FC<GoToProps> = ({ url, ...props }) => {
  const { push, prefetch } = useRouter()

  useEffect(() => {
    prefetch(url)
    console.log("prefetching", url)
  }, [prefetch, url])

  return (
    <div
      onClick={() => {
        push(url)
      }}
      {...props}
      className={cn(props.className, "cursor-pointer")}
    />
  )
}

export default GoTo
