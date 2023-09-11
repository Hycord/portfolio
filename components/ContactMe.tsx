"use client"

import { FC } from "react"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation'

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = ({}) => {

    const router = useRouter();
  return (
    <Button onClick={() => router.push("mailto:hello@masen.dev")}>
      Contact Me
    </Button>
  )
}

export default ContactMe
