import { Star } from "lucide-react"

type RoomSkeletonCardProps = {
  image: string
  title: string
  price: string
  rating: string
}

export const RoomSkeletonCard = ({
  image,
  title,
  price,
  rating,
}: RoomSkeletonCardProps) => {
  return (
    <article className="min-w-0 flex-[0_0_calc((100%-80px)/5)]">
      <img
        src={image}
        alt={title}
        className="block aspect-square w-full rounded-xl object-cover"
      />

      <h3 className="mt-2 line-clamp-2 text-sm font-medium">{title}</h3>

      <div className="mt-1 flex items-center gap-2 text-[13px]">
        <span>{price}</span>

        <span className="flex items-center gap-0.5">
          <Star
            className="mb-0.75 size-3 fill-[#222] text-[#222]"
            strokeWidth={0}
          />
          {rating}
        </span>
      </div>
    </article>
  )
}
