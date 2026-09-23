"use client"

import { useToast } from "@/components/toast/toast-provider"
import { ChevronDown, Flag } from "lucide-react"

export const RightHalf = () => {
  const { showToast } = useToast()

  const handleReserve = () => {
    showToast("You won't be charged yet")
  }

  return (
    <aside className="relative">
      <div className="sticky top-25">
        {/* Discount card */}
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#dddddd] bg-white p-4">
          <img
            src="/images/ui/discount.svg"
            alt=""
            className="size-8 shrink-0 object-contain"
          />

          <p className="flex-1 text-sm leading-4.5 text-[#222222]">
            Get 10% off your next stay.{" "}
            <button className="cursor-pointer font-medium underline underline-offset-2">
              Terms apply
            </button>
          </p>

          <button className="cursor-pointer rounded-lg bg-[#f7f7f7] px-3.5 py-2 text-sm font-medium hover:bg-[#f2f2f2]">
            Claim
          </button>
        </div>

        {/* Booking card */}
        <div className="rounded-xl border border-black/8 bg-white px-6 pt-5.5 pb-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
          {/* Price */}
          <div className="mb-4.5 flex items-baseline gap-1.5">
            <span className="text-[22px] font-medium underline underline-offset-2">
              ₹28,499
            </span>

            <span className="text-[15px] text-[#222222]">for 5 nights</span>
          </div>

          {/* Booking inputs */}
          <div className="overflow-hidden rounded-lg border border-[#b0b0b0]">
            {/* Dates */}
            <div className="grid grid-cols-2">
              <button className="cursor-pointer bg-transparent px-3 py-2.5 text-left">
                <span className="block text-[10px] font-bold tracking-[0.04em]">
                  CHECK-IN
                </span>

                <span className="mt-0.5 block text-sm">10/18/2026</span>
              </button>

              <button className="cursor-pointer border-l border-[#b0b0b0] bg-transparent px-3 py-2.5 text-left">
                <span className="block text-[10px] font-bold tracking-[0.04em]">
                  CHECKOUT
                </span>

                <span className="mt-0.5 block text-sm">10/23/2026</span>
              </button>
            </div>

            {/* Guests */}
            <button className="flex w-full cursor-pointer items-center justify-between border-t border-[#b0b0b0] bg-transparent px-3 py-2.5 text-left">
              <div>
                <span className="block text-[10px] font-bold tracking-[0.04em]">
                  GUESTS
                </span>

                <span className="mt-0.5 block text-sm">2 guests</span>
              </div>

              <ChevronDown className="size-4" strokeWidth={1.7} />
            </button>
          </div>

          {/* Cancellation */}
          <div className="my-4 rounded-lg bg-[#f7f7f7] px-2 py-2 text-center text-[13px] text-[#717171]">
            Free cancellation before{" "}
            <span className="font-medium text-[#222222]">17 October</span>
          </div>

          {/* Reserve */}
          <button
            className="h-12 w-full cursor-pointer rounded-full border-0 bg-[linear-gradient(to_right,#e61e4d_0%,#e31c5f_50%,#d70466_100%)] px-6 text-base font-medium text-white [transition:filter_0.15s,transform_0.05s] hover:bg-[linear-gradient(to_right,#d81b5f_0%,#c31a5b_50%,#bd0463_100%)] active:scale-[0.985]"
            onClick={handleReserve}
          >
            Reserve
          </button>

          <p className="mt-4 text-center text-sm text-[#717171]">
            You won't be charged yet
          </p>
        </div>

        {/* Report */}
        <div className="mt-6.5 flex items-center justify-center gap-2 text-sm text-[#717171]">
          <Flag className="size-4" />

          <button className="cursor-pointer underline underline-offset-2">
            Report this listing
          </button>
        </div>
      </div>
    </aside>
  )
}
