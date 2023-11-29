"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = ({}) => {
  const router = useRouter()
  return (
    <Button onClick={() => router.push("mailto:hello@masen.dev")}>
      Contact Me
    </Button>
  )
}

export default ContactMe
