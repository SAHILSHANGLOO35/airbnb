import { ContentLaurel } from "@/app/icons/icons"
import { Star } from "lucide-react"

export const GuestFavouriteBanner = () => {
  return (
    <div className="mt-2 flex items-center gap-5.5 rounded-2xl border border-[#dddddd] px-7 py-4">
      <div className="flex shrink-0 items-center gap-1 text-[#222]">
        <ContentLaurel className="h-8 w-5 shrink-0" />

        <span className="text-center text-[15px] leading-[1.15] font-medium">
          Guest
          <br />
          favourite
        </span>

        <ContentLaurel className="h-8 w-5 shrink-0 -scale-x-100" />
      </div>

      <p className="flex-1 text-sm leading-[1.3]">
        One of the most loved homes on Airbnb,
        <br />
        according to guests
      </p>

      <div className="flex shrink-0 items-center gap-5.5">
        <div className="text-center">
          <p className="text-xl font-bold">4.95</p>

          <div className="mt-0.5 flex justify-center gap-0.5 text-[#222]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-2.5 fill-current"
                strokeWidth={0}
              />
            ))}
          </div>
        </div>

        <div className="h-8.5 w-px bg-[#dddddd]" />

        <div className="text-center">
          <p className="text-xl font-bold">19</p>
          <p className="text-[13px] font-medium">Reviews</p>
        </div>
      </div>
    </div>
  )
}
