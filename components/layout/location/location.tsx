import { ChevronRight, Minus, Plus, Search } from "lucide-react"

import { Container } from "../container"
import { HomeIcon } from "@/app/icons/icons"

export const Location = () => {
  return (
    <section id="location">
      <Container>
        <div className="border-b border-[#ebebeb] py-12">
          <h2 className="mb-6 text-[22px] leading-6.5 font-medium">
            Where you'll be
          </h2>

          <p className="mb-6 text-base">Candolim, Goa, India</p>

          {/* Map */}
          <div className="relative h-120 overflow-hidden rounded-xl bg-[#e9f0e4]">
            {/* Blue area */}
            <div
              className="absolute inset-y-0 left-0 w-[40%] bg-[#acd3e6]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)",
              }}
            />

            {/* Green map areas */}
            <div className="absolute top-[30%] left-[28%] size-24 rounded-full bg-[#cfe3c8]" />

            <div className="absolute top-[48%] left-[66%] size-32 rounded-full bg-[#cfe3c8]" />

            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(180,180,170,.5) 1px, transparent 1px), linear-gradient(0deg, rgba(180,180,170,.35) 1px, transparent 1px)",
                backgroundSize: "90px 90px",
              }}
            />

            {/* Search button */}
            <button
              aria-label="Search map"
              className="absolute top-3 left-3 flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-white shadow-[0_2px_6px_#0003]"
            >
              <Search className="size-4" strokeWidth={1.8} />
            </button>

            {/* Zoom controls */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button
                aria-label="Zoom in"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border-0 bg-white shadow-[0_2px_6px_#0003]"
              >
                <Plus className="size-4" />
              </button>

              <button
                aria-label="Zoom out"
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg border-0 bg-white shadow-[0_2px_6px_#0003]"
              >
                <Minus className="size-4" />
              </button>
            </div>

            {/* Property pin */}
            <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#222] text-white shadow-[0_4px_12px_#0000004d]">
              <HomeIcon className="size-14" strokeWidth={1.8} />
            </div>
          </div>

          {/* Map note */}
          <p className="mt-4.5 text-sm text-[#222]">
            Exact location will be provided after booking.
          </p>

          {/* Neighbourhood */}
          <div className="mt-10">
            <h3 className="mb-3 text-lg font-medium">
              Neighbourhood highlights
            </h3>

            <p className="text-[15px] leading-normal">
              Located in the heart of Candolim, Amor de Goa offers a peaceful
              stay with easy access to beaches, cafés, and popular attractions.
            </p>

            <button className="mt-3 inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-[16px] font-semibold underline underline-offset-2">
              Show more
              <ChevronRight className="size-5.5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
