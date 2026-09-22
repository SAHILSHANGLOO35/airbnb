import { Search } from "lucide-react"

export const SearchBar = () => {
  return (
    <div className="inline-flex h-12 cursor-pointer items-center justify-self-center rounded-[40px] border border-[#dddddd] bg-white px-2 shadow-[0_1px_4px_#00000014] transition-shadow duration-200 ease-in-out **:cursor-pointer hover:shadow-[0_2px_8px_#0000001f]">
      <div className="flex items-center gap-2 pr-4 pl-2">
        <img
          src="/header/searchbar-house.png"
          alt=""
          className="block size-12 object-fill"
        />

        <button className="inline-flex h-12 items-center gap-2 border-0 bg-transparent text-sm font-medium">
          Anywhere
        </button>
      </div>

      <div className="h-6 w-px bg-[#dddddd]" />

      <button className="inline-flex h-12 items-center gap-2 border-0 bg-transparent px-4 text-sm font-medium">
        Anytime
      </button>

      <div className="h-6 w-px bg-[#dddddd]" />

      <button className="inline-flex h-12 items-center gap-2 rounded-[40px] border-0 bg-transparent px-4 text-sm font-normal text-[#717171]">
        Add guests
      </button>

      <button
        aria-label="Search"
        className="ml-2 flex size-8 items-center justify-center rounded-full border-0 bg-[#ff385c] p-0"
      >
        <Search className="size-3.5 text-white" strokeWidth={3} />
      </button>
    </div>
  )
}
