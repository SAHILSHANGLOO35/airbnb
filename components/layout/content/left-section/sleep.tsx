export const Sleep = () => {
  return (
    <section className="border-y border-[#ebebeb] py-8">
      <h2 className="mb-6 text-[22px] leading-6.5 font-medium">
        Where you'll sleep
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="/images/ui/sleep-1.jpeg"
            alt="Bedroom"
            className="block aspect-3/2 w-full rounded-lg border border-black/8 object-cover"
          />

          <p className="mt-3.5 text-[15px] font-medium">Bedroom</p>

          <p className="mt-0.5 text-sm text-[#717171]">1 double bed</p>
        </div>

        <div>
          <img
            src="/images/ui/sleep-2.jpeg"
            alt="Living room"
            className="block aspect-3/2 w-full rounded-lg border border-black/8 object-cover"
          />

          <p className="mt-3.5 text-[15px] font-medium">Living room</p>

          <p className="mt-0.5 text-sm text-[#717171]">1 sofa</p>
        </div>
      </div>
    </section>
  )
}
