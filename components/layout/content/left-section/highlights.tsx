import { DoorIcon, FanIcon, FireplaceIcon } from "@/app/icons/icons"

export const Highlights = () => {
  return (
    <div className="flex flex-col gap-6 pt-1.5 pb-8">
      <div className="flex items-start gap-6">
        <FireplaceIcon
          className="size-6 shrink-0 text-[#222]"
          strokeWidth={1.7}
        />

        <div>
          <p className="text-sm leading-5 font-medium">Outdoor entertainment</p>
          <p className="mt-0.5 text-sm text-[#717171]">
            The pool and alfresco dining are great for summer trips.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <FanIcon className="size-6 shrink-0 text-[#222]" strokeWidth={1.7} />

        <div>
          <p className="text-sm leading-5 font-medium">
            Designed for staying cool
          </p>
          <p className="mt-0.5 text-sm text-[#717171]">
            Beat the heat with the A/C and ceiling fan.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <DoorIcon className="size-6 shrink-0 text-[#222]" strokeWidth={1.7} />

        <div>
          <p className="text-sm leading-5 font-medium">Self check-in</p>
          <p className="mt-0.5 text-sm text-[#717171]">
            You can check in with the building staff.
          </p>
        </div>
      </div>
    </div>
  )
}
