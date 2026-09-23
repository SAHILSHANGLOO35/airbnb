import { Overview } from "./left-section/overview"
import { GuestFavouriteBanner } from "./left-section/guest-banner"
import { Host } from "./left-section/host"
import { Highlights } from "./left-section/highlights"
import { Description } from "./left-section/description"
import { Sleep } from "./left-section/sleep"
import { Offers } from "./left-section/offers"
import { Calendar } from "./left-section/calendar"

export const LeftHalf = () => {
  return (
    <div>
      <div className="py-12">
        {/* Overview */}
        <Overview />

        {/* Guest favourite banner */}
        <GuestFavouriteBanner />

        {/* Host */}
        <Host />

        {/* Highlights */}
        <Highlights />

        {/* Description */}
        <Description />
      </div>

      {/* Where you'll sleep */}
      <Sleep />

      {/* What this place offers */}
      <Offers />

      {/* Calendar */}
      <Calendar />
    </div>
  )
}
