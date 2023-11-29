import { FC } from "react"
import Link from "next/link"

interface PathNavigatorProps {
  links: {
    name: string
    url: string
  }[]
}

const PathNavigator: FC<PathNavigatorProps> = ({ links }) => {
  return (
    <div className="sm:text-md flex w-full items-center whitespace-nowrap border-b border-border bg-background p-4">
      {links.map((link, i, r) => (
        <div
          key={"path_nav_" + links.map((v) => v.name.split(" ").join("")) + i}
          className="flex"
        >
          {i !== r.length && (
            <div className="flex items-center justify-center py-2">
              <span className="mx-2">/</span>
            </div>
          )}
          <div className="flex items-center justify-center p-2">
            <Link href={link.url}>{link.name}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PathNavigator
