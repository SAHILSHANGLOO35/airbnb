import { Container } from "../container"
import { LeftHalf } from "./left-half"
import { RightHalf } from "./right-half"

export const Content = () => {
  return (
    <div className="border-b border-[#ebebeb] pb-1">
      <Container>
        <div
          className="grid grid-cols-[minmax(0,1fr)_372px] gap-x-24"
          id="overview"
        >
          <LeftHalf />
          <RightHalf />
        </div>
      </Container>
    </div>
  )
}
