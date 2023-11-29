import "@/app/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import BackToProjects from "../../components/BackToProjects"
import { ProjectInfoCard } from "../../components/projects/ProjectInfoCard"
import ProjectPathNavigator from "../../components/projects/ProjectPathNavigator"
import { Separator } from "../../components/ui/separator"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-full w-screen grow flex-col items-center md:flex-row">
      {/* <div
        className={cn(
          "flex grow items-center justify-center bg-accent p-4 text-accent-foreground",
          "h-[33%] max-h-[33%] w-full md:h-full md:max-h-full md:w-[33%]"
        )}
      >
        <ProjectInfoCard />
      </div>
      <Separator orientation="vertical" className="hidden md:!hidden" />
      <Separator orientation="horizontal" className="md:hidden" /> */}

      <div className="relative flex h-full max-h-full w-full grow flex-col">
        <div className={"flex h-full w-full grow flex-col"}>
          <div className="sticky top-0 w-full">
            <ProjectPathNavigator />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
