"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./button"
import { Card } from "./card"

const carouselVariants = cva("relative items-center", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const carouselCardVariants = cva("carousel-card h-full w-full py-2 px-4", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface CarouselCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselCardVariants> {}

function CarouselCard({ className, variant, ...props }: CarouselCardProps) {
  return (
    <Card
      className={cn(
        carouselCardVariants({
          variant,
        }),
        className
      )}
      {...props}
    />
  )
}

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  cards: React.ReactNode[]
  showArrows?: boolean
}

function Carousel({
  cards,
  className,
  variant,
  showArrows = false,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])
  return (
    <div
      className={cn(
        carouselVariants({
          variant,
        }),
        className
      )}
      {...props}
    >
      <div
        onClick={scrollPrev}
        className={cn(
          "tansform absolute left-0 top-[50%] z-10 flex translate-y-[-50%] flex-row items-center justify-center p-2",
          showArrows ? "visible" : "hidden",
          prevBtnEnabled ? "cursor-pointer text-primary" : "text-primary/50",
        )}
      >
        <ChevronLeft />
      </div>
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full gap-2">{cards}</div>
      </div>
      <div
        onClick={scrollNext}
        className={cn(
          "tansform absolute right-0 top-[50%] z-10 flex translate-y-[-50%] flex-row items-center justify-center p-2",
          showArrows ? "visible" : "hidden",
          nextBtnEnabled ? "cursor-pointer text-primary" : "text-primary/50",
          
        )}
      >
        <ChevronRight />
      </div>
    </div>
  )
}

export { Carousel, carouselVariants, CarouselCard, carouselCardVariants }
