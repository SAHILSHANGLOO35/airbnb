"use client"

import { ChevronRight } from "lucide-react"
import React, { useState } from "react"

export const Description = () => {
  const [openPara, setOpenPara] = useState(false)

  return (
    <div className="py-8">
      <div className="mb-2 flex items-center gap-2.5 rounded-xl bg-[#f7f7f7] px-4.5 py-4 text-sm text-[#222]">
        <span>
          Some info has been automatically translated.{" "}
          <button className="cursor-pointer font-medium underline underline-offset-2">
            Show original
          </button>
        </span>
      </div>

      <p
        className={`text-base leading-6 ${
          openPara
            ? ""
            : "`mask-[linear-gradient(#000_62%,transparent)] max-h-[6.2em] overflow-hidden [-webkit-mask-image:linear-gradient(#000_62%,transparent)]"
        }`}
      >
        🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay
        in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi
        🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺,
        pet-friendly comfort 🐾, and stylish interiors. Just minutes from
        Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s
        ideal for couples seeking romance, relaxation, and a touch of luxury in
        North Goa. ❤️🌴
      </p>

      <button
        className="mt-3.5 inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-base font-medium text-[#222] underline underline-offset-[3px]"
        onClick={() => setOpenPara((prev) => !prev)}
      >
        {openPara ? "Show less" : "Show more"}

        <ChevronRight
          className={`size-5.5 transition-transform duration-180 ${
            openPara ? "rotate-90" : ""
          }`}
          strokeWidth={2}
        />
      </button>
    </div>
  )
}
