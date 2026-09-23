import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react"

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

const octoberDays = [
  null,
  null,
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
]

const novemberDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
]

export const Calendar = () => {
  const isNovemberDisabled = (day: number) => {
    return (day >= 18 && day <= 24) || day === 29 || day === 30
  }

  return (
    <section className="py-8">
      {/* Heading */}
      <h2 className="text-[22px] leading-6.5 font-medium">
        5 nights in Candolim
      </h2>

      <p className="mt-1.5 mb-5.5 text-sm text-[#717171]">
        18 Oct 2026 - 23 Oct 2026
      </p>

      {/* Calendars */}
      <div className="relative grid grid-cols-2 gap-x-14">
        {/* Previous / next buttons */}
        <div className="absolute -top-1 flex w-full justify-between">
          <button
            aria-label="Previous month"
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent hover:bg-[#f2f2f2]"
          >
            <ChevronLeft className="size-3" />
          </button>

          <button
            aria-label="Next month"
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent hover:bg-[#f2f2f2]"
          >
            <ChevronRight className="size-3" />
          </button>
        </div>

        {/* October */}
        <div>
          <h3 className="mb-4.5 text-center text-base font-medium">
            October 2026
          </h3>

          {/* Week headings */}
          <div className="grid grid-cols-7">
            {octoberDays.map((day, index) => {
              if (!day) {
                return <div key={index} className="aspect-square" />
              }

              const isStart = day === 18
              const isEnd = day === 23
              const isBetween = day > 18 && day < 23

              return (
                <div
                  key={index}
                  className={`relative flex aspect-square items-center justify-center text-sm ${
                    isBetween ? "bg-[#f2f2f2]" : ""
                  } ${
                    isStart
                      ? "after:absolute after:top-0 after:right-0 after:bottom-0 after:w-1/2 after:bg-[#f2f2f2]"
                      : ""
                  } ${
                    isEnd
                      ? "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1/2 before:bg-[#f2f2f2]"
                      : ""
                  }`}
                >
                  <span
                    className={`relative z-10 flex size-full items-center justify-center rounded-full ${
                      isStart || isEnd ? "bg-[#222] text-white" : ""
                    }`}
                  >
                    {day}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* November */}
        <div>
          <h3 className="mb-4.5 text-center text-base font-medium">
            November 2026
          </h3>

          <div className="mb-1.5 grid grid-cols-7">
            {weekDays.map((day, index) => (
              <span
                key={`${day}-${index}`}
                className="text-center text-xs font-medium text-[#222]"
              >
                {day}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {novemberDays.map((day) => {
              const disabled = isNovemberDisabled(day)

              return (
                <div
                  key={day}
                  className={`relative flex aspect-square items-center justify-center rounded-full text-sm ${
                    disabled ? "text-[#dddddd] line-through" : "text-[#222]"
                  }`}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4.5 flex items-center justify-between">
        <div className="inline-flex h-5.5 w-7.5 items-center justify-center rounded-sm border border-[#b0b0b0]">
          <Keyboard className="size-4" strokeWidth={1.5} />
        </div>

        <button className="cursor-pointer border-0 bg-transparent text-sm font-medium underline underline-offset-2">
          Clear dates
        </button>
      </div>
    </section>
  )
}
