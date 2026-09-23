"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

export const SubNav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const overview = document.getElementById("overview")

      if (!overview) return

      const position = overview.getBoundingClientRect()

      setShow(position.top <= 0)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-45 border-b border-[#ebebeb] bg-white transition-[transform,opacity] duration-250 ease-in-out ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-16.5 max-w-7xl items-center justify-between px-20">
        {/* Links */}
        <div className="flex gap-1">
          <a
            href="#photos"
            className="relative px-2 py-5.5 text-sm font-medium text-[#222] hover:text-black"
          >
            Photos
          </a>

          <a
            href="#amenities"
            className="relative px-2 py-5.5 text-sm font-medium text-[#222] hover:text-black"
          >
            Amenities
          </a>

          <a
            href="#reviews"
            className="relative px-2 py-5.5 text-sm font-medium text-[#222] hover:text-black"
          >
            Reviews
          </a>

          <a
            href="#location"
            className="relative px-2 py-5.5 text-sm font-medium text-[#222] hover:text-black"
          >
            Location
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <div className="text-right text-[13px] leading-[1.2]">
            <p className="text-[15px] font-medium">
              ₹28,499{" "}
              <span className="text-[13px] font-normal">for 5 nights</span>
            </p>

            <div className="mt-0.5 flex items-center justify-end gap-1 text-[13px] text-[#222]">
              <Star
                className="size-3.25 fill-[#222] text-[#222]"
                strokeWidth={0}
              />

              <span>4.95</span>

              <span>·</span>

              <span>19 reviews</span>
            </div>
          </div>

          <button className="h-10 cursor-pointer rounded-full bg-[linear-gradient(to_right,#e61e4d_0%,#e31c5f_50%,#d70466_100%)] px-5 text-sm font-medium text-white [transition:filter_0.15s,transform_0.05s] hover:bg-[linear-gradient(to_right,#d81b5f_0%,#c31a5b_50%,#bd0463_100%)] active:scale-[0.985]">
            Reserve
          </button>
        </div>
      </div>
    </nav>
  )
}
