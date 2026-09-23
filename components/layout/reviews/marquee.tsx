export const Marquee = () => {
  const reviewMarquee = [
    {
      label: "Comfort",
      count: 6,
      image: "/images/marquee/comfort.png",
    },
    {
      label: "Accuracy",
      count: 5,
      image: "/images/marquee/accuracy.png",
    },
    {
      label: "Hot tub",
      count: 5,
      image: "/images/marquee/hot-tub.png",
    },
    {
      label: "Condition",
      count: 4,
      image: "/images/marquee/condition.png",
    },
    {
      label: "Hospitality",
      count: 8,
      image: "/images/marquee/hospitality.png",
    },
    {
      label: "Cleanliness",
      count: 4,
      image: "/images/marquee/cleanliness.png",
    },
    {
      label: "Amenities",
      count: 2,
      image: "/images/marquee/amenities.png",
    },
    {
      label: "Decor",
      count: 2,
      image: "/images/marquee/decor.png",
    },
    {
      label: "Indoor spaces",
      count: 2,
      image: "/images/marquee/indoor-spaces.png",
    },
    {
      label: "Location",
      count: 2,
      image: "/images/marquee/location.png",
    },
  ]

  return (
    <div className="flex scrollbar-none gap-3 overflow-x-auto pt-1 pb-7.5 [&::-webkit-scrollbar]:hidden">
      {reviewMarquee.map((chip) => (
        <div
          key={chip.label}
          className="flex shrink-0 items-center gap-2 rounded-2xl border border-[#dddddd] bg-white py-3.25 pr-4.5 pl-3.5 text-sm font-medium"
        >
          <img
            src={chip.image}
            alt=""
            className="block size-5 shrink-0 object-contain"
          />

          <span>{chip.label}</span>

          <span className="font-normal text-[#717171]">{chip.count}</span>
        </div>
      ))}
    </div>
  )
}
