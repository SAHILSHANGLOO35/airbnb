import AirbnbLogo from "@/public/images/header/logo"
import { SearchBar } from "./search-bar"
import { HostNav } from "./host"

export const Navbar = () => {
  return (
    <header className="relative z-50 border-b border-[#ebebeb] bg-white px-20">
      <div className="grid h-22 w-full grid-cols-[1fr_auto_1fr] items-center">
        <AirbnbLogo className="h-8 w-auto cursor-pointer justify-self-start text-[#ff385c]" />

        <SearchBar />

        <div className="justify-self-end">
          <HostNav />
        </div>
      </div>
    </header>
  )
}
