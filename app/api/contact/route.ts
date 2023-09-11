import { env } from "process"
import axios from "axios"
//@ts-ignore
import ipware from "ipware"
import z, { ZodError } from "zod"

import { ContactFormSubmission } from "../../lib/types/contact"

const schema = z.object({
  firstName: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1).max(1000),
  lastName: z.string().optional(),
})

class RateLimiter {
  private _ipList: { ip: string; expires: Date }[] = []
  constructor() {}

  public limit(ip: string): boolean {
    if (
      this._ipList.find(
        (p) => p.ip == ip && p.expires.getTime() > new Date().getTime()
      )
    ) {
      return true
    } else {
      this._ipList.push({
        ip,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 6),
      })
      return false
    }
  }
}

const rateLimiter = new RateLimiter()

export async function POST(req: Request) {
  try {
    const data = await req.json()

    console.log(data)
    const res = schema.parse(data)

    const webhookURL = env.CONTACT_WEBHOOK_URL
    if (!webhookURL)
      throw new Error("No contact webhook available. Please try again later")
    const header = req.headers.get("x-forwarded-for")?.split(":")
    const ip = header?.[header.length - 1] ?? "NO_IP_AVAILABLE"

    console.log(`Contact Form Submitted: ${ip}`)
    if (rateLimiter.limit(ip))
      return new Response("Rate Limit Reached.", {
        status: 429,
      })

    const webhookData: any = {
      content: `<@322144499734151169>`,
      embeds: [
        {
          title: "New Contact",
          fields: [
            {
              name: "First Name*",
              value: res.firstName,
            },
            {
              name: "Last Name",
              value: res.lastName ?? "N/A",
            },
            {
              name: "Email*",
              value: `\`\`\`${res.email}\`\`\``,
            },
            {
              name: "Message*",
              value: res.message,
            },
            {
              name: "IP Address",
              value: `\`${ip}\``,
            },
          ],
        },
      ],
      allowed_mentions: {
        users: ["322144499734151169"],
      },
    }

    await axios.post(webhookURL, webhookData)

    return new Response("Contact Data Submitted")
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response(`Invalid Params: ${e.message}`, {
        status: 400,
      })
    } else
      return new Response(`Unknown Error: ${e}`, {
        status: 400,
      })
  }
}
