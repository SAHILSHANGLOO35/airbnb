import {
  CheckCircleIcon,
  KeyIcon,
  MapIcon,
  MessageIcon,
  SprayIcon,
  TagIcon,
} from "@/app/icons/icons"

const ratingItems = [
  {
    label: "Cleanliness",
    value: "5.0",
    icon: SprayIcon,
  },
  {
    label: "Accuracy",
    value: "5.0",
    icon: CheckCircleIcon,
  },
  {
    label: "Check-in",
    value: "5.0",
    icon: KeyIcon,
  },
  {
    label: "Communication",
    value: "5.0",
    icon: MessageIcon,
  },
  {
    label: "Location",
    value: "4.8",
    icon: MapIcon,
  },
  {
    label: "Value",
    value: "4.8",
    icon: TagIcon,
  },
]

const ratingBars = [
  { level: 5, width: "100%" },
  { level: 4, width: "6%" },
  { level: 3, width: "4%" },
  { level: 2, width: "3%" },
  { level: 1, width: "2%" },
]

export const RatingRow = () => {
  return (
    <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] pt-2 pb-10">
      {/* Overall rating */}
      <div className="px-6">
        <p className="mb-3 text-sm font-medium">Overall rating</p>

        <div className="flex flex-col gap-0.75">
          {ratingBars.map((rating) => (
            <div
              key={rating.level}
              className="grid grid-cols-[8px_1fr] items-center gap-2.5"
            >
              <span className="text-xs text-[#222]">{rating.level}</span>

              <div className="h-1 overflow-hidden rounded-xs bg-[#ebebeb]">
                <div
                  className="h-full bg-[#222]"
                  style={{ width: rating.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rating categories */}
      {ratingItems.map(({ label, value, icon: Icon }) => (
        <div key={label} className="border-l border-[#dddddd] px-6">
          <p className="mb-3 text-sm font-medium">{label}</p>

          <p className="mb-2 text-lg font-medium">{value}</p>

          <Icon className="size-8 text-[#222]" strokeWidth={1.7} />
        </div>
      ))}
    </div>
  )
}
