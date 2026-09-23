"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Container } from "../container"
import { RoomSkeletonCard } from "./room-skeleton-card"
import { useRef } from "react"

const stays = [
  {
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
    image: "/images/stays/s1.jpeg",
  },
  {
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
    image: "/images/stays/s2.jpeg",
  },
  {
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    image: "/images/stays/s3.jpeg",
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    image: "/images/stays/s4.jpeg",
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
    image: "/images/stays/s5.jpeg",
  },
  {
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
    image: "/images/stays/s6.jpeg",
  },
  {
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
    image: "/images/stays/s2.jpeg",
  },
  {
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
    price: "₹22,824",
    rating: "4.92",
    image: "/images/stays/s4.jpeg",
  },
]

export const Stays = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    })
  }

  const handlePrevious = () => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <section>
      <Container>
        <div className="border-b border-[#ebebeb] py-12">
          {/* Heading */}
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[22px] leading-6.5 font-medium">
              More stays nearby
            </h2>

            <div className="flex items-center gap-2">
              <span className="mr-1.5 text-sm text-[#717171]">1 / 2</span>

              <button
                onClick={handlePrevious}
                aria-label="Previous stays"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-[#b0b0b0] bg-white hover:bg-[#f7f7f7]"
              >
                <ChevronLeft className="size-3" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next stays"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-[#b0b0b0] bg-white hover:bg-[#f7f7f7]"
              >
                <ChevronRight className="size-3" />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex scrollbar-none gap-5 overflow-x-auto scroll-smooth pb-1 [&::-webkit-scrollbar]:hidden"
          >
            {stays.map((stay) => (
              <RoomSkeletonCard key={stay.title} {...stay} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
