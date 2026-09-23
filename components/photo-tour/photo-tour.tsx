"use client"

import { allPhotos, rooms } from "@/lib/photo-data"
import { ChevronLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Lightbox } from "../lightbox"
import { HeartIcon, ShareIcon } from "@/app/icons/icons"

export const PhotoTour = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const photo = searchParams.get("photo")

  const scrollToRoom = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const openPhoto = (src: string) => {
    const index = allPhotos.indexOf(src)

    router.push(`/?view=photos&photo=${index + 1}`, {
      scroll: false,
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-120 flex flex-col bg-white">
        {/* Header */}
        <header className="relative flex h-22 shrink-0 items-center bg-white pr-8 pl-6">
          <button
            onClick={() => router.push("/")}
            aria-label="Back"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f2f2f2]"
          >
            <ChevronLeft className="size-7" strokeWidth={1} />
          </button>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-medium">
            Photo tour
          </h1>

          <div className="ml-auto flex gap-0.5">
            <button
              aria-label="Share"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f2f2f2]"
            >
              <ShareIcon className="size-4.5" strokeWidth={1.7} />
            </button>

            <button
              aria-label="Save"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#f2f2f2]"
            >
              <HeartIcon className="size-4.5" strokeWidth={1.7} />
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <main className="mx-auto max-w-5xl px-6 pb-24">
            {/* Category thumbnails */}
            <div className="mb-14 grid grid-cols-8 gap-3">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => scrollToRoom(room.id)}
                  className="group cursor-pointer border-0 bg-transparent p-0 text-left"
                >
                  <div className="aspect-106/100 overflow-hidden rounded-md">
                    <img
                      src={room.thumbnail}
                      alt={room.title}
                      className="size-full object-cover transition-[transform,filter] duration-200 group-hover:scale-[1.04] group-hover:brightness-[0.94]"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-4.5 text-[#717171]">
                    {room.title}
                  </p>
                </button>
              ))}
            </div>

            {/* Rooms */}
            <div className="flex flex-col gap-4">
              {rooms.map((room) => (
                <section
                  key={room.id}
                  id={room.id}
                  className="grid scroll-mt-6 grid-cols-2 items-start gap-x-15"
                >
                  {/* Left */}
                  <div className="sticky top-5">
                    <h2 className="text-[32px] leading-[1.1] font-medium tracking-[-0.02em]">
                      {room.title}
                    </h2>

                    {room.details && (
                      <p className="mt-2 text-base leading-[1.4] text-[#717171]">
                        {room.details}
                      </p>
                    )}
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-3">
                    {room.photos.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`grid gap-3 ${
                          row.length === 2 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {row.map((photo, photoIndex) => (
                          <button
                            key={`${photo}-${photoIndex}`}
                            onClick={() => openPhoto(photo)}
                            className="group relative aspect-3/2 cursor-pointer overflow-hidden rounded-lg border-0 bg-[#eeeeee] p-0"
                          >
                            <img
                              src={photo}
                              alt={room.title}
                              className="size-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                            />

                            <span className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-black/8" />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
      {photo && <Lightbox />}
    </>
  )
}
