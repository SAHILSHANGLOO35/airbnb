import { GraduationCap, ShieldCheck, Venus } from "lucide-react"

import { Container } from "../container"

const coHosts = [
  {
    name: "Sharath",
    image: "/images/avatars/co1.jpg",
  },
  {
    name: "Aman Dev Pahwa",
    image: "/images/avatars/co2.jpg",
  },
  {
    name: "Maria Karen Priyanka",
    image: "/images/avatars/co3.jpg",
  },
  {
    name: "Simran",
    image: "/images/avatars/rev5.jpeg",
  },
  {
    name: "Pallavi",
    image: "/images/avatars/rev1.jpeg",
  },
  {
    name: "Sanyukta",
    image: "/images/avatars/rev2.jpeg",
  },
  {
    name: "Shruti",
    image: null,
    initial: "S",
    bg: "#fde3ec",
  },
  {
    name: "Amisha",
    image: null,
    initial: "A",
    bg: "#dcf1f6",
  },
]

export const Host = () => {
  return (
    <section>
      <Container>
        <div className="border-b border-[#ebebeb] py-12">
          <h2 className="mb-8 text-[22px] leading-6.5 font-medium">
            Meet your host
          </h2>

          <div className="grid grid-cols-[340px_1fr] items-start gap-12">
            {/* Left side */}
            <div>
              {/* Host card */}
              <div className="grid grid-cols-[1fr_100px] items-center rounded-[20px] border border-black/8 bg-white px-6 py-7.5 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                {/* Host info */}
                <div className="text-center">
                  <div className="relative mx-auto mb-3 size-22">
                    <img
                      src="/images/avatars/host.jpeg"
                      alt="Mirashya Homes"
                      className="size-22 rounded-full object-cover"
                    />

                    <div className="absolute right-0 bottom-1 flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#ff385c]">
                      <ShieldCheck
                        className="size-3.75 text-white"
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>

                  <h3 className="text-[26px] leading-tight font-medium">
                    Mirashya
                    <br />
                    Homes
                  </h3>

                  <p className="mt-1 text-[13px]">Host</p>
                </div>

                {/* Stats */}
                <div className="border-l border-[#ebebeb] pl-5">
                  <div className="py-2.5">
                    <p className="text-xl font-medium">1,463</p>
                    <p className="text-xs">Reviews</p>
                  </div>

                  <div className="border-t border-[#ebebeb] py-2.5">
                    <p className="text-xl font-medium">4.68★</p>
                    <p className="text-xs">Rating</p>
                  </div>

                  <div className="border-t border-[#ebebeb] py-2.5">
                    <p className="text-xl font-medium">2</p>
                    <p className="text-xs">Years hosting</p>
                  </div>
                </div>
              </div>

              {/* Host facts */}
              <div className="mt-5.5 flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5 text-[15px]">
                  <Venus className="size-6 shrink-0 text-[#222]" />

                  <span>Born in the 80s</span>
                </div>

                <div className="flex items-center gap-3.5 text-[15px]">
                  <GraduationCap className="size-6 shrink-0 text-[#222]" />

                  <span>Where I went to school: NICMAR GOA</span>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Co-Hosts</h3>

              <div className="mb-7.5 grid grid-cols-3 gap-x-2 gap-y-4">
                {coHosts.map((host) => (
                  <div
                    key={host.name}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    {host.image ? (
                      <img
                        src={host.image}
                        alt={host.name}
                        className="size-8.5 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex size-8.5 items-center justify-center rounded-full text-[13px] font-medium"
                        style={{ backgroundColor: host.bg }}
                      >
                        {host.initial}
                      </div>
                    )}

                    <span>{host.name}</span>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-medium">Host details</h3>

              <div className="text-[15px] leading-[1.6]">
                <p>Response rate: 100%</p>
                <p>Responds within an hour</p>
              </div>

              <button className="mt-4.5 cursor-pointer rounded-lg border-0 bg-[#f2f2f2] px-6 py-3.5 text-[15px] font-medium transition-colors hover:bg-[#ebebeb]">
                Message host
              </button>

              <div className="mt-7.5 flex items-start gap-2.5 text-xs text-[#717171]">
                <ShieldCheck className="size-6 shrink-0" strokeWidth={1.6} />

                <p>
                  To help protect your payment, always use Airbnb to send money
                  and communicate with hosts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
