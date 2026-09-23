"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { allPhotos } from "@/lib/photo-data"
import { GridDotsIcon } from "@/app/icons/icons"

export const Lightbox = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const photoParam = Number(searchParams.get("photo") ?? 1)

  const currentPhoto = Math.min(Math.max(photoParam, 1), allPhotos.length)

  const currentIndex = currentPhoto - 1

  const goToPhoto = (photo: number) => {
    router.push(`/?view=photos&photo=${photo}`, {
      scroll: false,
    })
  }

  const previous = () => {
    if (currentPhoto <= 1) return

    goToPhoto(currentPhoto - 1)
  }

  const next = () => {
    if (currentPhoto >= allPhotos.length) return

    goToPhoto(currentPhoto + 1)
  }

  const close = () => {
    router.push("/?view=photos", {
      scroll: false,
    })
  }

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previous()
      }

      if (event.key === "ArrowRight") {
        next()
      }

      if (event.key === "Escape") {
        close()
      }
    }

    window.addEventListener("keydown", handleKeyboard)

    return () => {
      window.removeEventListener("keydown", handleKeyboard)
    }
  }, [currentPhoto])

  return (
    <div className="fixed inset-0 z-140 flex items-center justify-center bg-white">
      {/* Header */}
      <header className="absolute top-0 right-0 left-0 z-10 flex h-18 items-center pr-6 pl-4">
        {/* Return to Photo Tour */}
        <button
          onClick={close}
          aria-label="Show all photos"
          className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f2f2f2]"
        >
          <GridDotsIcon className="size-4.5" />
        </button>

        {/* Right */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm">
            {currentPhoto} of {allPhotos.length}
          </span>

          <button
            onClick={close}
            aria-label="Close"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f2f2f2]"
          >
            <X className="size-5.5" strokeWidth={1.25} />
          </button>
        </div>
      </header>

      {/* Previous */}
      <button
        onClick={previous}
        disabled={currentPhoto === 1}
        aria-label="Previous photo"
        className="absolute top-1/2 left-5 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#222] bg-white transition-[background,transform] hover:bg-[#f7f7f7] active:-translate-y-1/2 active:scale-[0.92] disabled:cursor-default disabled:border-[#cccccc] disabled:opacity-30"
      >
        <ChevronLeft className="size-4.5" />
      </button>

      {/* Image */}
      <div className="flex size-full items-center justify-center px-24 pt-22 pb-20">
        <img
          key={currentPhoto}
          src={allPhotos[currentIndex]}
          alt={`Photo ${currentPhoto}`}
          className="max-h-full max-w-275 animate-in object-contain duration-300 fade-in"
        />
      </div>

      {/* Next */}
      <button
        onClick={next}
        disabled={currentPhoto === allPhotos.length}
        aria-label="Next photo"
        className="absolute top-1/2 right-5 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#222] bg-white transition-[background,transform] hover:bg-[#f7f7f7] active:-translate-y-1/2 active:scale-[0.92] disabled:cursor-default disabled:border-[#cccccc] disabled:opacity-30"
      >
        <ChevronRight className="size-4.5" />
      </button>
    </div>
  )
}
