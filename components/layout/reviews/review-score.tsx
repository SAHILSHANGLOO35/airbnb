export const ReviewScore = () => {
  return (
    <section className="pt-2 pb-10 text-center">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/images/ui/laurel-left.png"
          alt=""
          className="h-27.5 w-auto"
        />

        <span className="text-[100px] font-medium tracking-[-0.03em]">
          4.95
        </span>

        <img
          src="/images/ui/laurel-right.png"
          alt=""
          className="h-27.5 w-auto"
        />
      </div>

      <h2 className="mt-2 text-[22px] font-medium">Guest favourite</h2>

      <p className="mx-auto mt-2 max-w-105 text-[15px] leading-[1.35]">
        This home is a guest favourite based on ratings, reviews and reliability
      </p>

      <button className="mt-3.5 cursor-pointer border-0 bg-transparent text-sm font-medium underline">
        How reviews work
      </button>
    </section>
  )
}
