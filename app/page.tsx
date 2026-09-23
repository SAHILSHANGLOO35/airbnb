import { Content } from "@/components/layout/content/content"
import { Navbar } from "@/components/layout/header/nav"
import { SubNav } from "@/components/layout/header/sub-nav"
import { Hero } from "@/components/layout/hero/hero"
import { Host } from "@/components/layout/host/host"
import { Location } from "@/components/layout/location/location"
import { Stays } from "@/components/layout/more-stays/stays"
import { Reviews } from "@/components/layout/reviews/reviews"
import { ThingsToKnow } from "@/components/layout/things-to-know/things-to-know"
import { PhotoTour } from "@/components/photo-tour/photo-tour"

type Props = {
  searchParams: Promise<{
    view?: string
  }>
}

export default async function Page({ searchParams }: Props) {
  const { view } = await searchParams

  if (view === "photos") {
    return <PhotoTour />
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <SubNav />

      <Content />
      <Reviews />
      <Location />
      <Host />
      <ThingsToKnow />
      <Stays />
    </div>
  )
}
