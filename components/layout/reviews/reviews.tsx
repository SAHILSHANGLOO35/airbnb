import { Container } from "../container"
import { Marquee } from "./marquee"
import { RatingRow } from "./rating-row"
import { ReviewGrid } from "./review-grid"
import { ReviewScore } from "./review-score"

export const Reviews = () => {
  return (
    <Container>
      <div className="border-b border-[#ebebeb] py-12" id="reviews">
        <ReviewScore />
        <RatingRow />
        <Marquee />
        <ReviewGrid />
      </div>
    </Container>
  )
}
