"use client"

import { FC } from "react"
import { redirect } from "next/navigation"

interface GoToProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string
}

const GoTo: FC<GoToProps> = ({ url, ...props }) => {
  return <div onClick={() => {
    window.location.href = url;
  }} {...props} />
}

export default GoTo
