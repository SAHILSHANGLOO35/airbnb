import { Star } from "lucide-react"

const reviews = [
  {
    name: "Amit",
    sub: "2 months on Airbnb",
    date: "1 week ago",
    body: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    avatar: null,
    initial: "A",
    avatarBg: "#f3d7c4",
    showMore: false,
  },
  {
    name: "Aheesh",
    sub: "3 years on Airbnb",
    date: "2 weeks ago",
    body: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    avatar: "/images/avatars/rev1.jpeg",
    initial: null,
    showMore: true,
  },
  {
    name: "Samiksha",
    sub: "8 months on Airbnb",
    date: "May 2026",
    body: "the host nitish was really great help",
    avatar: "/images/avatars/rev2.jpeg",
    initial: null,
    showMore: false,
  },
  {
    name: "Vedant",
    sub: "4 years on Airbnb",
    date: "May 2026",
    body: `We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.

The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa.

The property was exactly as described, well-equipped, and offered a peaceful atmosphere.`,
    avatar: null,
    initial: "V",
    avatarBg: "#c9b6e4",
    showMore: true,
  },
  {
    name: "Vaibhav S",
    sub: "3 years on Airbnb",
    date: "May 2026",
    body: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    avatar: "/images/avatars/rev3.jpeg",
    initial: null,
    showMore: false,
  },
  {
    name: "Mohd",
    sub: "5 years on Airbnb",
    date: "May 2026",
    body: "Great place. Exactly as described in the listing.",
    avatar: "/images/avatars/rev4.jpeg",
    initial: null,
    showMore: false,
  },
]

export const ReviewGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-x-20 gap-y-12">
      {reviews.map((review) => (
        <article key={review.name}>
          {/* User */}
          <div className="mb-2.5 flex items-center gap-3">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.name}
                className="size-10.5 rounded-full object-cover"
              />
            ) : (
              <div
                className="flex size-10.5 items-center justify-center rounded-full text-[17px] font-medium"
                style={{ backgroundColor: review.avatarBg }}
              >
                {review.initial}
              </div>
            )}

            <div>
              <p className="text-[15px] font-medium">{review.name}</p>

              <p className="text-[13px] text-[#717171]">{review.sub}</p>
            </div>
          </div>

          {/* Rating + date */}
          <div className="mb-1.5 flex items-center gap-1.5 text-[13px]">
            <div className="flex gap-px">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-2.5 fill-[#222] text-[#222]"
                  strokeWidth={0}
                />
              ))}
            </div>

            <span>·</span>
            <span>{review.date}</span>
          </div>

          {/* Review body */}
          <p
            className={`text-[15px] leading-[1.4] whitespace-pre-line ${
              review.showMore ? "line-clamp-4" : ""
            }`}
          >
            {review.body}
          </p>

          {review.showMore && (
            <button className="mt-2 cursor-pointer border-0 bg-transparent p-0 text-[15px] font-medium underline underline-offset-2">
              Show more
            </button>
          )}
        </article>
      ))}
      <button className="w-fit cursor-pointer rounded-xl border border-[#222] bg-white px-5.75 py-3.25 text-base font-medium transition-[background,transform] duration-[150ms,50ms] hover:bg-[#f7f7f7] active:scale-[0.98]">
        Show all 19 reviews
      </button>
    </div>
  )
}
