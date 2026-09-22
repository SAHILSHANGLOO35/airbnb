import { Globe } from "lucide-react"
import { Menu } from "lucide-react"

export const HostNav = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        href="/"
        className="cursor-pointer rounded-[22px] px-3.5 py-3 text-sm font-medium transition-colors duration-180 hover:bg-[#f7f7f7]"
      >
        Become a host
      </a>
      <button className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-[#f2f2f2] text-[#222] transition-colors duration-180 hover:bg-[#ebebeb]">
        <Globe className="size-4" />
      </button>
      <button className="flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-[#f2f2f2] text-[#222] transition-colors duration-180 hover:bg-[#ebebeb]">
        <Menu className="size-4" />
      </button>
    </div>
  )
}
