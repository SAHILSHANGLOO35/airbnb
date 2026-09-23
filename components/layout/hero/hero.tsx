"use client"

import { Container } from "../container"
import Link from "next/link"
import { GridDotsIcon, HeartIcon, ShareIcon } from "@/app/icons/icons"
import { useToast } from "@/components/toast/toast-provider"
import { useState } from "react"

export const Hero = () => {
  const [saved, setSaved] = useState(false)

  const { showToast } = useToast()

  const handleShare = () => {
    showToast("Share options")
  }

  const handleSave = () => {
    const nextSaved = !saved

    setSaved(nextSaved)

    showToast(nextSaved ? "Added to wishlist" : "Removed from wishlist")
  }

  return (
    <Container className="pt-8 pb-12">
      <div className="flex w-full items-center justify-between" id="photos">
        <h1 className="text-[26px] leading-7.5 font-medium">
          Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
        </h1>

        <div className="flex shrink-0 gap-0.5">
          <button
            className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-transparent px-2.5 py-2 text-sm font-medium transition-[background,transform] duration-150 hover:bg-[#f2f2f2] active:scale-[0.96]"
            onClick={handleShare}
          >
            <ShareIcon className="size-4" />
            <span className="underline underline-offset-2">Share</span>
          </button>

          <button
            className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-transparent px-2.5 py-2 text-sm font-medium transition-[background,transform] duration-150 hover:bg-[#f2f2f2] active:scale-[0.96]"
            onClick={handleSave}
          >
            <HeartIcon
              className={`size-4 transition-colors ${
                saved
                  ? "fill-[#ff385c] text-[#ff385c]"
                  : "fill-transparent text-[#222]"
              }`}
            />
            <span className="underline underline-offset-2">Save</span>
          </button>
        </div>
      </div>

      <div className="relative pt-4.5">
        <div className="grid aspect-1120/494 grid-cols-[35fr_17fr_17fr] grid-rows-2 gap-2 overflow-hidden rounded-xl">
          {[
            "/images/hero/hero-1.jpeg",
            "/images/hero/hero-2.jpeg",
            "/images/hero/hero-3.jpeg",
            "/images/hero/hero-4.jpeg",
            "/images/hero/hero-5.jpeg",
          ].map((src, index) => (
            <Link
              key={src}
              href="/?view=photos"
              className={`group relative block cursor-pointer overflow-hidden border-0 bg-[#eee] p-0 active:scale-[0.997] ${
                index === 0 ? "row-span-2" : ""
              }`}
            >
              <img src={src} alt="" className="block size-full object-cover" />

              <span className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-black/10" />
            </Link>
          ))}
        </div>

        <Link
          href="/?view=photos"
          className="absolute right-6 bottom-6 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#222] bg-white px-3.75 py-1.75 text-xs leading-4 font-medium shadow-[0_2px_8px_#00000026] transition-[transform,background] duration-150 hover:bg-[#f7f7f7] active:scale-[0.96]"
        >
          <GridDotsIcon className="size-3.75" />
          Show all photos
        </Link>
      </div>
    </Container>
  )
}
