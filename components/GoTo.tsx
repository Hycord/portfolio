"use client"

import { FC } from "react"
import { redirect } from "next/navigation"

import { cn } from "../lib/utils"

interface GoToProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string
}

const GoTo: FC<GoToProps> = ({ url, ...props }) => {
  return (
    <div
      onClick={() => {
        window.location.href = url
      }}
      {...props}
      className={cn(props.className)}
    />
  )
}

export default GoTo
