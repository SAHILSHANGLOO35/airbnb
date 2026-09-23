"use client"

import {
  AirConditioningIcon,
  BedLinenIcon,
  BodyWashIcon,
  BroomIcon,
  CarIcon,
  CribIcon,
  CutleryIcon,
  DiningIcon,
  DishwasherIcon,
  DoorIcon,
  DumbbellIcon,
  FanIcon,
  FlexibleCalendarIcon,
  GardenIcon,
  HairDryerIcon,
  HangerIcon,
  HotTubIcon,
  InteriorDoorIcon,
  IronIcon,
  KettleIcon,
  KitchenSinkIcon,
  LuggageIcon,
  NoCameraIcon,
  NoSmokingIcon,
  OvenIcon,
  PatioIcon,
  PawIcon,
  PoolIcon,
  ProjectorScreenIcon,
  RefrigeratorIcon,
  SecurityCameraIcon,
  SoapDispenserIcon,
  SprayIcon,
  StoveIcon,
  ToasterIcon,
  TvIcon,
  WashingMachineIcon,
  WifiIcon,
  WineGlassIcon,
  WorkspaceIcon,
} from "@/app/icons/icons"
import { X } from "lucide-react"
import { useEffect } from "react"

type AmenitiesModalProps = {
  open: boolean
  onClose: () => void
}

const amenityGroups = [
  {
    title: "Bathroom",
    items: [
      { label: "Hairdryer", icon: HairDryerIcon },
      { label: "Cleaning products", icon: LuggageIcon },
      { label: "Shampoo", icon: SoapDispenserIcon },
      { label: "Hot water", icon: HotTubIcon },
      { label: "Shower gel", icon: BodyWashIcon },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { label: "Washing machine", icon: WashingMachineIcon },
      { label: "Hangers", icon: HangerIcon },
      { label: "Bed linen", icon: BedLinenIcon },
      { label: "Room-darkening blinds", icon: ProjectorScreenIcon },
      { label: "Iron", icon: IronIcon },
      { label: "Clothes storage", icon: RefrigeratorIcon },
      { label: "Cot", icon: CribIcon },
    ],
  },
  {
    title: "Entertainment",
    items: [{ label: "TV", icon: TvIcon }],
  },
  {
    title: "Heating and cooling",
    items: [
      { label: "Air conditioning", icon: AirConditioningIcon },
      { label: "Ceiling fan", icon: FanIcon },
    ],
  },
  {
    title: "Home safety",
    items: [
      {
        label: "Exterior security cameras on property",
        icon: SecurityCameraIcon,
      },
      {
        label: "Carbon monoxide alarm",
        icon: NoCameraIcon,
        unavailable: true,
      },
      { label: "Smoke alarm", icon: NoSmokingIcon, unavailable: true },
    ],
  },
  {
    title: "Internet and office",
    items: [
      { label: "Wifi", icon: WifiIcon },
      { label: "Dedicated workspace", icon: WorkspaceIcon },
    ],
  },
  {
    title: "Kitchen and dining",
    items: [
      { label: "Kitchen", icon: CutleryIcon },
      { label: "Fridge", icon: OvenIcon },
      { label: "Freezer", icon: OvenIcon },
      { label: "Microwave", icon: DishwasherIcon },
      { label: "Cooking basics", icon: CutleryIcon },
      { label: "Crockery and cutlery", icon: DiningIcon },
      { label: "Kettle", icon: KettleIcon },
      { label: "Coffee", icon: KitchenSinkIcon },
      { label: "Wine glasses", icon: WineGlassIcon },
      { label: "Toaster", icon: ToasterIcon },
      { label: "Blender", icon: BroomIcon },
      { label: "Cooker", icon: StoveIcon },
    ],
  },
  {
    title: "Location features",
    items: [{ label: "Private entrance", icon: InteriorDoorIcon }],
  },
  {
    title: "Outdoor",
    items: [
      { label: "Patio or balcony", icon: GardenIcon },
      { label: "Outdoor dining area", icon: PatioIcon },
    ],
  },
  {
    title: "Parking and facilities",
    items: [
      { label: "Free parking on premises", icon: CarIcon },
      { label: "Pool", icon: PoolIcon },
      { label: "Hot tub", icon: HotTubIcon },
      { label: "Gym", icon: DumbbellIcon },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Pets allowed", icon: PawIcon },
      { label: "Cleaning available during stay", icon: SprayIcon },
      { label: "Long-term stays allowed", icon: FlexibleCalendarIcon },
      { label: "Self check-in", icon: DoorIcon },
    ],
  },
]

export const AmenitiesModal = ({ open, onClose }: AmenitiesModalProps) => {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className={`fixed inset-0 z-150 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
        open
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-title"
        className={`flex max-h-[calc(100vh-96px)] w-195 max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-xl bg-white transition-transform duration-250 ${
          open ? "translate-y-0" : "translate-y-5"
        }`}
      >
        {/* Top bar */}
        <div className="flex h-16 shrink-0 items-center px-6">
          <button
            onClick={onClose}
            aria-label="Close amenities"
            className="-ml-2 flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#f2f2f2]"
          >
            <X className="size-5.5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-12 pb-12">
          <h2
            id="amenities-title"
            className="mt-3 mb-5.5 text-[22px] font-medium"
          >
            What this place offers
          </h2>

          {amenityGroups.map((group) => (
            <section key={group.title} className="mb-7.5">
              <h3 className="mb-0.75 text-lg font-medium">{group.title}</h3>

              {group.items.map(({ label, icon: Icon, unavailable }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border-b border-[#ebebeb] py-4 text-base"
                >
                  <Icon
                    className={`size-6 shrink-0 ${
                      unavailable ? "text-[#717171]" : "text-[#222]"
                    }`}
                    strokeWidth={1.6}
                  />

                  <span
                    className={
                      unavailable ? "text-[#717171] line-through" : undefined
                    }
                  >
                    {label}
                  </span>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
