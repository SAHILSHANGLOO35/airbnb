"use client"

import {
  CarIcon,
  CutleryIcon,
  HotTubIcon,
  NoCameraIcon,
  NoSmokingIcon,
  PawIcon,
  PoolIcon,
  SecurityCameraIcon,
  WifiIcon,
  WorkspaceIcon,
} from "@/app/icons/icons"
import { AmenitiesModal } from "@/components/amenity-modal"
import {
  BriefcaseBusiness,
  CarFront,
  Cctv,
  CookingPot,
  PawPrint,
  Waves,
  Wifi,
} from "lucide-react"
import { useState } from "react"

export const Offers = () => {
  const [showAmenities, setShowAmenities] = useState(false)

  return (
    <section className="border-y border-[#ebebeb] py-8" id="amenities">
      <h2 className="mb-6 text-[22px] leading-6.5 font-medium">
        What this place offers
      </h2>

      <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
        <div className="flex items-center gap-4 py-1 text-base">
          <CutleryIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Kitchen</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <WifiIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Wifi</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <WorkspaceIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Dedicated workspace</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <CarIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Free parking on premises</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <PoolIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Pool</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <HotTubIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Hot tub</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <PawIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Pets allowed</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base">
          <SecurityCameraIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span>Exterior security cameras on property</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base text-[#717171]">
          <NoCameraIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span className="line-through">Carbon monoxide alarm</span>
        </div>

        <div className="flex items-center gap-4 py-1 text-base text-[#717171]">
          <NoSmokingIcon className="size-6 shrink-0" strokeWidth={1.7} />
          <span className="line-through">Smoke alarm</span>
        </div>
      </div>

      <button
        onClick={() => setShowAmenities(true)}
        className="cursor-pointer rounded-xl border border-[#222] bg-white px-5.75 py-3.25 text-base font-medium transition-[background,transform] duration-[150ms,50ms] hover:bg-[#f7f7f7] active:scale-[0.98]"
      >
        Show all 50 amenities
      </button>

      <AmenitiesModal
        open={showAmenities}
        onClose={() => setShowAmenities(false)}
      />
    </section>
  )
}
